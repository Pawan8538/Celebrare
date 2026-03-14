import SearchBar from './SearchBar';

function Header({ searchValue, onSearchChange }) {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-4 sm:flex-row sm:justify-between sm:py-5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg
            className="h-8 w-8 text-primary"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
          </svg>
          <h1 className="font-heading text-2xl font-semibold tracking-tight text-text-heading">
            Celebrare
          </h1>
        </div>

        {/* Search */}
        <SearchBar value={searchValue} onChange={onSearchChange} />
      </div>
    </header>
  );
}

export default Header;
