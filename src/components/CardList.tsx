'use client';

import Card from './Card';
import ListFilters from './ListFilters';

import useFilteredList from '@/hooks/useFilteredList';

interface CardListProps {
  providersList: Provider[];
}

export default function CardList({ providersList }: CardListProps) {
  const {
    filteredProvidersList,
    serviceOptions,
    minimumStarRating,
    addServiceRequired,
    toggleSortByDistance,
  } = useFilteredList(providersList);

  return (
    <section className="w-full">
      <ListFilters
        changeHandlers={{
          minimumStarRating,
          addServiceRequired,
          toggleSortByDistance,
        }}
        serviceOptions={serviceOptions}
      />

      {/* Render a card for each provider that meets the current filter criteria */}
      {filteredProvidersList.map((provider) => (
        <Card key={provider._id} provider={provider} />
      ))}
    </section>
  );
}
