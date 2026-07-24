import {
  Amenity,
  CamperForm,
  Engine,
  Transmission,
} from './camper';

export interface CamperListItemDto {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  form: CamperForm;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: Transmission;
  engine: Engine;
  amenities: Amenity[];
  coverImage: string;
  totalReviews: number;
}

export interface CamperListResponseDto {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: CamperListItemDto[];
}

export interface CamperImageEntity {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
}

export interface CamperDetailsEntity {
  id: string;
  name: string;
  price: number;
  rating: number;
  totalReviews: number;
  location: string;
  description: string;
  form: CamperForm;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: Transmission;
  engine: Engine;
  amenities: Amenity[];
  gallery: CamperImageEntity[];
  createdAt: string;
  updatedAt: string;
}

export interface FiltersResponseDto {
  forms: CamperForm[];
  transmissions: Transmission[];
  engines: Engine[];
}