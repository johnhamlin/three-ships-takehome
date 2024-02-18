'use client';
import { useMemo, useReducer } from 'react';

import Card from './Card';
import ListFilters from './ListFilters';

import listReducer, { initialState } from '@/reducers/listReducer';

interface CardListProps {
  providersList: Provider[];
}

export default function CardList({ providersList }: CardListProps) {
  const [state, dispatch] = useReducer(listReducer, initialState);

  const filteredProvidersList = useMemo(() => {
    return providersList.filter(
      (provider) => provider.review_score >= state.minimumStarRating,
    );
  }, [providersList, state]);

  const minimumStarRatingChangeHandler = (value: number) => {
    dispatch({ type: 'UPDATE_MINIMUM_STAR_RATING', payload: value });
  };

  return (
    <section className="w-full">
      <ListFilters changeHandlers={{ minimumStarRatingChangeHandler }} />
      {/* // TODO: Map over providers and render a Card for each one */}
      {filteredProvidersList.map((provider) => (
        <Card key={provider._id} provider={provider} />
      ))}
    </section>
  );
}
