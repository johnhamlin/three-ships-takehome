import { FaCheck } from 'react-icons/fa';

import SectionHeader from './SectionHeader';

interface ServicesOfferedProps {
  services: string[];
}

// Renders a section header "Services Offered" followed by a list of services passed as props
export default function ServicesOffered({ services }: ServicesOfferedProps) {
  return (
    <>
      <SectionHeader>Services Offered</SectionHeader>
      <div className="text-md flex w-full flex-wrap gap-4 pr-2 font-serif capitalize">
        {services.map((service, index) => (
          <p key={index}>
            <FaCheck className="mr-2 inline-block text-green-500" />
            {service}
          </p>
        ))}
      </div>
    </>
  );
}
