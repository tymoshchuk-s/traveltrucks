import { api } from './axiosClient';
import type {
  CamperForm,
  Engine,
  Transmission,
} from '@/types/camper';

import type {
    CamperDetailsEntity,
    CamperListResponseDto,
    FiltersResponseDto
} from '@/types/camper.dto';

export interface FetchCampersParams {
  page?: number;
  perPage?: number;
  location?: string;
  form?: CamperForm;
  transmission?: Transmission;
  engine?: Engine;
}

export const fetchCampers = async ({
  page = 1,
  perPage = 5,
  ...filters
}: FetchCampersParams = {}): Promise<CamperListResponseDto> => {
  const { data } = await api.get<CamperListResponseDto>('/campers', {
    params: {
      page,
      perPage,
      ...filters,
    },
  });

  return data;
};

export const fetchCamperById = async (
  id: string
): Promise<CamperDetailsEntity> => {
  const { data } = await api.get<CamperDetailsEntity>(`/campers/${id}`);

  return data;
};

export const fetchFilters = async (): Promise<FiltersResponseDto> => {
  const { data } = await api.get<FiltersResponseDto>('/filters');

  return data;
};