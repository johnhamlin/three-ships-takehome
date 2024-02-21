import { HiFire } from 'react-icons/hi';
import { PiMapPinFill } from 'react-icons/pi';

interface BadgesProps {
  provider: Provider;
}

// I moved this to its own component because it's likely to grow in scope as more badges are added

// Checks if the provider is nearby (based on the distance property being less than 5) and if the provider is popular (based on the review count being greater than or equal to 100).
// Renders a badge for each of these conditions.
export default function Badges({ provider }: BadgesProps) {
  const isNearby = provider.distance < 5;

  const isPopular = provider.review_count >= 100;

  return (
    <div className="flex items-center font-serif">
      {isNearby && (
        <Badge>
          <PiMapPinFill className="mr-1 text-xl text-green-700" />
          Nearby
        </Badge>
      )}
      {isPopular && (
        <Badge>
          <HiFire className="mr-0 text-xl text-green-700" />
          Popular
        </Badge>
      )}
    </div>
  );
}

// If this component grows in complexity, it could move to its own file.
function Badge({ children }: { children: React.ReactNode }) {
  return <div className="mr-3 flex items-center">{children}</div>;
}
