import { Tv, Refrigerator, Wind, Flame } from 'lucide-react';

export const services = [
  {
    id: 'fridge',
    name: 'Fridge',
    icon: Refrigerator,
    description: 'Expert refrigerator repair and maintenance services',
  },
  {
    id: 'ac',
    name: 'Air Conditioner',
    icon: Wind,
    description: 'Professional AC installation, repair, and servicing',
  },
  {
    id: 'tv',
    name: 'Television',
    icon: Tv,
    description: 'TV repair and setup services for all brands',
  },
  {
    id: 'stove',
    name: 'Gas Stove',
    icon: Flame,
    description: 'Gas stove repair and maintenance services',
  },
] as const;