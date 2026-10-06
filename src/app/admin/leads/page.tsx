"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Building2, MessageSquare, Clock } from "lucide-react";

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
    <div className="min-h-screen bg-[#FAF7F2] p-6 md:p-10 text-[#0F1014]">
      {/* Ambient blobs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#2554F6]/4 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#6366F1]/4 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#686C78] hover:text-[#2554F6] mb-8 transition-colors uppercase tracking-widest font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to website
        </Link>

        {/* Header card */}
        <div className="bg-white rounded-[26px] border border-black/[0.07] p-7 shadow-[0_10px_30px_rgba(15,16,20,0.06)] mb-6 flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#0F1014] tracking-tight">
              Rolla<span className="text-[#2554F6]">.</span> — Lead Dashboard
            </h1>
            <p className="text-sm text-[#686C78] mt-1">All contact form submissions</p>
          </div>
          <span className="bg-[#0F1014] text-white text-xs font-mono font-semibold px-4 py-2 rounded-full">
            {leads.length} LEAD{leads.length !== 1 ? "S" : ""}
          </span>
        </div>

        {loading ? (
          <div className="text-center py-24 text-[#686C78] font-mono text-sm">
            <div className="w-6 h-6 border-2 border-[#2554F6]/30 border-t-[#2554F6] rounded-full animate-spin mx-auto mb-4" />
            Loading records…
          </div>
        ) : leads.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-[26px] border border-black/[0.07] shadow-[0_8px_28px_rgba(15,16,20,0.04)]">
            <p className="text-5xl mb-4">📭</p>
            <p className="text-base font-bold text-[#0F1014]">No leads yet.</p>
            <p className="text-sm text-[#686C78] mt-1">Submissions from the contact form will appear here.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {leads.map((lead, i) => (
              <div
                key={lead.id}
                className="bg-white rounded-[22px] border border-black/[0.07] p-6 shadow-[0_4px_16px_rgba(15,16,20,0.04)] hover:shadow-[0_10px_28px_rgba(15,16,20,0.08)] transition-all duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                  <div className="flex-1">
                    {/* Lead header */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2554F6] to-[#6366F1] flex items-center justify-center text-white font-bold text-sm shrink-0">
                        {lead.name[0].toUpperCase()}
                      </div>
                      <div>
                        <p className="font-bold text-[#0F1014] text-sm">{lead.name}</p>
                        <a
                          href={`mailto:${lead.email}`}
                          className="text-xs text-[#2554F6] hover:underline font-mono flex items-center gap-1 mt-0.5"
                        >
                          <Mail className="w-3 h-3" />
                          {lead.email}
                        </a>
                      </div>
                    </div>

                    {/* Company */}
                    {lead.business && (
                      <div className="flex items-center gap-2 mb-3">
                        <Building2 className="w-3.5 h-3.5 text-[#686C78]" />
                        <p className="text-xs text-[#686C78]">
                          <span className="font-mono uppercase tracking-wider mr-1.5">Company:</span>
                          <span className="font-semibold text-[#0F1014]">{lead.business}</span>
                        </p>
                      </div>
                    )}

                    {/* Message */}
                    <div className="bg-[#FAF7F2] rounded-xl border border-black/[0.05] p-4">
                      <div className="flex items-center gap-1.5 mb-2">
                        <MessageSquare className="w-3 h-3 text-[#686C78]" />
                        <p className="text-[0.6rem] font-mono font-semibold uppercase tracking-wider text-[#686C78]">Message</p>
                      </div>
                      <p className="text-sm text-[#33363F] leading-relaxed">{lead.message}</p>
                    </div>
                  </div>

                  {/* Timestamp */}
                  <div className="text-right shrink-0">
                    <div className="flex items-center gap-1.5 text-[#686C78] justify-end">
                      <Clock className="w-3 h-3" />
                      <span className="text-[0.65rem] font-mono">
                        {new Date(lead.created_at).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <span className="inline-block mt-2 font-mono text-[0.58rem] text-[#686C78] bg-[#F4EFE6] rounded-full px-2.5 py-1 uppercase tracking-wider">
                      Lead #{String(i + 1).padStart(3, "0")}
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
