import { LocationsResponse } from "../generated/graphql";

type ListProps = {
  locations: LocationsResponse;
};

export const LocationsList = ({ locations }: ListProps) => {
  return (
    <section className="mb-8">
      <div className="flex flex-wrap justify-around">
        {locations?.results?.map((location) => (
          <div key={location.id} className="card">
            <h3 className="title">{location.name}</h3>
            <p className="text">Type: {location.type}</p>
            <p className="text">Dimension: {location.dimension}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
