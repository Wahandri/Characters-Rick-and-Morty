import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RickAndMorty.css";
import Header from "./Header/Header";
import Characters from "./Characters/Characters";

export default function RickAndMortyApp() {
  // Estado para almacenar los personajes
  const [characters, setCharacters] = useState([]);
  // Estado para almacenar la información de paginación
  const [info, setInfo] = useState({});
  // Estado para almacenar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");
  // Estado para almacenar el número de página actual
  const [page, setPage] = useState(1);
  // Estado para indicar si se está cargando información
  const [isLoading, setIsLoading] = useState(false);

  // URL inicial de la API
  const initialUrl = "https://rickandmortyapi.com/api/character";

  // Obtener los personajes al montar el componente
  const hasMounted = useRef(false);
  useEffect(() => {
    if (!hasMounted.current) {
      const fetchData = async () => {
        await fetchCharacters(initialUrl, "", 1);
      };
      fetchData();

      hasMounted.current = true;
    }
  }, []);

  // Función para obtener los personajes
  const fetchCharacters = async (term = "", page = 1) => {
    setIsLoading(true);
    let apiUrl = term
      ? `https://rickandmortyapi.com/api/character?name=${term}&page=${page}`
      : `https://rickandmortyapi.com/api/character?page=${page}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.info.pages !== page) {
        setCharacters((prevCharacters) => [...prevCharacters, ...data.results]);
      }
      setInfo(data.info);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setCharacters([]);
    const fetchData = async () => {
      await fetchCharacters(searchTerm, 1);
    };
    fetchData();
  }, [searchTerm]);

  useEffect(() => {
    // Obtener los personajes al hacer scroll
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      if (info.next && !isLoading) {
        const nextPage = page + 1;
        setPage(nextPage);
        const fetchData = async () => {
          await fetchCharacters(initialUrl, searchTerm, nextPage);
          console.log("RickAndMortyApp actualizado");
        };
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpieza del evento al desmontar el componente
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
