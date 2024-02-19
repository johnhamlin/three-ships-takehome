import SectionHeader from './SectionHeader';

interface ExperiencesProps {
  text: string;
  author: string;
}

export default function Experiences({ text, author }: ExperiencesProps) {
  return (
    <>
      <SectionHeader>Experiences</SectionHeader>
      <div className="bg-gray-100 bg-opacity-60 p-3 font-serif text-sm font-extralight">
        <p className="mb-2 italic">{text}</p>
        <p className="text-right">{`- ${author}`}</p>
      </div>
    </>
  );
}
