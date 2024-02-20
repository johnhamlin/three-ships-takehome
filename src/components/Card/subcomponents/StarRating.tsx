import { FaStar, FaRegStar } from 'react-icons/fa6';

interface StarRatingProps {
  rating: number;
}

// These are the widths of the partial star to be rendered on top of the empty star. Straight percentages don't work because the empty star shares an outline with the partial star. The partial star is rendered on top of the empty star and the width is adjusted to show the partial star.
// I'm sure there's a more programmatic way to do this, but this gives me total control over the width of the partial star.
const partialStarWidthMap: { [key: string]: string } = {
  0: '0%',
  0.1: '27%',
  0.2: '35%',
  0.3: '41%',
  0.4: '46%',
  0.5: '50%',
  0.6: '58%',
  0.7: '62%',
  0.8: '65%',
  0.9: '70%',
};

export default function StarRating({ rating }: StarRatingProps) {
  const MAX_STARS = 5;
  const wholeStars = Math.floor(rating);
  const partialStar = rating % 1; // Gets the decimal part of the rating
  const emptyStars = MAX_STARS - Math.ceil(rating);

  return (
    <>
      <div className="flex text-yellow-400">
        {/* Render Whole Stars */}
        {Array.from({ length: wholeStars }, (_, i) => (
          <span key={`whole-${i}`}>
            <FaStar />
          </span>
        ))}
        {/* Render Partial Star */}
        {partialStar > 0 && (
          <span className="relative">
            <span>
              {/* Empty star to be partially filled */}
              <FaRegStar />
            </span>{' '}
            {/* Partial star to render on top of empty star */}
            <span
              className="absolute left-0 top-0 overflow-hidden"
              style={{
                width: partialStarWidthMap[partialStar.toFixed(1)],
              }}
            >
              <FaStar />
            </span>
          </span>
        )}
        {/* Render Empty Stars */}
        {Array.from({ length: emptyStars }, (_, i) => (
          <span key={`empty-${i}`} style={{ opacity: 0.5 }}>
            <FaRegStar />
          </span>
        ))}
      </div>
      <span className="ml-1 font-bold sm:text-sm">{`${rating}/5`}</span>
    </>
  );
}

// This is a debugging component that shows the StarRating component with all possible ratings.
// I used it to pick the percentages used in partialStarWidthMap.
// I could have used a for loop, but Copilot made this for me and it works fine.
export function StarRatingDesignDebugger() {
  return (
    <div className="flex flex-col gap-4">
      <StarRating rating={0} />
      <StarRating rating={0.1} />
      <StarRating rating={0.2} />
      <StarRating rating={0.3} />
      <StarRating rating={0.4} />
      <StarRating rating={0.5} />
      <StarRating rating={0.6} />
      <StarRating rating={0.7} />
      <StarRating rating={0.8} />
      <StarRating rating={0.9} />
      <StarRating rating={1} />
      <StarRating rating={1.1} />
      <StarRating rating={1.2} />
      <StarRating rating={1.3} />
      <StarRating rating={1.4} />
      <StarRating rating={1.5} />
      <StarRating rating={1.6} />
      <StarRating rating={1.7} />
      <StarRating rating={1.8} />
      <StarRating rating={1.9} />
      <StarRating rating={2} />
      <StarRating rating={2.1} />
      <StarRating rating={2.2} />
      <StarRating rating={2.3} />
      <StarRating rating={2.4} />
      <StarRating rating={2.5} />
      <StarRating rating={2.6} />
      <StarRating rating={2.7} />
      <StarRating rating={2.8} />
      <StarRating rating={2.9} />
      <StarRating rating={3} />
      <StarRating rating={3.1} />
      <StarRating rating={3.2} />
      <StarRating rating={3.3} />
      <StarRating rating={3.4} />
      <StarRating rating={3.5} />
      <StarRating rating={3.6} />
      <StarRating rating={3.7} />
      <StarRating rating={3.8} />
      <StarRating rating={3.9} />
      <StarRating rating={4} />
      <StarRating rating={4.1} />
      <StarRating rating={4.2} />
      <StarRating rating={4.3} />
      <StarRating rating={4.4} />
      <StarRating rating={4.5} />
      <StarRating rating={4.6} />
      <StarRating rating={4.7} />
      <StarRating rating={4.8} />
      <StarRating rating={4.9} />
      <StarRating rating={5} />
    </div>
  );
}
