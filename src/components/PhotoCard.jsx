function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  const imageUrl = `https://picsum.photos/id/${photo.id}/400/300`;

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-bg-subtle">
        <img
          src={imageUrl}
          alt={`Photo by ${photo.author}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Info bar */}
      <div className="flex items-center justify-between px-4 py-3">
        <p className="truncate text-sm font-medium text-text-heading">
          {photo.author}
        </p>
        <button
          id={`fav-btn-${photo.id}`}
          onClick={() => onToggleFavourite(photo.id)}
          aria-label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
          className="flex-shrink-0 rounded-full p-1.5 transition-colors hover:bg-bg-subtle"
        >
          {isFavourite ? (
            <svg className="h-5 w-5 text-heart" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <svg className="h-5 w-5 text-text-muted transition-colors group-hover:text-heart" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default PhotoCard;
