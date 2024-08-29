import React from "react";
import {
  useGetCharactersQuery,
  useGetEpisodesQuery,
  useGetLocationsQuery,
} from "/src/generated/graphql";
import "../src/styles/tailwind.css";

const RickAndMortyData = () => {
  const {
    data: charactersData,
    loading: charactersLoading,
    error: charactersError,
  } = useGetCharactersQuery({
    variables: { page: 1 },
  });

  const {
    data: episodesData,
    loading: episodesLoading,
    error: episodesError,
  } = useGetEpisodesQuery({
    variables: { page: 1 },
  });

  const {
    data: locationsData,
    loading: locationsLoading,
    error: locationsError,
  } = useGetLocationsQuery({
    variables: { page: 1 },
  });

  if (charactersLoading || episodesLoading || locationsLoading)
    return <p className="loading">Loading...</p>;
  if (charactersError || episodesError || locationsError)
    return <p className="error">Error: Something went wrong.</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Rick and Morty Data
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Characters</h2>
        <div className="flex flex-wrap justify-around">
          {charactersData?.characters?.results?.map((character) => (
            <div key={character.id} className="card flex flex-row">
              <img
                src={character.image}
                alt={character.name}
                className="image"
              />
              <div>
                <h3 className="title">{character.name}</h3>
                <p className="text">Status: {character.status}</p>
                <p className="text">Species: {character.species}</p>
                <p className="text">Type: {character.type}</p>
                <p className="text">Gender: {character.gender}</p>
                <p className="text">Origin: {character.origin?.name}</p>
                <p className="text">Location: {character.location?.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Episodes</h2>
        <div className="flex flex-wrap justify-around">
          {episodesData?.episodes?.results?.map((episode) => (
            <div key={episode.id} className="card">
              <h3 className="title">{episode.name}</h3>
              <p className="text">Episode: {episode.episode}</p>
              <p className="text">Air Date: {episode.air_date}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Locations</h2>
        <div className="flex flex-wrap justify-around">
          {locationsData?.locations?.results?.map((location) => (
            <div key={location.id} className="card">
              <h3 className="title">{location.name}</h3>
              <p className="text">Type: {location.type}</p>
              <p className="text">Dimension: {location.dimension}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RickAndMortyData;
