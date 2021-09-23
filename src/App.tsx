import { useState } from "react";
import { GenreProps } from "./@types/genre";
import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";
import "./styles/global.scss";


export function App() {
  const genre: GenreProps = {id: 1, name: "action", title: "Ação"}
  const [selectedGenre, setSelectedGenre] = useState<GenreProps>(genre);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />
      <Content selectedGenre={selectedGenre} />
    </div>
  );
}
