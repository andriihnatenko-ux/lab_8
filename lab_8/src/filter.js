/**
 * C2. Фільтрація серіалів.
 */
export function filterShows(shows, options = {}) {
  if (!options || Object.keys(options).length === 0) return [...shows];

  return shows.filter(show => {
    if (options.query && options.query.trim() !== '') {
      const query = options.query.trim().toLowerCase();
      if (!show.name.toLowerCase().includes(query)) return false;
    }
    
    if (options.genre && options.genre.trim() !== '') {
      if (!show.genres.includes(options.genre)) return false;
    }
    
    if (options.minRating !== undefined && options.minRating !== null && options.minRating !== '') {
      if (show.rating === null || show.rating < options.minRating) return false;
    }
    
    return true;
  });
}