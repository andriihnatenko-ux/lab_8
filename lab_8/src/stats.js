/**
 * C4. Статистика за жанрами.
 */
export function genreStats(shows) {
  const stats = {};
  
  for (const show of shows) {
    if (!show.genres || show.genres.length === 0) continue;
    
    for (const genre of show.genres) {
      if (!stats[genre]) {
        stats[genre] = { count: 0, ratings: [] };
      }
      stats[genre].count += 1;
      if (show.rating !== null) {
        stats[genre].ratings.push(show.rating);
      }
    }
  }

  const result = {};
  for (const genre in stats) {
    const { count, ratings } = stats[genre];
    let averageRating = null;
    
    if (ratings.length > 0) {
      const sum = ratings.reduce((a, b) => a + b, 0);
      averageRating = Math.round((sum / ratings.length) * 10) / 10;
    }
    
    result[genre] = { count, averageRating };
  }
  
  return result;
}