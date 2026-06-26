import { useState, useEffect } from 'react';
import { Shield, ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavClick, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Sejarah', id: 'sejarah' },
    { label: 'Departemen', id: 'departemen' },
    { label: 'Peraturan', id: 'peraturan' },
    { label: 'Galeri', id: 'galeri' },
  ];

  const handleItemClick = (id: string) => {
    onNavClick(id);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-white/10 shadow-xl'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleItemClick('hero')}>
            <div className="w-10 h-10 accent-gradient rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-red-500/20 transition-transform hover:scale-105">
              JCR
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-white block">
                JAKARTA CITY <span className="text-red-500">ROLEPLAY</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest block uppercase">
                Indonesian Premium Server
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`text-sm font-semibold transition-all duration-200 hover:text-red-400 ${
                  activeSection === item.id ? 'text-red-500 font-bold' : 'text-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Discord */}
          <div className="hidden md:block">
            <a
              href="https://discord.gg/jkcrp"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-gradient inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-red-900/30"
            >
              JOIN DISCORD
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 w-[280px] bg-[#0A0F14]/95 glass border-l border-white/10 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-6 gap-6">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`text-left text-base font-semibold py-2 border-b border-white/5 ${
                  activeSection === item.id ? 'text-red-500' : 'text-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-auto">
            <a
              href="https://discord.gg/jkcrp"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-gradient flex items-center justify-center gap-2 text-white font-bold w-full py-3 rounded-xl transition-all shadow-lg"
            >
              JOIN DISCORD
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
        />
      )}
    </nav>
  );
}
