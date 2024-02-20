import Badges from './Badges';
import MoreInfo from './MoreInfo';
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
      <div className="flex items-center">
        <StarRating rating={provider.review_score} />
        <MoreInfo
          // Passing down placeholder values here, but I assume this would come from the provider object or be calculated from it.
          text={placeholderMoreInfoText}
          ratingPercentageOfCompanies={placeholderRatingPercentageOfCompanies}
        />
        <span className="ml-2 font-serif text-gray-600">
          | {provider.address}
        </span>
      </div>
      <Badges provider={provider} />
    </>
  );
}
