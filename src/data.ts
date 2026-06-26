import { Department, Rule, Stock, FAQ, Announcement } from './types';

export const DEPARTMENTS: Department[] = [
  {
    id: 'jkcpd',
    name: 'Jakarta Police Departemet',
    fullName: 'Jakarta City Police Department',
    description: 'Menegakkan hukum, menertibkan lalu lintas, membasmi kriminalitas, melindungi keselamatan warga sipil, serta menjaga keamanan di seluruh area Jakarta City.',
    icon: '👮‍♂️',
    banner: 'https://i.ibb.co/Tq2QJBCY/Banner-JCPD.png',
    color: '#ef4444', // Red
    textColor: 'text-red-500',
    borderColor: 'border-red-500/30',
    bgGlow: 'rgba(239, 68, 68, 0.1)',
    recruitmentStatus: 'Open',
    requirements: [
      'Tau Dasar-Dasar Roleplay',
      'Memiliki mic aktif & akun Discord yang terverifikasi.',
      'Memahami dasar-dasar Hukum Lalu Lintas dan Prosedur Penangkapan.',
      'Bersedia mengikuti pelatihan Akademi Kepolisian JC:PD.',
      'Loyal, disiplin tinggi, dan bebas dari catatan kriminal serius.'
    ],
    discordRole: 'JC:PD Cadet',
    discordUrl: 'https://discord.gg/MV6cwv4qtC'
  },
  {
    id: 'jkcfd',
    name: 'Jakarta Fire Departement',
    fullName: 'Jakarta City Fire Department',
    description: 'Menyediakan layanan tanggap darurat pemadaman kebakaran, penyelamatan bencana, serta perawatan medis darurat (EMS / Ambulans) yang cepat dan profesional.',
    icon: '🚒',
    banner: 'https://i.ibb.co.com/P7yb8Mx/Banner-JCFD.png',
    color: '#ef4444', // Red
    textColor: 'text-red-500',
    borderColor: 'border-red-500/30',
    bgGlow: 'rgba(239, 68, 68, 0.1)',
    recruitmentStatus: 'Open',
    requirements: [
      'Warga Negara Jakarta City minimal berumur 15 tahun (OOC).',
      'Memiliki kepedulian tinggi terhadap keselamatan warga.',
      'Mampu mengoperasikan kendaraan darurat secara aman dan responsif.',
      'Siap siaga dalam panggilan darurat medis atau kebakaran.',
      'Memahami SOP penanganan medis darurat (First Aid).'
    ],
    discordRole: 'JC:FD Candidate',
    discordUrl: 'https://discord.gg/uhdndPC7Qy'
  },
  {
    id: 'jkcdot',
    name: 'Jakarta Departement of Transportation',
    fullName: 'Jakarta City Department of Transportation',
    description: 'Mengelola infrastruktur lalu lintas, melakukan derek kendaraan yang parkir liar atau mogok, mengamankan tempat kejadian perkara, serta memelihara fasilitas umum.',
    icon: '🚧',
    banner: 'https://i.ibb.co.com/0jFq70rv/Banner-DOT.png',
    color: '#ef4444', // Red
    textColor: 'text-red-500',
    borderColor: 'border-red-500/30',
    bgGlow: 'rgba(239, 68, 68, 0.1)',
    recruitmentStatus: 'Open',
    requirements: [
      'Warga Negara Jakarta City aktif.',
      'Memiliki SIM (Surat Izin Mengemudi) kelas berat yang sah.',
      'Mengerti tata tertib parkir dan zona larangan berhenti di Jakarta.',
      'Dapat menggunakan truk derek (Tow Truck) dengan lancar.',
      'Sopan, sabar, dan memiliki etos kerja yang tinggi.'
    ],
    discordRole: 'JC:DOT Officer',
    discordUrl: 'https://discord.gg/jkcrp-dot'
  },
  {
    id: 'jkcbak',
    name: 'Biro Anti Korupsi',
    fullName: 'Biro Anti Korupsi',
    description: 'Lembaga yang menangani dan mengaudit kasus korupsi dalam sistem pemerintahan',
    icon: '⚖️',
    banner: 'https://i.ibb.co.com/XfPPnWBj/Banner-BAK.png',
    color: '#ef4444', // Red
    textColor: 'text-red-500',
    borderColor: 'border-red-500/30',
    bgGlow: 'rgba(239, 68, 68, 0.1)',
    recruitmentStatus: 'Closed',
    requirements: [
      'Minimal berumur 16 tahun (OOC).',
      'Lolos ujian tertulis Hukum Pidana dan Acara Peradilan Jakarta City.',
      'Memiliki kemampuan retorika dan analisa argumen yang sangat tajam.',
      'Mampu menyusun dokumen dakwaan atau nota pembelaan hukum.',
      'Memiliki rekam jejak integritas tinggi, objektif, dan adil.'
    ],
    discordRole: 'JKC:BAK',
    discordUrl: 'https://discord.gg/jkcrp-kj'
  }
];

export const RULES: Rule[] = [
  {
    id: 'mg',
    title: 'Metagaming (MG)',
    category: 'METAGAMING',
    description: 'Menggunakan informasi Out Of Character (OOC) yang didapatkan di luar game (seperti dari Discord, livestream, atau DM) untuk kepentingan karakter In-Character (IC) Anda di dalam game.',
    examples: {
      incorrect: 'Melihat nama pemain di atas kepalanya atau di daftar anggota Discord lalu memanggil namanya langsung di jalanan tanpa pernah berkenalan secara IC.',
      correct: 'Menghampiri pemain tersebut dan menanyakan namanya secara sopan secara IC: "Permisi mas, nama mas siapa ya?" sebelum memanggil namanya.'
    }
  },
  {
    id: 'pg',
    title: 'Powergaming (PG)',
    category: 'METAGAMING',
    description: 'Melakukan tindakan yang tidak realistis, mustahil dilakukan di dunia nyata, atau memaksakan tindakan roleplay kepada pemain lain tanpa memberikan kesempatan bagi mereka untuk melawan atau merespons.',
    examples: {
      incorrect: 'Mengendarai mobil sport mewah melompati bukit terjal setinggi 50 meter dan tetap melaju kencang seolah-olah tidak terjadi apa-apa tanpa roleplay kecelakaan.',
      correct: 'Saat menabrak pembatas jalan dengan keras, menghentikan kendaraan, menyalakan lampu hazard, dan melakukan roleplay pingsan atau mengecek kondisi tubuh.'
    }
  },
  {
    id: 'frp',
    title: 'Fail Roleplay (FailRP)',
    category: 'FAILRP',
    description: 'Melanggar esensi dasar roleplay dengan melakukan tindakan konyol yang merusak atmosfer permainan serius atau melanggar akal sehat kehidupan nyata.',
    examples: {
      incorrect: 'Mencuri mobil polisi yang sedang terparkir di depan kantor polisi pusat hanya untuk bersenang-senang tanpa alasan latar belakang cerita kriminal yang jelas.',
      correct: 'Melakukan aksi pencurian mobil sipil tersembunyi di area sepi dengan skenario roleplay pembobolan kunci yang rapi.'
    }
  },
  {
    id: 'fear',
    title: 'Fear Roleplay (FearRP / Value of Life)',
    category: 'FAILRP',
    description: 'Kewajiban menghargai nyawa karakter Anda sebagaimana di dunia nyata. Anda harus menunjukkan rasa takut dan menyerah ketika nyawa Anda terancam oleh senjata api yang ditodongkan dari jarak dekat.',
    examples: {
      incorrect: 'Saat ditodong oleh 3 perampok bersenjata laras panjang, Anda justru menolak menyerahkan uang dan sengaja kabur atau membalas memukul mereka.',
      correct: 'Mengangkat tangan, mengikuti perintah perampok dengan patuh untuk menyelamatkan nyawa Anda, lalu melapor ke polisi setelah para perampok pergi jauh.'
    }
  },
  {
    id: 'dm',
    title: 'Deathmatch (DM)',
    category: 'CRIMINAL',
    description: 'Menyerang, menembak, atau membunuh pemain lain secara acak tanpa adanya alasan atau alur cerita roleplay (storyline) yang melatarbelakanginya.',
    examples: {
      incorrect: 'Membeli senjata di pasar gelap lalu langsung menembaki setiap pengendara motor yang lewat di jalan raya tanpa alasan apapun.',
      correct: 'Melakukan perseteruan wilayah kartel, melakukan negosiasi yang gagal, memberikan peringatan terakhir, baru melakukan baku tembak berskenario.'
    }
  },
  {
    id: 'vdm',
    title: 'Vehicle Deathmatch (VDM)',
    category: 'CRIMINAL',
    description: 'Menggunakan kendaraan sebagai senjata untuk menabrak pemain lain atau merusak kendaraan lain secara sengaja tanpa alasan roleplay yang valid.',
    examples: {
      incorrect: 'Menabrak pejalan kaki yang sedang mengobrol di trotoar berulang kali menggunakan truk derek hingga mereka tewas.',
      correct: 'Secara tidak sengaja menyerempet pejalan kaki karena mengantuk, lalu segera turun untuk menolong dan melakukan roleplay membawa korban ke RS.'
    }
  },
  {
    id: 'gz',
    title: 'Greenzone Regulations',
    category: 'ZONES',
    description: 'Greenzone adalah area aman di mana tindakan kriminal dalam bentuk apapun (pembunuhan, perampokan, penculikan, sandera) dilarang keras demi keseimbangan server.',
    examples: {
      incorrect: 'Melakukan aksi perampokan atau penodongan terhadap warga yang baru saja keluar dari Bank Pusat atau Kantor Polisi Sektor Jakarta.',
      correct: 'Menunggu target kriminal keluar jauh dari batas wilayah Greenzone ke jalan sepi untuk memulai interaksi kriminal.'
    }
  },
  {
    id: 'rz',
    title: 'Redzone Regulations',
    category: 'ZONES',
    description: 'Redzone adalah zona bahaya/kriminalitas tinggi (seperti area transaksi pasar gelap, markas geng ilegal, atau kawasan kumuh tertentu) di mana konflik fisik diperbolehkan dengan pengamanan mandiri.',
    examples: {
      incorrect: 'Warga sipil biasa berjalan-jalan santai tanpa kewaspadaan di area rawan pasar gelap sambil merekam aktivitas ilegal dan berteriak-teriak.',
      correct: 'Sipil menjauhi Redzone, atau memasukinya dengan sangat hati-hati, memahami risiko tinggi dibegal atau terjebak dalam baku tembak.'
    }
  },
  {
    id: 'nlr',
    title: 'New Life Rule (NLR)',
    category: 'SANCTIONS',
    description: 'Aturan hidup baru setelah karakter Anda tewas (PK/Player Kill). Anda kehilangan seluruh ingatan jangka pendek mengenai kejadian yang menyebabkan kematian Anda, dan dilarang kembali ke lokasi kematian selama 15 menit.',
    examples: {
      incorrect: 'Setelah ditembak mati oleh begal di Ancol, Anda respawn di rumah sakit, mengambil senjata cadangan, lalu langsung pergi kembali ke Ancol untuk balas dendam.',
      correct: 'Melupakan pelaku begal, beraktivitas di area kota lain seperti Monas, dan menganggap kematian tersebut sebagai kecelakaan amnesia.'
    }
  }
];

export const STOCKS: Stock[] = [
  {
    id: 'jkcci',
    symbol: 'JKCCI',
    name: 'Jakarta City Composite Index',
    price: 6842.15,
    change: 1.42,
    history: [6710, 6745, 6730, 6780, 6765, 6810, 6842.15],
    volume: 'Rp 8.4T',
    high: 6865.20,
    low: 6710.00
  },
  {
    id: 'jkcpd',
    symbol: 'JKC-PD',
    name: 'Polis Bonds & Security',
    price: 1540.00,
    change: 0.85,
    history: [1510, 1515, 1530, 1520, 1535, 1545, 1540.00],
    volume: 'Rp 1.2T',
    high: 1550.00,
    low: 1505.00
  },
  {
    id: 'jkccorp',
    symbol: 'JKC-CORP',
    name: 'Artha Dinamika Utama',
    price: 3420.00,
    change: 3.12,
    history: [3150, 3210, 3280, 3240, 3310, 3350, 3420.00],
    volume: 'Rp 4.1T',
    high: 3450.00,
    low: 3120.00
  },
  {
    id: 'indfood',
    symbol: 'IND-FOOD',
    name: 'IndoKuliner Nusantara',
    price: 840.00,
    change: -0.45,
    history: [860, 855, 850, 848, 852, 843, 840.00],
    volume: 'Rp 980M',
    high: 865.00,
    low: 835.00
  },
  {
    id: 'jkctrans',
    symbol: 'JKC-TRANS',
    name: 'TransJakarta Logistics',
    price: 1210.00,
    change: -1.22,
    history: [1260, 1250, 1235, 1240, 1225, 1215, 1210.00],
    volume: 'Rp 2.1T',
    high: 1265.00,
    low: 1205.00
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: 'Bagaimana cara bergabung bermain di Jakarta City Roleplay?',
    answer: 'Pertama, pastikan Anda memiliki akun Roblox dan game Emergency Response: Liberty County (ER:LC). Buka game ER:LC, pilih menu "Server", klik "Private Server", lalu masukkan kode in-game resmi kami yaitu "jkcrp". Jangan lupa untuk masuk ke Discord resmi kami untuk mendapatkan verifikasi warga dan mengikuti info event terupdate.'
  },
  {
    id: 'faq-2',
    question: 'Apakah server ini menggunakan sistem White-List (WL)?',
    answer: 'Kami mengusung sistem Public-Serious RP. Siapa saja dapat bergabung bermain secara gratis tanpa whitelist, asalkan wajib memahami dan mematuhi aturan dasar roleplay yang berlaku. Pelanggaran berat akan ditindak tegas oleh Staff yang bertugas demi menjaga kualitas permainan.'
  },
  {
    id: 'faq-3',
    question: 'Bagaimana cara mendaftar menjadi anggota Polisi (JC:PD) atau Damkar (JC:FD)?',
    answer: 'Setiap departemen membuka pendaftaran secara berkala melalui Discord resmi kami. Anda dapat mengklik tombol "Daftar Instansi" di bagian Departemen Pemerintah untuk langsung dialihkan ke Discord kami dan mengajukan berkas Anda di saluran pendaftaran.'
  },
  {
    id: 'faq-4',
    question: 'Bagaimana jika saya menemukan pelanggar aturan atau mendapat tindakan tidak adil (FailRP)?',
    answer: 'Anda dapat mendokumentasikan pelanggaran tersebut (berupa rekaman video/screenshot) dan membuat tiket laporan (Ticket Report) di server Discord resmi kami pada saluran #report-player. Staff kami aktif 24/7 untuk meninjau laporan Anda secara adil.'
  }
];

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann-1',
    date: '2026-06-20',
    title: 'Peluncuran Season 2: Era Baru Ibukota',
    content: 'Season 2 resmi diluncurkan! Menghadirkan pembaruan tekstur seragam kepolisian Polda Metro Jaya, armada ambulans baru dengan logo instansi medis Indonesia, serta peningkatan integrasi aktivitas patroli bersama.',
    type: 'season'
  },
  {
    id: 'ann-2',
    date: '2026-06-15',
    title: 'Peningkatan Kualitas Roleplay Bersama',
    content: 'Kami terus menyempurnakan penegakan regulasi FailRP dan FearRP demi menghadirkan suasana roleplay premium. Pastikan selalu mematuhi undang-undang lalu lintas dan menghormati peran sesama warga.',
    type: 'update'
  },
  {
    id: 'ann-3',
    date: '2026-06-10',
    title: 'Mega Event: Pawai Kemerdekaan & Operasi Zebra',
    content: 'Menyambut HUT Kota, akan diadakan pawai parade kendaraan antik di sepanjang jalan utama kota. Kepolisian (JC:PD) juga akan menggalakkan Operasi Patuh Zebra. Siapkan dokumen berkendara Anda (SIM & STNK IC)!',
    type: 'event'
  }
];
