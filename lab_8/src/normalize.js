export function normalizeShow(raw) {
  return {
    id: raw.id,
    name: raw.name,
    year: raw.premiered ? Number(raw.premiered.slice(0, 4)) : null,
    rating: raw.rating?.average ?? null,
    runtime: raw.runtime ?? null,
    network: raw.network?.name ?? null,
    genres: raw.genres ? [...raw.genres] : []
  };
}