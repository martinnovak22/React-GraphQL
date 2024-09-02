import { CharactersList } from "../components/CharactersList";
import { memo, useEffect, useState } from "react";
import { PaginationControls } from "../components/PaginationControls";
import { useGetCharactersQuery } from "../generated/graphql";

export const Characters = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 750); // Zpoždění 500 ms

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  const { data, loading, error } = useGetCharactersQuery({
    variables: { page: page, name: debouncedSearch },
  });

  const handleNext = () => {
    if (data?.characters?.info?.next) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (data?.characters?.info?.prev) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  if (loading) return <p className="loading">Loading characters...</p>;
  if (error)
    return <p className="error">Error loading characters: {error.message}</p>;

  return (
    <div className="container mx-auto p-4 flex flex-col justify-center">
      <h2 className="text-2xl font-semibold mb-4 text-center">Characters</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        placeholder="Search characters..."
        className="p-2 border rounded w-52 mb-4 self-center"
      />
      <PaginationControls
        currentPage={page}
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasNextPage={!!data?.characters?.info?.next}
        hasPreviousPage={!!data?.characters?.info?.prev}
        setPage={setPage}
        lastPage={data.characters.info.pages}
      />

      <CharactersList characters={data.characters} />
    </div>
  );
};
