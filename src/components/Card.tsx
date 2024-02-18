interface CardProps {
  provider: Provider;
}

export default function Card({ provider }: CardProps) {
  return (
    <div className=" flex flex-col gap-2 rounded-md border-2 border-gray-300 p-4">
      <h2 className="text-2xl font-bold">{provider.name}</h2>
      <h3>Services Offered</h3>
      <div className="flex w-full flex-wrap gap-3 italic">
        {provider.services.map((service, index) => (
          <p key={index}>{service}</p>
        ))}
      </div>
      <p>Star Rating: {provider.review_score}</p>
      <p>Distance: {Math.round(provider.distance * 10) / 10} miles</p>
    </div>
  );
}
