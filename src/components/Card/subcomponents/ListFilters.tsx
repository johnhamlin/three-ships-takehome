'use client';

import Select from 'react-select';
import type { ClassNamesConfig, GroupBase, MultiValue } from 'react-select';

import {
  StarRatingOption,
  StarRatingOptionType,
  StarRatingSingleValue,
} from './StarRatingOption';

interface ListFiltersProps {
  changeHandlers: {
    minimumStarRating: (value: number) => void;
    addServiceRequired: (payload: SelectOptionType) => void;
    toggleSortByDistance: (isSortedByDistance: boolean) => void;
  };
  serviceOptions: { value: string; label: string }[];
}

const sharedCustomClassName = 'sm:text-sm capitalize py-1';

// Custom classNames for the components that make up each Select component
// ! Don't use this to modify the StarRatingOption or StarRatingSingleValue components
const sharedCustomSubComponentClassNames: ClassNamesConfig = {
  placeholder: () => 'font-extrabold uppercase !text-gray-600', // TODO: For some reason, this can't change color
  indicatorSeparator: () => 'hidden',
  dropdownIndicator: () => '!text-blue-500 !pl-0',
  valueContainer: () => '!pr-1',
  container: () => 'min-w-40',
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
        // Have to use the type assertion because the type gets updated by our custom component, but the type safety is more useful in the sharedCustomSubComponentClassNames constant. As long as we don't try to modify the custom StarRatingOption or StarRatingSingleValue components here, we should be fine.
        classNames={
          sharedCustomSubComponentClassNames as ClassNamesConfig<
            StarRatingOptionType,
            boolean,
            GroupBase<StarRatingOptionType>
          >
        }
        menuShouldScrollIntoView={false}
        components={{
          Option: StarRatingOption,
          SingleValue: StarRatingSingleValue,
        }}
        options={[
          { value: '0', label: 'Any' },
          { value: '4.5', label: '4.5+ ⭐️' },
          { value: '4.0', label: '4+ ⭐️' },
          { value: '3.5', label: '3.5+ ⭐️' },
          { value: '3.0', label: '3+ ⭐️' },
          { value: '2.5', label: '2.5+ ⭐️' },
          { value: '2.0', label: '2+ ⭐️' },
          { value: '1.5', label: '1.5+ ⭐️' },
          { value: '1.0', label: '1+ ⭐️' },
        ]}
        onChange={(selectedOption): void => {
          if (!selectedOption) return;
          // This typing got messy because of the custom components
          if (Array.isArray(selectedOption)) {
            selectedOption.forEach((option) => {
              if ('value' in option) {
                changeHandlers.minimumStarRating(parseFloat(option.value));
              }
            });
          } else {
            if ('value' in selectedOption) {
              changeHandlers.minimumStarRating(
                parseFloat(selectedOption.value),
              );
            }
          }
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
          menuList: () => 'font-medium',
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
        options={[{ value: 'closest to me', label: 'Closest to Me' }]}
        className={sharedCustomClassName}
        classNames={{
          ...sharedCustomSubComponentClassNames,
          menuList: () => 'font-medium',
        }}
      />
    </div>
  );
}
