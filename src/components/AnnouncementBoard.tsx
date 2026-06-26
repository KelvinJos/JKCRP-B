import { useState } from 'react';
import { Sparkles, Megaphone, Calendar, ChevronRight, Tag, Info, AlertCircle, Wrench } from 'lucide-react';
import { ANNOUNCEMENTS } from '../data';

export default function AnnouncementBoard() {
  const [activeTab, setActiveTab] = useState<'all' | 'season' | 'update' | 'event'>('all');

  const filteredAnnouncements = ANNOUNCEMENTS.filter(ann => {
    return activeTab === 'all' || ann.type === activeTab;
  });

  const getTagColor = (type: string) => {
    switch (type) {
      case 'season':
        return 'bg-red-500/10 border-red-500/20 text-red-400';
      case 'update':
        return 'bg-blue-500/10 border-blue-500/20 text-blue-400';
      case 'event':
        return 'bg-amber-500/10 border-amber-500/20 text-amber-400';
      default:
        return 'bg-neutral-800 border-neutral-700 text-neutral-400';
    }
  };

  const getTagIcon = (type: string) => {
    switch (type) {
      case 'season':
        return <Sparkles className="w-3.5 h-3.5" />;
      case 'update':
        return <Wrench className="w-3.5 h-3.5" />;
      case 'event':
        return <Megaphone className="w-3.5 h-3.5" />;
      default:
        return <Tag className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="bg-neutral-900/20 border border-neutral-850 rounded-2xl p-5 sm:p-6 text-left">
      {/* Header and tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-850 pb-5 mb-5">
        <div>
          <h3 className="font-extrabold text-white text-lg flex items-center gap-2">
            <Megaphone className="w-5 h-5 text-red-500" />
            Warta & Pengumuman Kota
          </h3>
          <p className="text-xs text-neutral-500 mt-1">Simak kabar terbaru, agenda event, dan catatan update patch resmi</p>
        </div>

        {/* Tab filters */}
        <div className="flex gap-1 bg-neutral-950 p-1 rounded-xl border border-neutral-850">
          {(['all', 'season', 'update', 'event'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono tracking-wide transition-all uppercase ${
                activeTab === tab
                  ? 'bg-neutral-900 text-white'
                  : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              {tab === 'all' ? 'Semua' : tab}
            </button>
          ))}
        </div>
      </div>

      {/* Announcements Timeline stack */}
      <div className="space-y-4">
        {filteredAnnouncements.map((ann) => (
          <div
            key={ann.id}
            className="group relative bg-neutral-900/40 hover:bg-neutral-900/60 border border-neutral-850/60 hover:border-neutral-800 p-5 rounded-xl transition-all duration-300"
          >
            {/* Top row */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold font-mono tracking-widest uppercase border flex items-center gap-1.5 ${getTagColor(ann.type)}`}>
                  {getTagIcon(ann.type)}
                  {ann.type}
                </span>
                
                <span className="text-[10px] font-mono text-neutral-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {ann.date}
                </span>
              </div>
            </div>

            {/* Title */}
            <h4 className="font-extrabold text-base text-white tracking-tight group-hover:text-red-400 transition-colors mb-2">
              {ann.title}
            </h4>

            {/* Description content */}
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              {ann.content}
            </p>
          </div>
        ))}

        {filteredAnnouncements.length === 0 && (
          <div className="py-12 text-center text-neutral-500 space-y-2">
            <AlertCircle className="w-8 h-8 text-neutral-600 mx-auto" />
            <h5 className="font-extrabold text-white text-sm">Belum Ada Pengumuman</h5>
            <p className="text-xs max-w-sm mx-auto">
              Belum ada info terbaru untuk kategori "{activeTab}". Silakan kembali berkala!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
