'use client';
import { useMemo, useReducer } from 'react';
import type { MultiValue } from 'react-select';

import Card from './Card';
import ListFilters from './ListFilters';

import listReducer, { initialState } from '@/reducers/listReducer';

interface CardListProps {
  providersList: Provider[];
}

export default function CardList({ providersList }: CardListProps) {
  const [state, dispatch] = useReducer(listReducer, initialState);

  /**
   * Get a set of all the services offered by the providers.
   * This is used to populate the options for the Select component.
   * Memoized to prevent running multiple times.
   */
  const serviceOptions = useMemo(() => {
    // Get a list of all the services offered by the providers
    const allServices = providersList.flatMap((provider) => provider.services);
    // Remove duplicates
    const uniqueServices = Array.from(new Set(allServices));
    // Convert to an array of objects for the Select component
    return uniqueServices.map((service) => ({
      value: service,
      label: service,
    }));
  }, [providersList]);

  const filteredProvidersList = useMemo(() => {
    // filter the providersList based on the minimumStarRating
    const filteredList = providersList
      .filter((provider) => provider.review_score >= state.minimumStarRating)
      // Only show service providers that offer all the services required
      .filter((provider) =>
        state.servicesRequired.every((service) =>
          provider.services.includes(service),
        ),
      );

    return state.sortByDistance
      ? filteredList.toSorted((a, b) => a.distance - b.distance)
      : filteredList;
  }, [providersList, state]);

  const minimumStarRating = (value: number) => {
    dispatch({ type: 'UPDATE_MINIMUM_STAR_RATING', payload: value });
  };

  const addServiceRequired = (
    payload: MultiValue<{ value: string; label: string }>,
  ) => {
    dispatch({ type: 'ADD_SERVICE_REQUIRED', payload });
  };

  const toggleSortByDistance = () => {
    dispatch({ type: 'TOGGLE_SORT_BY_DISTANCE' });
  };

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
      {/* // TODO: Map over providers and render a Card for each one */}
      {filteredProvidersList.map((provider) => (
        <Card key={provider._id} provider={provider} />
      ))}
    </section>
  );
}
