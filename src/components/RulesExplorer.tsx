import { useState } from 'react';
import { Search, Info, HelpCircle, AlertTriangle, CheckCircle2, XCircle, Shield, ChevronDown, BookOpen } from 'lucide-react';
import { RULES } from '../data';

export default function RulesExplorer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'METAGAMING' | 'FAILRP' | 'ZONES' | 'CRIMINAL' | 'SANCTIONS'>('ALL');
  const [expandedRuleId, setExpandedRuleId] = useState<string | null>(null);

  const categories = [
    { value: 'ALL', label: 'Semua Peraturan' },
    { value: 'METAGAMING', label: 'Meta/Powergaming' },
    { value: 'FAILRP', label: 'FailRP & FearRP' },
    { value: 'CRIMINAL', label: 'Aturan Kriminal' },
    { value: 'ZONES', label: 'Zona Aman/Bahaya' },
    { value: 'SANCTIONS', label: 'Sanksi & Administratif' }
  ];

  const filteredRules = RULES.filter((rule) => {
    const matchesCategory = activeCategory === 'ALL' || rule.category === activeCategory;
    const matchesSearch =
      rule.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    if (expandedRuleId === id) {
      setExpandedRuleId(null);
    } else {
      setExpandedRuleId(id);
    }
  };

  return (
    <div className="space-y-6 text-left">
      {/* Intro and Search bar */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        <div className="relative flex-grow max-w-lg">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-slate-500" />
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari pasal peraturan (cth: metagaming, greenzone, nlr)..."
            className="w-full bg-[#0A0F14]/80 border border-white/10 focus:border-red-500 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-200 focus:outline-none placeholder:text-slate-500 shadow-sm"
          />
        </div>

        {/* Category filter pills */}
        <div className="flex overflow-x-auto gap-2 no-scrollbar py-1">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setActiveCategory(cat.value as any);
                setExpandedRuleId(null);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold shrink-0 transition-all font-mono tracking-wide border ${
                activeCategory === cat.value
                  ? 'bg-red-500/15 border-red-500/40 text-red-400 shadow-md'
                  : 'bg-white/5 border border-white/5 text-slate-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Rules list */}
      <div className="space-y-4">
        {filteredRules.length > 0 ? (
          filteredRules.map((rule) => {
            const isExpanded = expandedRuleId === rule.id;
            return (
              <div
                key={rule.id}
                className={`glass border rounded-xl overflow-hidden transition-all duration-200 ${
                  isExpanded ? 'border-red-500/30 bg-white/[0.02]' : 'border-white/5 hover:border-red-500/20'
                }`}
              >
                {/* Header accordion trigger */}
                <button
                  onClick={() => toggleExpand(rule.id)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-red-400 text-sm font-mono font-bold select-none">[PASAL]</span>
                    <h4 className="font-extrabold text-sm sm:text-base text-white tracking-tight">
                      {rule.title}
                    </h4>
                    <span className="hidden sm:inline-block bg-white/5 border border-white/5 text-slate-500 text-[10px] font-mono font-semibold px-2 py-0.5 rounded uppercase">
                      {rule.category}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                      isExpanded ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 border-t border-white/5 bg-[#0A0F14]/40 space-y-4">
                    {/* Category info overlay on mobile */}
                    <div className="sm:hidden flex items-center gap-2 mb-2">
                      <span className="text-[10px] text-slate-500 font-mono">KATEGORI:</span>
                      <span className="bg-white/5 border border-white/5 text-slate-400 text-[9px] font-mono px-2 py-0.5 rounded uppercase">
                        {rule.category}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {rule.description}
                    </p>

                    {/* Correct vs Incorrect interactive cases comparison */}
                    {rule.examples && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
                        {/* Incorrect example card */}
                        <div className="bg-rose-950/10 border border-rose-900/20 p-4 rounded-xl space-y-2">
                          <h5 className="text-[11px] font-mono font-extrabold text-rose-400 uppercase tracking-widest flex items-center gap-1.5">
                            <XCircle className="w-4 h-4" />
                            Contoh Salah (FAIL RP)
                          </h5>
                          <p className="text-xs text-slate-400 leading-relaxed italic">
                            "{rule.examples.incorrect}"
                          </p>
                        </div>

                        {/* Correct example card */}
                        <div className="bg-emerald-950/10 border border-emerald-900/20 p-4 rounded-xl space-y-2">
                          <h5 className="text-[11px] font-mono font-extrabold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4" />
                            Contoh Benar (GOOD RP)
                          </h5>
                          <p className="text-xs text-slate-400 leading-relaxed italic">
                            "{rule.examples.correct}"
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="bg-white/[0.01] border border-white/5 rounded-xl py-12 text-center text-slate-500 space-y-2">
            <AlertTriangle className="w-8 h-8 text-slate-600 mx-auto" />
            <h5 className="font-extrabold text-white text-sm">Tidak Menemukan Peraturan</h5>
            <p className="text-xs max-w-sm mx-auto">
              Tidak ada pasal yang cocok dengan kata kunci "{searchQuery}". Coba bersihkan pencarian atau ganti kategori filter.
            </p>
          </div>
        )}
      </div>

      {/* Core community values reminder */}
      <div className="glass p-5 border border-white/5 rounded-2xl flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
        <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-400 shrink-0">
          <BookOpen className="w-6 h-6 animate-pulse" />
        </div>
        <div>
          <h4 className="text-sm font-extrabold text-white">Prinsip Utama: Saling Menghargai & Berakal Sehat</h4>
          <p className="text-xs text-slate-400 leading-relaxed mt-1">
            Roleplay adalah cerita bersama. Selalu utamakan alur cerita (storyline) daripada kemenangan sepihak (win RP). Berikan kesempatan interaksi bagi lawan main Anda, dan nikmati atmosfer bermain serius bersama ratusan warga lainnya.
          </p>
        </div>
      </div>
    </div>
  );
}
