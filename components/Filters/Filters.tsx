'use client';

import FilterRadioGroup from './FilterRadioGroup';
import LocationInput from './LocationInput';

import { camperForm } from '@/constants/camperForm';
import { engines } from '@/constants/engines';
import { transmissions } from '@/constants/transmissions';

import type { CamperFilters } from '@/types/camperForm';

type Props = {
  filters: CamperFilters;
  setFilters: React.Dispatch<React.SetStateAction<CamperFilters>>;
  onSearch: () => void;
  onClear: () => void;
};

export default function Filters({
  filters,
  setFilters,
  onSearch,
  onClear,
}: Props) {
  return (
    <aside>
      <div>
        <h2>Location</h2>

        <LocationInput
          value={filters.location}
          onChange={(value) =>
            setFilters((prev) => ({
              ...prev,
              location: value,
            }))
          }
        />
      </div>

      <div>
        <h2>Filters</h2>

        <FilterRadioGroup
          title="Camper Form"
          name="camperForm"
          options={camperForm}
          value={filters.camperForm}
          onChange={(value) =>
            setFilters((prev) => ({
              ...prev,
              camperForm: value,
            }))
          }
        />

        <FilterRadioGroup
          title="Engine"
          name="engine"
          options={engines}
          value={filters.engine}
          onChange={(value) =>
            setFilters((prev) => ({
              ...prev,
              engine: value,
            }))
          }
        />

        <FilterRadioGroup
          title="Transmission"
          name="transmission"
          options={transmissions}
          value={filters.transmission}
          onChange={(value) =>
            setFilters((prev) => ({
              ...prev,
              transmission: value,
            }))
          }
        />
      </div>

      <div>
        <button type="button" onClick={onSearch}>
          Search
        </button>

        <button type="button" onClick={onClear}>
          Clear filters
        </button>
      </div>
    </aside>
  );
}
