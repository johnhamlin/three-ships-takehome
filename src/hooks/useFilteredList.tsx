import { useMemo, useReducer } from 'react';
import type { MultiValue } from 'react-select';

import listReducer from '@/reducers/listReducer';

const initialState = {
  minimumStarRating: 0,
  servicesRequired: [],
  sortByDistance: false,
};

export default function useFilteredList(providersList: Provider[]) {
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
    const filteredList = providersList
      // filter the providersList based on the minimumStarRating
      .filter((provider) => provider.review_score >= state.minimumStarRating)
      // Only show service providers that offer all the services required
      .filter((provider) =>
        state.servicesRequired.every((service) =>
          provider.services.includes(service),
        ),
      );

    // Sort the list by distance if sortByDistance is true
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

  const toggleSortByDistance = (payload: boolean) => {
    dispatch({ type: 'TOGGLE_SORT_BY_DISTANCE', payload });
  };

  return {
    filteredProvidersList,
    serviceOptions,
    minimumStarRating,
    addServiceRequired,
    toggleSortByDistance,
  };
}
