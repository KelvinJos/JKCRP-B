import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, ShieldAlert } from 'lucide-react';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  caption: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    url: 'https://i.ibb.co.com/DH1w4jKR/images-4.jpg',
    title: '10+6=17',
    caption: 'Hanya test, tudak bermaksud untuk membuat/bertujuan pada hal negatif'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1200',
    title: 'Gemerlap Malam Jakarta Pusat',
    caption: 'Atmosfer jalan protokol Sudirman-Thamrin dengan tata lampu gedung pencakar langit khas Ibukota.'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1200',
    title: 'Reaksi Cepat Tim Medis (EMS)',
    caption: 'Simulasi tanggap darurat penanganan korban kecelakaan lalu lintas di jalan tol oleh personel JC:FD.'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1200',
    title: 'Penertiban Derek JC:DOT',
    caption: 'Petugas Dinas Perhubungan dan Transportasi menindak parkir liar di bahu jalan kawasan perkantoran.'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200',
    title: 'Persidangan Agung JC:KJ',
    caption: 'Skenario pembelaan terdakwa kasus korupsi bansos yang disidangkan oleh Kejaksaan Tinggi.'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200',
    title: 'Briefing Gabungan Operasi Zebra',
    caption: 'Manajemen Staff (JC:ST) memimpin briefing apel gelar pasukan lintas instansi sebelum event.'
  }
];

export default function MediaGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  return (
    <div className="space-y-6">
      {/* Photo grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GALLERY_IMAGES.map((img, idx) => (
          <div
            key={img.id}
            onClick={() => setLightboxIndex(idx)}
            className="group relative glass border border-white/5 rounded-2xl overflow-hidden aspect-video cursor-pointer shadow-md hover:shadow-xl hover:border-red-500/30 transition-all duration-300"
          >
            {/* Image */}
            <img
              src={img.url}
              alt={img.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover brightness-[0.7] grayscale-[0.2] group-hover:brightness-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            />
            
            {/* Hover details overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-left">
              <span className="text-[10px] text-red-400 font-mono font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                <Camera className="w-3 h-3" />
                Snapshot IC
              </span>
              <h4 className="font-extrabold text-white text-base tracking-tight mb-1 group-hover:text-red-400 transition-colors">
                {img.title}
              </h4>
              <p className="text-slate-400 text-xs truncate max-w-full">
                {img.caption}
              </p>
            </div>

            {/* Hover zoom-button */}
            <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Overlay modal */}
      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-fade-in"
        >
          {/* Close trigger */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-all z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls and Image frame */}
          <div className="relative w-full max-w-4xl max-h-[70vh] flex items-center justify-center">
            {/* Prev arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:-left-16 p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-red-400 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image viewer */}
            <div className="bg-[#0A0F14]/90 border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative max-w-full">
              <img
                src={GALLERY_IMAGES[lightboxIndex].url}
                alt={GALLERY_IMAGES[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[60vh] object-contain max-w-full"
              />
            </div>

            {/* Next arrow */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:-right-16 p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-red-400 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Captions and Info panel */}
          <div className="max-w-2xl text-center mt-6 space-y-2 px-4 select-none">
            <h4 className="text-xl font-extrabold text-white tracking-tight">
              {GALLERY_IMAGES[lightboxIndex].title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md mx-auto">
              {GALLERY_IMAGES[lightboxIndex].caption}
            </p>
            <span className="inline-block text-[10px] font-mono text-slate-500 font-semibold uppercase tracking-widest mt-2">
              Gambar {lightboxIndex + 1} dari {GALLERY_IMAGES.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
