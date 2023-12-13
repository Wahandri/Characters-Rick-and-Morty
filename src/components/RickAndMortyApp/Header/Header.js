export default function Header({ onSearch }) {
  return (
    <nav className="navbar bg-secondary bg-gradient bg-opacity-50">
      <div className="container-fluid">
        <a className="navbar-brand text-uppercase" href="/">
          Rick and Morty
        </a>
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
