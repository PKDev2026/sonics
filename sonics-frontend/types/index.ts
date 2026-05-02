// types/index.ts

export interface Player {
  id: number;
  firstName: string;
  lastName: string;
  number: number;
  position: string;
  height: string;
  weight: string;
  experience: string;
  url: string;
}

export interface Staff {
  id: number;
  name: string;
  role: string;
  department: string;
  bio: string;
  url: string;
}

export interface Facility {
  id: number;
  name: string;
  category: string;
  locationAddress: string;
  description: string;
  amenities: string[]; // Matches the text[] from Postgres
  operatingHours: string;
}

export interface Milestone {
  id: number;
  year: number;
  event: string;
  description: string;
  isChampionship: boolean;
  imageUrl: string;
}

export interface SocialMedia {
  id: number;
  platform: string;
  handle: string;
  url: string;
}