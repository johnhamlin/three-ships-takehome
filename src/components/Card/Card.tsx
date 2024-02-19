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

interface CardProps {
  provider: Provider;
}

export default function Card({ provider }: CardProps) {
  return (
    <div className=" font- flex flex-col gap-2 rounded-md border-2 border-gray-300 px-14 pb-14 pt-10 ">
      <div className="relative mb-4 flex-row">
        <Logo
          className="mr-auto"
          slug={provider.slug}
          width={100}
          height={100}
          alt="The company's logo"
        />
        <button className="absolute right-0 top-0 bg-blue-600 px-16 py-3 font-bold text-white hover:bg-blue-700">
          Get Quote
        </button>
      </div>
      <BusinessInfo provider={provider} />
      <ServicesOffered services={provider.services} />
      <Experiences
        text={placeholderExperienceText}
        author={placeholderExperienceAuthor}
      />
      <SeeMore />
    </div>
  );
}
