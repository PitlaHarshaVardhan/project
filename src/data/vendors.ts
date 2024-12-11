import { Technician } from '../types';

export const vendors: Technician[] = [
  {
    id: 1,
    name: 'Metro Hardware',
    rating: 8,
    reviews: 89,
    services: 22,
    image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    specialties: ['fridge', 'ac', 'tv']
  },
  {
    id: 2,
    name: 'City Appliance Repairs',
    rating: 9,
    reviews: 124,
    services: 18,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80',
    specialties: ['ac', 'stove']
  },
  {
    id: 3,
    name: 'Tech Solutions',
    rating: 7.5,
    reviews: 67,
    services: 15,
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    specialties: ['tv', 'fridge']
  }
];