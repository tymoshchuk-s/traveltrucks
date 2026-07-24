'use client';

import { useState } from 'react';

import Filters from '@/components/Filters/Filters';
import CampersList from '../CampersList/CampersList';

import type { CamperFilters } from '@/types/camperForm';

const initialFilters: CamperFilters = {
  location: '',
  camperForm: '',
  engine: '',
  transmission: '',
};

export default function CampersPage() {
  const [filters, setFilters] = useState<CamperFilters>(initialFilters);

  const [appliedFilters, setAppliedFilters] =
    useState<CamperFilters>(initialFilters);

  const handleSearch = () => {
    setAppliedFilters(filters);
  };

  const handleClearFilters = () => {
    setFilters(initialFilters);
    setAppliedFilters(initialFilters);
  };

  return (
    <main>
      <Filters
        filters={filters}
        setFilters={setFilters}
        onSearch={handleSearch}
        onClear={handleClearFilters}
      />

      <CampersList filters={appliedFilters} />
    </main>
  );
}
