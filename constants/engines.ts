import type { Engine } from '@/types/camper';

export const engines: {
  label: string;
  value: Engine;
}[] = [
  {
    label: 'Diesel',
    value: 'diesel',
  },
  {
    label: 'Petrol',
    value: 'petrol',
  },
  {
    label: 'Hybrid',
    value: 'hybrid',
  },
  {
    label: 'Electric',
    value: 'electric',
  },
];