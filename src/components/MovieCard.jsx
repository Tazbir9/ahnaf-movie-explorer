const FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='210' height='295'><rect width='100%' height='100%' fill='#4a1428'/><text x='50%' y='50%' fill='#f5e9d3' font-size='16' text-anchor='middle' font-family='sans-serif'>No poster</text></svg>`
  );

export default function MovieCard({ show, onDetails }) {
  const year = show.premiered ? show.premiered.slice(0, 4) : "N/A";
  const rating = show.rating?.average ?? "N/A";

  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-curtain ring-1 ring-paper/10">
      <img
        src={show.image?.medium || FALLBACK}
        alt={`${show.name} poster`}
        loading="lazy"
        className="aspect-[210/295] w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg font-bold leading-snug">{show.name}</h3>
        <p className="mt-1 text-sm text-paper/75">
          <span className="text-brass">⭐ {rating}</span>
          <span className="mx-2 text-paper/30">|</span>
          📅 {year}
        </p>
        <button
          onClick={() => onDetails(show)}
          className="mt-4 rounded-lg border border-brass px-4 py-2.5 text-sm font-bold text-brass transition hover:bg-brass hover:text-velvet-deep sm:mt-auto"
        >
          See Details
        </button>
      </div>
    </article>
  );
}
