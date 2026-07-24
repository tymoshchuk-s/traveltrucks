'use client';

import { useInfiniteQuery } from '@tanstack/react-query';

import { fetchCampers } from '@/lib/campersApi';
import CamperCard from '../CamperCard/CamperCard';

import type { CamperFilters } from '@/types/camperForm';

type Props = {
  filters: CamperFilters;
};

export default function CampersList({ filters }: Props) {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['campers', filters],

      queryFn: ({ pageParam }) =>
        fetchCampers({
          page: pageParam,
          location: filters.location || undefined,
          form: filters.camperForm || undefined,
          engine: filters.engine || undefined,
          transmission: filters.transmission || undefined,
        }),

      initialPageParam: 1,

      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.totalPages) {
          return lastPage.page + 1;
        }

        return undefined;
      },
    });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  console.log({
    page: data?.pages[data.pages.length - 1]?.page,
    totalPages: data?.pages[data.pages.length - 1]?.totalPages,
    hasNextPage,
  });

  return (
    <section>
      {campers.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}

      {hasNextPage && (
        <button
          type="button"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </button>
      )}
    </section>
  );
}
