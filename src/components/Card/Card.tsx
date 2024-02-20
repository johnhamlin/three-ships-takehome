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
import GetQuoteButton from './subcomponents/GetQuoteButton';

interface CardProps {
  provider: Provider;
}

export default function Card({ provider }: CardProps) {
  return (
    <div className="relative flex flex-col gap-2 rounded-md border-2 border-gray-300 px-5 py-7  sm:px-14 sm:pb-14 sm:pt-10">
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
  );
}
