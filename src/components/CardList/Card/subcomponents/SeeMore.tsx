import { MdKeyboardArrowDown } from 'react-icons/md';

// Renders a "See More" link at the bottom of the Card
// Functionality not implemented, per the take home instructions
export default function SeeMore() {
  return (
    <div className="mt-1 flex flex-row self-end">
      <h4 className="mr-1 font-extrabold uppercase text-gray-600 sm:text-sm">
        See More
      </h4>
      <MdKeyboardArrowDown className="-mt-[0.15rem] text-xl font-extrabold text-blue-400" />
    </div>
  );
}
