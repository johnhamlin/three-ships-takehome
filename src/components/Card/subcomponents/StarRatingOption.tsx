import { FaStar, FaRegStar, FaStarHalfStroke } from 'react-icons/fa6';
import { components } from 'react-select';
import type { OptionProps, SingleValueProps } from 'react-select';

export interface StarRatingOptionType {
  readonly value:
    | '0'
    | '4.5'
    | '4.0'
    | '3.5'
    | '3.0'
    | '2.5'
    | '2.0'
    | '1.5'
    | '1.0';
  readonly label: string;
}

// Component to contain the stars to reuse tailwind classes in the map
const StarsContainer = ({ children }: React.PropsWithChildren) => (
  <span className="text-md flex text-yellow-400">{children}</span>
);

// Map the value of the option to the label that will be displayed
// The default component only accepts strings, so we need to create a custom component to use our FA icons
// Could have done this programmatically, but copilot wrote this even faster
const StarsMap: { [key: string]: string | JSX.Element } = {
  '0': 'Any',
  '4.5': (
    <StarsContainer>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStarHalfStroke />
    </StarsContainer>
  ),
  '4.0': (
    <StarsContainer>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaRegStar />
    </StarsContainer>
  ),
  '3.5': (
    <StarsContainer>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStarHalfStroke />
      <FaRegStar />
    </StarsContainer>
  ),
  '3.0': (
    <StarsContainer>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaRegStar />
      <FaRegStar />
    </StarsContainer>
  ),
  '2.5': (
    <StarsContainer>
      <FaStar />
      <FaStar />
      <FaStarHalfStroke />
      <FaRegStar />
      <FaRegStar />
    </StarsContainer>
  ),
  '2.0': (
    <StarsContainer>
      <FaStar />
      <FaStar />
      <FaRegStar />
      <FaRegStar />
      <FaRegStar />
    </StarsContainer>
  ),
  '1.5': (
    <StarsContainer>
      {' '}
      <FaStar />
      <FaStarHalfStroke />
      <FaRegStar />
      <FaRegStar />
      <FaRegStar />
    </StarsContainer>
  ),
  '1.0': (
    <StarsContainer>
      <FaStar />
      <FaRegStar />
      <FaRegStar />
      <FaRegStar />
      <FaRegStar />
    </StarsContainer>
  ),
};

// Helper function to display the stars in StarRatingOption and StarRatingSingleValue
function StarRatingView({ value }: Pick<StarRatingOptionType, 'value'>) {
  return (
    <div className="flex items-center sm:text-xs">
      {value !== '0' && <span className="mr-1">{value}</span>}
      {StarsMap[value]}
      {value !== '0' && <span className="ml-1 lowercase">and up</span>}
    </div>
  );
}

export function StarRatingOption({
  ...props
}: OptionProps<StarRatingOptionType>) {
  return (
    <>
      <components.Option {...props}>
        <StarRatingView value={props.data.value} />
      </components.Option>
    </>
  );
}

export const StarRatingSingleValue = ({
  children,
  ...props
}: SingleValueProps<StarRatingOptionType>) => (
  <components.SingleValue className="" {...props}>
    <span className="font-bold">
      <StarRatingView value={props.data.value} />
    </span>
  </components.SingleValue>
);
