import type { Transmission } from '@/types/camper';

export const transmissions: {
  label: string;
  value: Transmission;
}[] = [
  {
    label: 'Automatic',
    value: 'automatic',
  },
  {
    label: 'Manual',
    value: 'manual',
  },
];