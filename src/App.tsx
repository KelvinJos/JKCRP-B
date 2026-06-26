/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Shield, Sparkles, Monitor, Heart, ThumbsUp, Calendar, ArrowRight, Star, HelpCircle, FileText, ChevronRight, MessageSquare, AlertCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import DepartmentCard from './components/DepartmentCard';
import RulesExplorer from './components/RulesExplorer';
import AnnouncementBoard from './components/AnnouncementBoard';
import MediaGallery from './components/MediaGallery';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth scroll logic connected to Navbar interaction
  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarOffset = 100; // accounts for fixed header offset
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarOffset,
        behavior: 'smooth'
      });
    }
  };

  // Track scroll position to update active nav highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['sejarah', 'departemen', 'peraturan', 'galeri'];
      const scrollPosition = window.scrollY + 200;

      if (window.scrollY < 100) {
        setActiveSection('hero');
        return;
      }

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F14] text-slate-200 flex flex-col selection:bg-red-500 selection:text-white">
      
      {/* Navigation Header bar */}
      <Navbar onNavClick={handleScrollToSection} activeSection={activeSection} />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-radial-gradient(circle at 50% -20%, rgba(239, 68, 68, 0.15) 0%, transparent 65%) text-center">
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-red-500/10 border border-red-500/20 text-red-400 rounded-full text-xs font-bold uppercase tracking-wider animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" />
            Official JKC:RP Portal
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase leading-none">
            JAKARTA CITY<br />
            <span className="text-red-500 bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">ROLEPLAY</span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Rasakan denyut nadi Ibukota di platform <strong className="text-white">Roblox ER:LC</strong>. 
            Sistem pemerintahan terstruktur, fungsionalitas instansi realistis, serta penegakan hukum ketat demi kualitas permainan premium.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleScrollToSection('departemen')}
              className="px-6 py-3 accent-gradient text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transform hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              Daftar Instansi
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScrollToSection('peraturan')}
              className="px-6 py-3 glass hover:bg-white/5 border border-white/10 text-slate-200 hover:text-white font-bold text-sm sm:text-base rounded-xl transition-all"
            >
              Baca Peraturan
            </button>
          </div>

          {/* Key Stat Badges Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-10">
            <div className="glass p-4 rounded-2xl text-left flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400">
                <Monitor className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-white font-mono">Roblox</h4>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Platform Game</p>
              </div>
            </div>

            <div className="glass p-4 rounded-2xl text-left flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-white font-mono">4 Instansi</h4>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Aktif Departemen</p>
              </div>
            </div>

            <div className="glass p-4 rounded-2xl text-left flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-white font-mono">Serius RP</h4>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Patroli Realistis</p>
              </div>
            </div>

            <div className="glass p-4 rounded-2xl text-left flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-white font-mono">Active 24/7</h4>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Staff Moderator</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEJARAH SECTION */}
      <section id="sejarah" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-widest px-2.5 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
            Sejarah Kota
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            Perjalanan <span className="text-red-500">Jakarta City Roleplay</span>
          </h2>
        </div>

        {/* Historical card themed exactly like screenshot */}
        <div className="max-w-3xl mx-auto glass rounded-2xl p-6 sm:p-10 text-center space-y-6 relative overflow-hidden shadow-lg">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-transparent border border-white/10 text-slate-400 font-mono text-xs font-bold rounded-full uppercase tracking-wider">
            📅 EST. 22 NOVEMBER 2023
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            <strong className="text-white">Jakarta City Roleplay</strong> adalah server privat terkemuka di Roblox ER:LC bertema Kota Jakarta, Indonesia. 
            JKC:RP memelopori pengaplikasian sistem <strong className="text-red-400 font-medium">Patroli & Roleplay Tertib</strong> yang matang, 
            mencakup penegakan hukum lalu lintas secara presisi, penataan prosedur kedinasan resmi, serta pembinaan komunitas yang bersahabat bagi pemain baru maupun veteran.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/5 pt-6">
            <div className="p-4 bg-white/[0.01] rounded-xl border border-white/5">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">Tanggal Berdiri</span>
              <h3 className="text-lg sm:text-xl font-extrabold text-white font-mono mt-1">22 November 2023</h3>
            </div>
            <div className="p-4 bg-white/[0.01] rounded-xl border border-white/5">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">In-Game Server Code</span>
              <h3 className="text-lg sm:text-xl font-extrabold text-red-400 font-mono mt-1 uppercase tracking-wider">jkcrp</h3>
            </div>
          </div>
        </div>
      </section>

      {/* DEPARTEMEN SECTION */}
      <section id="departemen" className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-widest px-2.5 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
              Instansi Pemerintahan
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Departemen & Organisasi Kota
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Struktur fungsional resmi yang bertugas memelihara ketertiban, menegakkan regulasi, menyelenggarakan peradilan hukum, serta menjaga keselamatan warga Jakarta City.
            </p>
          </div>

          <DepartmentCard />
        </div>
      </section>

      {/* PERATURAN SECTION */}
      <section id="peraturan" className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-widest px-2.5 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
              Undang-Undang Server
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Pusat Hukum & Tata Tertib Roleplay
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Demi kenyamanan dan esensi bermain serius, seluruh warga wajib memahami dan mematuhi regulasi baku perundang-undangan di bawah ini. Cari pasal dengan cepat menggunakan bilah pencari.
            </p>
          </div>

          <RulesExplorer />
        </div>
      </section>

      {/* ANNOUNCEMENT BOARD */}
      <section className="py-16 bg-white/[0.01] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnnouncementBoard />
        </div>
      </section>

      {/* GALERI SECTION */}
      <section id="galeri" className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-widest px-2.5 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
              Galeri Kota
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Snapshot Suasana Jakarta City
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Intip sekilas keseruan penertiban jalan, aksi penyelamatan darurat, penangkapan kriminal, serta interaksi sosial harian para warga di dalam game.
            </p>
          </div>

          <MediaGallery />
        </div>
      </section>

      {/* FAQ COLLAPSIBLE ACCORDION QUICK SECTION */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">FAQ / Tanya Jawab Warga</h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2">Menjawab hal-hal umum yang sering ditanyakan warga baru</p>
          </div>

          <div className="space-y-4">
            <div className="glass p-5 rounded-xl space-y-2">
              <h4 className="font-bold text-white text-sm sm:text-base">Bagaimana cara join bermain di Jakarta City Roleplay?</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Caranya sangat mudah! Masuk ke game <strong className="text-white font-medium">Emergency Response: Liberty County (ER:LC)</strong> di Roblox. Klik menu private server, lalu ketik in-game server code resmi kami yaitu <strong className="text-red-500 font-mono uppercase font-bold">jkcrp</strong>. Selesai! Anda akan otomatis terhubung ke kota.
              </p>
            </div>

            <div className="glass p-5 rounded-xl space-y-2">
              <h4 className="font-bold text-white text-sm sm:text-base">Bagaimana cara masuk menjadi bagian dari instansi/departemen?</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Anda dapat membuka bagian <strong className="text-slate-300 font-normal">"Departemen & Organisasi"</strong> di website ini dan klik tombol <strong className="text-red-500 font-normal">"Daftar Instansi"</strong> jika status rekrutmen sedang terbuka (OPEN). Anda akan langsung dialihkan ke Discord kami untuk mengajukan pendaftaran secara resmi.
              </p>
            </div>

            <div className="glass p-5 rounded-xl space-y-2">
              <h4 className="font-bold text-white text-sm sm:text-base">Apakah donatur memiliki keuntungan khusus?</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Ya! Sebagai bentuk apresiasi karena mendukung biaya sewa server, donatur premium mendapatkan role eksklusif di Discord, izin impor unit kendaraan mewah pribadi berkustom nomor plat, serta prioritas slot antrean (Queue Priority).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0F14] border-t border-white/5 pt-16 pb-8 text-left mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/5">
          
          {/* Logo column */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 accent-gradient rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-red-500/25">
                JCR
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white block">
                  JAKARTA CITY <span className="text-red-500">ROLEPLAY</span>
                </span>
                <span className="text-[10px] text-slate-500 font-mono tracking-widest block uppercase">
                  Indonesian Premium Server
                </span>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Situs portal komunitas resmi Jakarta City Roleplay. Komunitas bermain serius Emergency Response: Liberty County bertema Indonesia. Livery autentik, hukum berintegritas.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest font-mono">Pintasan Navigasi</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => handleScrollToSection('sejarah')} className="hover:text-red-500 transition-colors text-left">Sejarah Pendirian</button></li>
              <li><button onClick={() => handleScrollToSection('departemen')} className="hover:text-red-500 transition-colors text-left">Instansi Pemerintah</button></li>
              <li><button onClick={() => handleScrollToSection('peraturan')} className="hover:text-red-500 transition-colors text-left">Peraturan Server</button></li>
            </ul>
          </div>

          {/* Important community links */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest font-mono">Tautan Penting</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="https://discord.gg/jkcrp" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">Gabung Discord Resmi</a></li>
              <li><a href="https://trakteer.id/jkcrp" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">Trakteer / Donasi Server</a></li>
              <li><a href="https://roblox.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">Roblox Group JKC</a></li>
            </ul>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Jakarta City Roleplay (JKC:RP). All Rights Reserved.</p>
          <p className="text-center sm:text-right">
            Situs ini dikembangkan secara independen oleh komunitas warga. Tidak berafiliasi dengan Roblox Corporation.
          </p>
        </div>
      </footer>

    </div>
  );
}

