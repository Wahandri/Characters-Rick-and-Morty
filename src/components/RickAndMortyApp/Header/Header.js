import "./Header.css";
import fondoStars from "../../../images/Rick_and_Morty.svg.png";

export default function Header({ onSearch, fetchCharacters }) {
  const handleSearch = (event) => {
    const value = event.target.value;
    onSearch(value);
    if (value === "") {
      fetchCharacters();
    }
  };

  return (
    <nav className="boxHeader">
      <a className="" href="/">
        <img className="" width="250px" src={fondoStars} alt="" />
      </a>

      <form
        className=""
        role="search"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search Character"
          aria-label="Search"
          onChange={handleSearch}
        />
      </form>
    </nav>
  );
}
