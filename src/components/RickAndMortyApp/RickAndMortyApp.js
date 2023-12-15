import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RickAndMorty.css";
import Header from "./Header/Header";
import Characters from "./Characters/Characters";

export default function RickAndMortyApp() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  const fetchCharacters = async (term = "", page = 1) => {
    setIsLoading(true);
    let apiUrl = new URL("https://rickandmortyapi.com/api/character");
    if (term) apiUrl.searchParams.append("name", term);
    apiUrl.searchParams.append("page", page);

    try {
      const response = await fetch(apiUrl.toString());
      const data = await response.json();
      if (page === 1 || initialLoad) {
        setCharacters(data.results);
        setInitialLoad(false);
      } else {
        setCharacters((prevCharacters) => [...prevCharacters, ...data.results]);
      }
      setInfo(data.info);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;

    if (info.next && !isLoading) {
      const nextPage = page + 1;
      setPage(nextPage);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchCharacters(searchTerm, page);
      console.log("RickAndMortyApp actualizado");
    };

    fetchData();
  }, [searchTerm, page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [info.next, isLoading, page, searchTerm]);

  return (
    <div className="RickAndMortyApp">
      <Header
        onSearch={setSearchTerm}
        fetchCharacters={fetchCharacters}
        characters={characters}
      />
      <Characters characters={characters} isLoading={isLoading} />
    </div>
  );
}
