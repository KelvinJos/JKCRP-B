export interface Department {
  id: string;
  name: string;
  fullName: string;
  description: string;
  icon: string;
  banner: string;
  color: string;
  textColor: string;
  borderColor: string;
  bgGlow: string;
  recruitmentStatus: 'Open' | 'Closed';
  requirements: string[];
  discordRole: string;
}

export interface Rule {
  id: string;
  title: string;
  category: 'UUD' | 'METAGAMING' | 'FAILRP' | 'ZONES' | 'CRIMINAL' | 'SANCTIONS';
  description: string;
  examples?: {
    correct: string;
    incorrect: string;
  };
}

export interface Stock {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
  history: number[];
  volume: string;
  high: number;
  low: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Announcement {
  id: string;
  date: string;
  title: string;
  content: string;
  type: 'update' | 'season' | 'event';
}
