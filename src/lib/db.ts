import { neon } from "@neondatabase/serverless";
import Database from "better-sqlite3";
import path from "node:path";

let sqliteDb: Database.Database | null = null;

function getDatabaseUrl() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is not set");
  return url;
}

function isSqliteUrl(url: string) {
  return url.startsWith("file:");
}

function getSql() {
  const url = getDatabaseUrl();
  if (isSqliteUrl(url)) {
    throw new Error("getSql() cannot be used with a SQLite DATABASE_URL");
  }

  return neon(url);
}

function getSqliteDb() {
  const url = getDatabaseUrl();
  let databasePath = decodeURIComponent(url.replace(/^file:/, ""));

  if (databasePath.startsWith("//")) {
    databasePath = new URL(url).pathname;
  }

  if (databasePath.match(/^\/[A-Za-z]:\//)) {
    databasePath = databasePath.slice(1);
  }

  if (!path.isAbsolute(databasePath)) {
    databasePath = path.resolve(/* turbopackIgnore: true */ process.cwd(), databasePath);
  }

  if (!sqliteDb) {
    sqliteDb = new Database(databasePath);
  }

  return sqliteDb;
}

async function ensurePostgresTable() {
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

function ensureSqliteTable() {
  const db = getSqliteDb();
  db.exec(`
    CREATE TABLE IF NOT EXISTS leads (
      id          TEXT     PRIMARY KEY,
      name        TEXT     NOT NULL,
      email       TEXT     NOT NULL,
      business    TEXT     DEFAULT '',
      message     TEXT     NOT NULL,
      created_at  TEXT     DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

// Auto-create the leads table if it doesn't exist yet
async function ensureTable() {
  const url = getDatabaseUrl();

  if (isSqliteUrl(url)) {
    ensureSqliteTable();
    return;
  }

  await ensurePostgresTable();
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
  const url = getDatabaseUrl();
  const id = crypto.randomUUID();

  if (isSqliteUrl(url)) {
    const db = getSqliteDb();
    const createdAt = new Date().toISOString();

    db.prepare(`
      INSERT INTO leads (id, name, email, business, message, created_at)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(id, data.name, data.email, data.business, data.message, createdAt);

    return {
      id,
      name: data.name,
      email: data.email,
      business: data.business,
      message: data.message,
      created_at: createdAt,
    };
  }

  const sql = getSql();
  const rows = await sql`
    INSERT INTO leads (id, name, email, business, message)
    VALUES (${id}, ${data.name}, ${data.email}, ${data.business}, ${data.message})
    RETURNING *
  `;

  return rows[0] as Lead;
}

export async function getAllLeads(): Promise<Lead[]> {
  await ensureTable();
  const url = getDatabaseUrl();

  if (isSqliteUrl(url)) {
    const db = getSqliteDb();
    return db.prepare("SELECT * FROM leads ORDER BY created_at DESC").all() as Lead[];
  }

  const sql = getSql();
  const rows = await sql`SELECT * FROM leads ORDER BY created_at DESC`;
  return rows as Lead[];
}
