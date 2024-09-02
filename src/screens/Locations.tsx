import { LocationsList } from "../components/LocationsList";
import { useState } from "react";
import { useGetLocationsQuery } from "../generated/graphql";
import { PaginationControls } from "../components/PaginationControls";

export const Locations = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useGetLocationsQuery({
    variables: { page: page },
  });

  const handleNext = () => {
    if (data?.locations?.info?.next) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (data?.locations?.info?.prev) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  if (loading) return <p className="loading">Loading locations...</p>;
  if (error)
    return <p className="error">Error loading locations: {error.message}</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Locations</h2>
      <PaginationControls
        currentPage={page}
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasNextPage={!!data?.locations?.info?.next}
        hasPreviousPage={!!data?.locations?.info?.prev}
        setPage={setPage}
        lastPage={data.locations.info.pages}
      />
      <LocationsList locations={data.locations} />
    </div>
  );
};
