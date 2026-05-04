"use client";

import { useEffect, useState } from "react";

type Lead = {
  id: string;
  name: string;
  email: string;
  business: string;
  message: string;
  created_at: string;
};

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/leads")
      .then((r) => r.json())
      .then((data) => {
        setLeads(data.leads || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Rolla<span className="text-[#534AB7]">.</span> — Lead Dashboard
            </h1>
            <p className="text-gray-500 mt-1">All contact form submissions</p>
          </div>
          <span className="bg-[#534AB7] text-white text-sm font-bold px-4 py-2 rounded-full">
            {leads.length} leads
          </span>
        </div>

        {loading ? (
          <div className="text-center py-24 text-gray-400 text-lg">Loading…</div>
        ) : leads.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-2xl border border-gray-100 text-gray-400">
            <p className="text-5xl mb-4">📭</p>
            <p className="text-lg font-medium">No leads yet.</p>
            <p className="text-sm mt-1">Submissions from the contact form will appear here.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {leads.map((lead) => (
              <div
                key={lead.id}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-[#534AB7] font-bold text-lg">
                        {lead.name[0].toUpperCase()}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{lead.name}</p>
                        <a
                          href={`mailto:${lead.email}`}
                          className="text-sm text-[#534AB7] hover:underline"
                        >
                          {lead.email}
                        </a>
                      </div>
                    </div>
                    {lead.business && (
                      <p className="text-sm text-gray-500 mb-3">
                        🏢 <span className="font-medium text-gray-700">{lead.business}</span>
                      </p>
                    )}
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <p className="text-sm font-medium text-gray-500 mb-1">Message</p>
                      <p className="text-gray-800 leading-relaxed">{lead.message}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs text-gray-400 font-medium">
                      {new Date(lead.created_at).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
