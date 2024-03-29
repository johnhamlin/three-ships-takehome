import { motion } from 'framer-motion';

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

// Renders a card for a provider, including their logo, business information, services offered, and a button to get a quote
export default function Card({ provider }: CardProps) {
  // Since there's no data about whether a provider is a featured partner, to demonstrate the UI, I'm assuming that a provider is a featured partner if their review score is 4.8 or higher
  const isFeaturedPartner = provider.review_score >= 4.8;

  return (
    // Using Framer Motion to animate the card when the user filters the list of providers
    <motion.div className="flex flex-col" layout transition={{ duration: 0.5 }}>
      {isFeaturedPartner && <FeaturedPartnerBanner />}
      <div
        className={
          'relative flex flex-col gap-2 rounded-md border-2 bg-white px-5 py-7 sm:px-14 sm:pb-14 sm:pt-10 ' +
          // Change the border color based on whether the provider is a featured partner
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
    </motion.div>
  );
}
