import Badges from './Badges';
import MoreInfoIconWithPopover from './MoreInfoIconWithPopover';
import StarRating from './StarRating';
import {
  placeholderMoreInfoText,
  placeholderRatingPercentageOfCompanies,
} from '../placeholderText';

interface BusinessInfoProps {
  provider: Provider;
}

export default function BusinessInfo({ provider }: BusinessInfoProps) {
  return (
    <>
      <h2 className="text-2xl font-bold">{provider.name}</h2>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-0 ">
        <div className="mr-3 flex items-center pr-1 sm:border-r sm:border-gray-200">
          <StarRating rating={provider.review_score} />
          <MoreInfoIconWithPopover
            // Passing down placeholder values here, but I assume this would come from the provider object or be calculated from it.
            text={placeholderMoreInfoText}
            ratingPercentageOfCompanies={placeholderRatingPercentageOfCompanies}
          />
        </div>
        <span className="font-serif text-gray-500">{provider.address}</span>
      </div>
      <Badges provider={provider} />
    </>
  );
}
