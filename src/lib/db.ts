import { neon } from "@neondatabase/serverless";

function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is not set");
  return neon(url);
}

// Auto-create the leads table if it doesn't exist yet
async function ensureTable() {
  const sql = getSql();
  await sql`
    CREATE TABLE IF NOT EXISTS leads (
      id          TEXT        PRIMARY KEY,
      name        TEXT        NOT NULL,
      email       TEXT        NOT NULL,
      business    TEXT        DEFAULT '',
      message     TEXT        NOT NULL,
      created_at  TIMESTAMPTZ DEFAULT NOW()
    )
  `;
}

export type Lead = {
  id: string;
  name: string;
  email: string;
  business: string;
  message: string;
  created_at: string;
};

export async function createLead(
  data: Omit<Lead, "id" | "created_at">
): Promise<Lead> {
  await ensureTable();
  const sql = getSql();
  const id = crypto.randomUUID();

  const rows = await sql`
    INSERT INTO leads (id, name, email, business, message)
    VALUES (${id}, ${data.name}, ${data.email}, ${data.business}, ${data.message})
    RETURNING *
  `;

  return rows[0] as Lead;
}

export async function getAllLeads(): Promise<Lead[]> {
  await ensureTable();
  const sql = getSql();
  const rows = await sql`SELECT * FROM leads ORDER BY created_at DESC`;
  return rows as Lead[];
}
