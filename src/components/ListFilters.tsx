'use client';

import Select from 'react-select';

interface ListFiltersProps {
  changeHandlers: {
    minimumStarRatingChangeHandler: (value: number) => void;
  };
}

export default function ListFilters({ changeHandlers }: ListFiltersProps) {
  return (
    <div className="flex w-full justify-end gap-3">
      <Select
        placeholder={'Star Rating'}
        classNames={{
          // control: () => 'text-red-500',
          placeholder: () => 'text-red-500', // TODO: For some reason, this doesn't work
        }}
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
          console.log('selectedOption', selectedOption);

          if (!selectedOption) return;
          changeHandlers.minimumStarRatingChangeHandler(
            parseFloat(selectedOption.value),
          );
        }}
      />
      <Select
        placeholder="Services Offered"
        options={[{ value: 'services', label: 'Services Offered' }]}
      />
      <Select
        placeholder="Distance"
        options={[{ value: 'distance', label: 'Distance' }]}
      />
    </div>
  );
}
