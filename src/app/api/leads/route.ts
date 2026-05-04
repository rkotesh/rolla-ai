import { NextResponse } from "next/server";
import { getAllLeads } from "@/lib/db";

export async function GET() {
  try {
    const leads = getAllLeads();
    return NextResponse.json({ leads });
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
