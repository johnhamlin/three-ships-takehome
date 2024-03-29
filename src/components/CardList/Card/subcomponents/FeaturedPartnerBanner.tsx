/**
 * Returns a JSX element with a blue banner and a white div to create an inset border effect on the Card
 */
export default function FeaturedPartnerBanner() {
  return (
    <>
      <span className="-z-10 -mb-1 rounded-t-md bg-[#0198fe] pb-3 pl-3 pt-2 font-bold uppercase text-white sm:text-sm">
        Featured Partner
      </span>
      <span
        // I had to get creative to make the white card appear to have a round border that's inset into the blue banner
        className="mx-1 -mb-2 rounded-md border border-white bg-white py-[1px]"
      />
    </>
  );
}
