// Read initial favourites from localStorage
function getInitialFavourites() {
  try {
    const stored = localStorage.getItem('celebrare-favourites');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

// Reducer function -- manages the favourites list
function favouritesReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAVOURITE': {
      const photoId = action.payload;
      const exists = state.includes(photoId);
      if (exists) {
        return state.filter((id) => id !== photoId);
      }
      return [...state, photoId];
    }
    default:
      return state;
  }
}

export { favouritesReducer, getInitialFavourites };
