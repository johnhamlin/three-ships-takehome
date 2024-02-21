import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  arrow,
  FloatingArrow,
} from '@floating-ui/react';
import { useRef, useState } from 'react';
import { IoIosInformationCircleOutline } from 'react-icons/io';

interface MoreInfoProps {
  text: string;
  ratingPercentageOfCompanies: number;
}

export default function MoreInfoIconWithPopover({
  text,
  ratingPercentageOfCompanies,
}: MoreInfoProps) {
  // All of this sets up the floating UI
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);
  const { refs, floatingStyles, context } = useFloating({
    placement: 'right',
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift(), arrow({ element: arrowRef })],
    whileElementsMounted: autoUpdate,
  });
  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, {
    // Defines the ARIA role of the floating UI.
    role: 'tooltip',
  });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  // Renders an information icon with a popover containing additional information.
  // On mobile, it displays the information on tap. On desktop, it displays the information on hover.
  // The icon is bigger on mobile to make it easier to tap.
  return (
    <div className="sm:self-start">
      <div
        className="-mt-1 text-xl sm:text-xs"
        ref={refs.setReference}
        {...getReferenceProps}
      >
        <IoIosInformationCircleOutline
          aria-label="More Info"
          className="ml-1 self-start"
        />
      </div>
      {isOpen && (
        <div
          className="max-w-44 rounded-md border border-green-500 bg-white p-4 text-gray-500 shadow-md shadow-black/30 sm:max-w-80 sm:text-sm"
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          <FloatingArrow
            ref={arrowRef}
            context={context}
            strokeWidth={1}
            // [&>path:first-of-type] targets the “stroke” path.
            // [&>path:last-of-type] targets the “fill” path’s extra stroke, to reduce gaps.
            className="
            fill-white
            [&>path:first-of-type]:stroke-green-500
            [&>path:last-of-type]:stroke-white
            "
          />
          <p className="mb-3 font-serif  leading-loose ">{text}</p>
          <div className="text-center font-extrabold uppercase">
            Better than{' '}
            <span className="text-green-700">
              {ratingPercentageOfCompanies}%
            </span>{' '}
            of companies
          </div>
        </div>
      )}
    </div>
  );
}

{
  /* <FloatingArrow
  ref={arrowRef}
  context={context}
  className="
    fill-white 
    [&>path:first-of-type]:stroke-pink-500
    [&>path:last-of-type]:stroke-white
  "
/>; */
}
