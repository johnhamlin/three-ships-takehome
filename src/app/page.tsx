import { providerList } from '@/model/database';

// Because this is a server component, using a server-side function to fetch data from the mock database
// This improves performance and SEO by pre-rendering the data, and is recommended in Next.js 13+
async function getProvidersList(): Promise<Provider[]> {
  // Wrapping in a promise to simulate an async operation
  return await new Promise(resolve => resolve(providerList));
}

export default async function Home() {
  const data = await getProvidersList();
  return data.map(provider => <h1 key={provider._id}>{provider.name}</h1>);
}
