import React from 'react';
import { DEPARTMENTS } from '../data';
import { ArrowUpRight, ShieldCheck, HelpCircle } from 'lucide-react';

export default function DepartmentCard() {
  return (
    <div className="space-y-12">
      {/* Grid of Departments */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {DEPARTMENTS.map((dept) => {
          const isOpen = dept.recruitmentStatus === 'Open';
          return (
            <div
              key={dept.id}
              className="glass border border-white/5 hover:border-red-500/30 rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1.5 shadow-md"
            >
              {/* Banner Cover Image */}
              <div className="h-28 relative overflow-hidden">
                <img
                  src={dept.banner}
                  alt={dept.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F14] via-[#0A0F14]/40 to-transparent" />
                
                {/* Recruitment Status Badge overlay */}
                <div className="absolute top-3 right-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase font-mono border ${
                    isOpen
                      ? 'bg-red-500/10 border-red-500/30 text-red-400 shadow-[0_0_8px_rgba(239,68,68,0.2)]'
                      : 'bg-white/5 border-white/10 text-slate-500'
                  }`}>
                    {isOpen ? '• REC OPEN' : '• CLOSED'}
                  </span>
                </div>
              </div>

              {/* Department Body content */}
              <div className="p-5 sm:p-6 flex-grow flex flex-col text-left relative">
                {/* Float-up Emoji Logo */}
                <div className="w-12 h-12 rounded-xl bg-[#0A0F14]/90 glass border border-white/10 flex items-center justify-center text-2xl -mt-12 mb-4 relative z-10 shadow-lg group-hover:scale-110 group-hover:border-red-500/40 transition-transform">
                  {dept.icon}
                </div>

                <div className="mb-2">
                  <h3 className="font-extrabold text-white text-lg tracking-tight group-hover:text-red-400 transition-colors">
                    {dept.name}
                  </h3>
                  <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase font-bold block">
                    {dept.fullName}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-6 flex-grow">
                  {dept.description}
                </p>

                {/* Requirements list */}
                <div className="mb-6 space-y-2 border-t border-white/5 pt-4">
                  <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider block font-bold">
                    Persyaratan Utama:
                  </span>
                  <ul className="space-y-1.5">
                    {dept.requirements.slice(0, 3).map((req, index) => (
                      <li key={index} className="text-[11px] text-slate-300 leading-normal flex items-start gap-1.5">
                        <span className="text-red-500 font-bold shrink-0">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Link to Discord for Registration */}
                {isOpen ? (
                  <a
                    href="https://discord.gg/jkcrp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-red-600/10 hover:bg-red-600 border border-red-500/30 hover:border-red-600 text-red-400 hover:text-white rounded-xl text-xs font-bold font-mono tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    Daftar Instansi
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full py-3 bg-[#0A0F14]/40 border border-white/5 text-slate-600 rounded-xl text-xs font-bold font-mono tracking-wider uppercase flex items-center justify-center gap-1.5 cursor-not-allowed"
                  >
                    Recruitment Tutup
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
