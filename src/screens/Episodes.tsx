import { EpisodesList } from "../components/EpisodesList";
import { useState } from "react";
import { useGetEpisodesQuery } from "../generated/graphql";
import { PaginationControls } from "../components/PaginationControls";

export const Episodes = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useGetEpisodesQuery({
    variables: { page: page },
  });

  const handleNext = () => {
    if (data?.episodes?.info?.next) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (data?.episodes?.info?.prev) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  if (loading) return <p className="loading">Loading episodes...</p>;
  if (error)
    return <p className="error">Error loading episodes: {error.message}</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Episodes</h2>
      <PaginationControls
        currentPage={page}
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasNextPage={!!data?.episodes?.info?.next}
        hasPreviousPage={!!data?.episodes?.info?.prev}
        setPage={setPage}
        lastPage={data.episodes.info.pages}
      />
      <EpisodesList episodes={data.episodes} />
    </div>
  );
};
