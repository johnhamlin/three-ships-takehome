import Card from './Card';

import { providerList } from '@/model/database';

interface CardListProps {
  providers: Provider[];
}

// Because this is a server component, using a server-side function to fetch data from the mock database
// This improves performance and SEO by pre-rendering the data, and is recommended in Next.js 13+
async function getProvidersList(): Promise<Provider[]> {
  // Wrapping in a promise to simulate an async operation
  return await new Promise((resolve) => resolve(providerList));
}

export default async function CardList() {
  const data = await getProvidersList();
  return (
    // TODO: Dropdowns to sort by rating, distance, etc.

    // TODO: Map over providers and render a Card for each one
    data.map((provider) => <Card key={provider._id} provider={provider} />)
  );
}
