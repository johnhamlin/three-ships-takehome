import { CardList } from '@/components';

export default async function Home() {
  return (
    <main className="container mx-auto flex flex-col items-center justify-center gap-2 p-10">
      <h1 className="text-4xl font-bold ">Service Providers Directory</h1>
      <p className="mb-4 italic">A list of service providers in the area.</p>
      <CardList />
    </main>
  );
}
