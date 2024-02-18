import { CardList } from '@/components';
import { providerList } from '@/model/database';

// Because this is a server component, using a server-side function to fetch data from the mock database
// This improves performance and SEO by pre-rendering the data, and is recommended in Next.js 13+
async function getProvidersList(): Promise<Provider[]> {
  // Wrapping in a promise to simulate an async operation
  return await new Promise((resolve) => resolve(providerList));
}

export default async function Home() {
  const providersList = await getProvidersList();
  return (
    <main className="container mx-auto flex max-w-[45rem] flex-col items-center justify-center gap-2 p-10">
      <h1 className="text-4xl font-bold ">Service Providers Directory</h1>
      <p className="mb-4 italic">A list of service providers in the area.</p>
      <CardList providersList={providerList} />
    </main>
  );
}
