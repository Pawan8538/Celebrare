import { useReducer, useState, useCallback, useMemo, useEffect } from 'react';
import useFetchPhotos from './hooks/useFetchPhotos';
import { favouritesReducer, getInitialFavourites } from './reducers/favouritesReducer';
import Header from './components/Header';
import PhotoGrid from './components/PhotoGrid';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import Footer from './components/Footer';

function App() {
  // custom hook for data fetching
  const { photos, loading, error } = useFetchPhotos();

  // useReducer for favourites
  const [favourites, dispatch] = useReducer(favouritesReducer, null, getInitialFavourites);

  // Persist favourites to localStorage on every change
  useEffect(() => {
    localStorage.setItem('celebrare-favourites', JSON.stringify(favourites));
  }, [favourites]);

  // search state
  const [searchTerm, setSearchTerm] = useState('');

  // useCallback for search handler
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  // useMemo for filtered photos
  const filteredPhotos = useMemo(() => {
    if (!searchTerm.trim()) return photos;
    const term = searchTerm.toLowerCase();
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(term)
    );
  }, [photos, searchTerm]);

  // Handler for toggling favourites
  const handleToggleFavourite = useCallback((photoId) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', payload: photoId });
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <Header searchValue={searchTerm} onSearchChange={handleSearchChange} />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8">
        {/* Subheading */}
        <div className="mb-8 text-center">
          <h2 className="font-heading text-3xl font-semibold text-text-heading sm:text-4xl">
            For Special Moments
          </h2>
          <p className="mt-2 text-text-muted">
            Browse, search, and save your favourite photos
          </p>
        </div>

        {/* Content */}
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && (
          <PhotoGrid
            photos={filteredPhotos}
            favourites={favourites}
            onToggleFavourite={handleToggleFavourite}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
