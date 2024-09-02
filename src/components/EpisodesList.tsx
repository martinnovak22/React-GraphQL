import { EpisodesResponse } from "../generated/graphql";

type ListProps = {
  episodes: EpisodesResponse;
};

export const EpisodesList = ({ episodes }: ListProps) => {
  return (
    <section className="mb-8">
      <div className="flex flex-wrap justify-around">
        {episodes.results?.map((episode) => (
          <div key={episode.id} className="card">
            <h3 className="title">{episode.name}</h3>
            <p className="text">Episode: {episode.episode}</p>
            <p className="text">Air Date: {episode.air_date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
