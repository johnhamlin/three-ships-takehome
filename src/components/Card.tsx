interface CardProps {
  provider: Provider;
}

export default function Card({ provider }: CardProps) {
  return (
    <div className=" flex flex-col gap-2 rounded-md border-2 border-gray-300 p-4">
      <h2 className="text-2xl font-bold">{provider.name}</h2>
      <p className="flex italic">
        {provider.services.map((service, index) => (
          <div key={index}>{service}</div>
        ))}
      </p>
      <p>Rating: {provider.rating.th}</p>
      <p>Distance: {provider.distance} miles</p>
    </div>
  );
}
