import { MdKeyboardArrowDown } from 'react-icons/md';

export default function SeeMore() {
  return (
    <div className="mt-1 flex flex-row self-end">
      <h4 className="mr-1 text-sm font-extrabold uppercase text-gray-600">
        See More
      </h4>
      <MdKeyboardArrowDown className="-mt-[0.15rem] text-xl font-extrabold text-blue-400" />
    </div>
  );
}
