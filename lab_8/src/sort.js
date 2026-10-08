/**
 * C3. Сортування серіалів.
 */
export function sortShows(shows, sortBy, direction = 'asc') {
  return [...shows].sort((a, b) => {
    const valA = a[sortBy];
    const valB = b[sortBy];

    if (valA === null && valB === null) return 0;
    if (valA === null) return 1;
    if (valB === null) return -1;

    const dirMultiplier = direction === 'desc' ? -1 : 1;

    if (sortBy === 'name') {
      return a.name.localeCompare(b.name) * dirMultiplier;
    }

    if (valA === valB) return 0;
    return valA < valB ? -1 * dirMultiplier : 1 * dirMultiplier;
  });
}