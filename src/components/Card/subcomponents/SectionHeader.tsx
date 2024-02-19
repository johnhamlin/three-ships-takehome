// Allow any prop passable to an h3 element to be passed to the SectionHeader component
type SectionHeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export default function SectionHeader({
  children,
  ...props
}: SectionHeaderProps) {
  return (
    <h3 className="text-md mb-2 mt-6 font-bold uppercase text-gray-600">
      {children}
    </h3>
  );
}
