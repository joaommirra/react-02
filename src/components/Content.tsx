import { useEffect, useState } from "react";
import { GenreProps } from "../@types/genre";
import { MovieProps } from "../@types/movie";
import { api } from "../services/api";
import "../styles/content.scss";
import { Header } from "./Header";
import { MovieCard } from "./MovieCard";

type ContentProps = {
  selectedGenre: GenreProps;
};

export function Content(props: ContentProps) {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api
      .get<MovieProps[]>(
        `movies/?Genre_id=${props.selectedGenre && props.selectedGenre.id}`
      )
      .then((response) => {
        setMovies(response.data);
      });
  }, [props.selectedGenre]);

  return (
    <div className="container">
      <Header selectedGenre={props.selectedGenre} />
      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
