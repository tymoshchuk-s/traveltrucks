import type { CamperForm } from '@/types/camper';

export const camperForm: {
  label: string;
  value: CamperForm;
}[] = [
  {
    label: 'Alcove',
    value: 'alcove',
  },
  {
    label: 'Panel Van',
    value: 'panel_van',
  },
  {
    label: 'Integrated',
    value: 'integrated',
  },
  {
    label: 'Semi integrated',
    value: 'semi_integrated',
  },
];