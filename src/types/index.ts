export interface Technician {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  services: number;
  image: string;
  specialties: string[];
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
}

export interface ServiceRequest {
  city: string;
  appliance: string;
  issue: string;
}