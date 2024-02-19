import { IoIosInformationCircleOutline } from 'react-icons/io';

import Badges from './Badges';
import StarRating from './StarRating';

interface BusinessInfoProps {
  provider: Provider;
}

export default function BusinessInfo({ provider }: BusinessInfoProps) {
  return (
    <>
      <h2 className="text-2xl font-bold">{provider.name}</h2>
      <div className="flex items-center">
        <StarRating rating={provider.review_score} />
        {/* //TODO: onmouseover / onpress for mobile tool tip */}
        <IoIosInformationCircleOutline className="ml-1 self-start" />
        <span className="ml-2 font-serif text-gray-600">
          | {provider.address}
        </span>
      </div>
      <Badges provider={provider} />
    </>
  );
}
