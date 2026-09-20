import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard.jsx";
import MovieModal from "../components/MovieModal.jsx";

const API = "https://api.tvmaze.com";
const PAGE_SIZE = 24;

export default function Movies() {
  const [query, setQuery] = useState("");
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(null);
  const [visible, setVisible] = useState(PAGE_SIZE);

  useEffect(() => {
    const controller = new AbortController();
    const q = query.trim();

    // Debounce so we don't call the API on every keystroke
    const timer = setTimeout(async () => {
      setLoading(true);
      setError("");
      try {
        const url = q
          ? `${API}/search/shows?q=${encodeURIComponent(q)}`
          : `${API}/shows`;
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error("Request failed");
        const data = await res.json();
        // Search returns [{ score, show }], /shows returns [show]
        setShows(q ? data.map((item) => item.show) : data);
        setVisible(PAGE_SIZE);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Couldn't load movies. Check your connection and try again.");
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, 400);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <label htmlFor="search" className="sr-only">
          Search for a movie
        </label>
        <input
          id="search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="🔍 Search for a movie..."
          className="w-full rounded-full border border-paper/20 bg-velvet px-6 py-4 text-lg placeholder:text-paper/50 focus:border-brass focus:outline-none"
        />
      </div>

      <h1 className="mt-8 font-display text-2xl font-bold">
        {query.trim() ? `Results for "${query.trim()}"` : "All shows"}
      </h1>

      {loading && <p className="mt-10 text-center text-paper/70">Loading…</p>}
      {error && <p className="mt-10 text-center text-red-300">{error}</p>}
      {!loading && !error && shows.length === 0 && (
        <p className="mt-10 text-center text-paper/70">
          Nothing found. Try a different title.
        </p>
      )}

      {!loading && !error && (
        <>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {shows.slice(0, visible).map((show) => (
              <MovieCard key={show.id} show={show} onDetails={setSelected} />
            ))}
          </div>

          {visible < shows.length && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="rounded-full border border-brass px-8 py-3 font-bold text-brass hover:bg-brass hover:text-velvet-deep"
              >
                Show more
              </button>
            </div>
          )}
        </>
      )}

      {selected && (
        <MovieModal show={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
