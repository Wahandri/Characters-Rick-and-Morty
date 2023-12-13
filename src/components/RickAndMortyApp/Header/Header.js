import "./Header.css";
import fondoStars from "../../../images/Rick_and_Morty.svg.png"

export default function Header({ onSearch }) {
  return (
    <nav className="navbar boxHeader">
      <div className="container-fluid">
        <a className="colorW navbar-brand text-uppercase" href="/">
          Home
        </a>
        <img width="250px" src={fondoStars} alt="" />
        <form
          className="d-flex"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(event) => onSearch(event.target.value)}
          />
        </form>
      </div>
    </nav>
  );
}
