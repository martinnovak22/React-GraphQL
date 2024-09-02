import { CharactersResponse } from "../generated/graphql";
import { memo } from "react";

type ListProps = {
  characters: CharactersResponse;
};

export const CharactersList = memo(({ characters }: ListProps) => {
  return (
    <section className="mb-8">
      <div className="flex flex-wrap justify-around">
        {characters?.results?.map((character) => (
          <div key={character.id} className="card flex flex-row gap-2 h-36">
            <img src={character.image} alt={character.name} className="image" />
            <div className={"w-full flex flex-col"}>
              <h3 className="title">{character.name}</h3>
              <div className={"w-full flex gap-10"}>
                <div>
                  <p className="text">Status: {character.status}</p>
                  <p className="text">Gender: {character.gender}</p>
                  <p className="text">Species: {character.species}</p>
                </div>
                <div>
                  <p className="text">Origin: {character.origin?.name}</p>
                  <p className="text">Location: {character.location?.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
