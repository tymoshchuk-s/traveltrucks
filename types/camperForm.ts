import {
  CamperForm,
  Engine,
  Transmission,
} from './camper';

export type CamperFilters = {
  location: string;
  camperForm?: CamperForm | '';
  transmission?: Transmission | '';
  engine?: Engine | '';
};