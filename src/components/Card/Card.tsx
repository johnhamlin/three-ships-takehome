import { Span } from 'next/dist/trace';

import {
  placeholderExperienceAuthor,
  placeholderExperienceText,
} from './placeholderText';
import {
  BusinessInfo,
  Experiences,
  Logo,
  SeeMore,
  ServicesOffered,
} from './subcomponents';
import FeaturedPartnerBanner from './subcomponents/FeaturedPartnerBanner';
import GetQuoteButton from './subcomponents/GetQuoteButton';

interface CardProps {
  provider: Provider;
}

export default function Card({ provider }: CardProps) {
  // Since there's no data about whether a provider is a featured partner, to demonstrate the UI, I'm assuming that a provider is a featured partner if their review score is 4.8 or higher
  const isFeaturedPartner = provider.review_score >= 4.8;

  return (
    <div className="flex flex-col">
      {isFeaturedPartner && <FeaturedPartnerBanner />}
      <div
        className={
          'relative -z-10 flex flex-col gap-2 rounded-md border-2 bg-white px-5 py-7 sm:px-14 sm:pb-14 sm:pt-10 ' +
          (isFeaturedPartner
            ? 'rounded-t-md border-t-2 border-[#0198fe]'
            : 'border-gray-300')
        }
      >
        <Logo slug={provider.slug} />
        <BusinessInfo provider={provider} />
        <GetQuoteButton href={provider.website} />
        <ServicesOffered services={provider.services} />
        <Experiences
          // Passing down placeholder values here, but I assume this would come from the provider object
          text={placeholderExperienceText}
          author={placeholderExperienceAuthor}
        />

        <SeeMore />
      </div>
    </div>
  );
}
