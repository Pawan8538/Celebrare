function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full max-w-md">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <svg
          className="h-5 w-5 text-text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M11 19a8 8 0 110-16 8 8 0 010 16z"
          />
        </svg>
      </div>
      <input
        id="search-input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search by author name..."
        className="w-full rounded-full border border-border bg-white py-3 pl-12 pr-4 text-sm text-text-heading placeholder-text-muted outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

export default SearchBar;
