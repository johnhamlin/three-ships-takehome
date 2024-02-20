interface GetQuoteButtonProps {
  href: string;
}

export default function GetQuoteButton({ href }: GetQuoteButtonProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className=" grow">
      <button className=" mt-4 w-full bg-blue-600 py-3 font-bold text-white hover:bg-blue-700 sm:absolute sm:right-14 sm:top-10 sm:mt-0 sm:w-52">
        Get Quote
      </button>
    </a>
  );
}
