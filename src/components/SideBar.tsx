import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { GenreProps } from "../@types/genre";
import { api } from "../services/api";
import "../styles/sidebar.scss";
import { Button } from "./Button";

type SideBarProps = {
  setSelectedGenre: Dispatch<SetStateAction<GenreProps>>;
  selectedGenre: GenreProps;
};

export function SideBar(props: SideBarProps) {
  const [genres, setGenres] = useState<GenreProps[]>([]);
  useEffect(() => {
    api.get<GenreProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.setSelectedGenre(genre)}
            selected={props.selectedGenre === genre}
          />
        ))}
      </div>
    </nav>
  );
}
