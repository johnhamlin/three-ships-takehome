'use client';

import Select, { components } from 'react-select';
import type { MultiValue, PlaceholderProps } from 'react-select';

interface ListFiltersProps {
  changeHandlers: {
    minimumStarRating: (value: number) => void;
    addServiceRequired: (
      payload: MultiValue<{ value: string; label: string }>,
    ) => void;
    toggleSortByDistance: (isSortedByDistance: boolean) => void;
  };
  serviceOptions: { value: string; label: string }[];
}

const sharedCustomClassName = 'text-xs capitalize py-1';

// Custom classNames for the components that make up each Select component
const sharedCustomSubComponentClassNames = {
  placeholder: () => 'font-extrabold uppercase', // TODO: For some reason, this can't change color
};

export default function ListFilters({
  changeHandlers,
  serviceOptions,
}: ListFiltersProps) {
  return (
    <div className="mb-2 flex w-full flex-col justify-end sm:flex-row sm:gap-3">
      {/* 
        Minimum Star Rating Filter
      */}
      <Select
        placeholder={'Star Rating'}
        // This fixes a warning in the console due to Next.js's SSR
        instanceId={'star-rating'}
        // ? This is supposed to fix another warning in the console, but it doesn't work
        // components={{
        //   Input: (props) => (
        //     <components.Input {...props} aria-activedescendant={undefined} />
        //   ),
        // }}

        isClearable
        isSearchable={false}
        className={sharedCustomClassName}
        classNames={sharedCustomSubComponentClassNames}
        menuShouldScrollIntoView={false}
        options={[
          { value: '0', label: 'Any' },
          { value: '4.5', label: '4.5+ ⭐️' },
          { value: '4', label: '4+ ⭐️' },
          { value: '3.5', label: '3.5+ ⭐️' },
          { value: '3', label: '3+ ⭐️' },
          { value: '2.5', label: '2.5+ ⭐️' },
          { value: '2', label: '2+ ⭐️' },
          { value: '1.5', label: '1.5+ ⭐️' },
          { value: '1', label: '1+ ⭐️' },
        ]}
        onChange={(selectedOption): void => {
          if (!selectedOption) return;
          changeHandlers.minimumStarRating(parseFloat(selectedOption.value));
        }}
      />

      {/* 
        Services Offered Filter
      */}
      <Select
        placeholder="Services Offered"
        instanceId={'services-offered'}
        menuShouldScrollIntoView={false}
        onChange={(selectedOption): void => {
          console.log('selectedOption', selectedOption);

          if (!selectedOption) return;
          changeHandlers.addServiceRequired(selectedOption);
        }}
        options={serviceOptions}
        isMulti
        className={sharedCustomClassName}
        classNames={{
          ...sharedCustomSubComponentClassNames,
          menuList: () => 'font-semibold',
        }}
      />

      {/* 
        Distance Filter
      */}
      <Select
        placeholder="Distance"
        inputId="distance"
        isClearable
        isSearchable={false}
        menuShouldScrollIntoView={false}
        onChange={(_event, { action }): void => {
          changeHandlers.toggleSortByDistance(action === 'select-option');
        }}
        options={[
          { value: 'sort by closest to me', label: 'Sort by Closest to Me' },
        ]}
        className={sharedCustomClassName}
        classNames={sharedCustomSubComponentClassNames}
      />
    </div>
  );
}
