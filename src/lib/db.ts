import Database from "better-sqlite3";
import path from "path";

const DB_PATH = path.join(process.cwd(), "dev.db");

function getDb() {
  const db = new Database(DB_PATH);

  // Create leads table if it doesn't exist
  db.exec(`
    CREATE TABLE IF NOT EXISTS leads (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      business TEXT,
      message TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now'))
    )
  `);

  return db;
}

export type Lead = {
  id: string;
  name: string;
  email: string;
  business: string;
  message: string;
  created_at: string;
};

export function createLead(data: Omit<Lead, "id" | "created_at">): Lead {
  const db = getDb();
  const id = crypto.randomUUID();

  const stmt = db.prepare(`
    INSERT INTO leads (id, name, email, business, message)
    VALUES (?, ?, ?, ?, ?)
  `);

  stmt.run(id, data.name, data.email, data.business ?? "", data.message);

  const lead = db.prepare("SELECT * FROM leads WHERE id = ?").get(id) as Lead;
  db.close();
  return lead;
}

export function getAllLeads(): Lead[] {
  const db = getDb();
  const leads = db.prepare("SELECT * FROM leads ORDER BY created_at DESC").all() as Lead[];
  db.close();
  return leads;
}
