import { useEffect } from "react";

export default function MovieModal({ show, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const year = show.premiered || "N/A";
  const rating = show.rating?.average ?? "N/A";
  const info = [
    ["Genres", show.genres?.join(", ")],
    ["Language", show.language],
    ["Status", show.status],
    ["Network", show.network?.name || show.webChannel?.name],
    ["Runtime", show.runtime ? `${show.runtime} min` : null],
  ].filter(([, v]) => v);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={show.name}
    >
      <div
        className="modal-in relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-velvet ring-1 ring-paper/15"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-lg hover:bg-brass hover:text-velvet-deep"
        >
          ✕
        </button>

        {show.image?.original && (
          <img
            src={show.image.original}
            alt={`${show.name} poster`}
            className="h-64 w-full object-cover object-top sm:h-80"
          />
        )}

        <div className="p-6">
          <h2 className="font-display text-3xl font-extrabold">{show.name}</h2>
          <p className="mt-2 text-paper/80">
            <span className="text-brass">⭐ Rating: {rating}</span>
            <span className="mx-3 text-paper/30">|</span>
            📅 Release: {year}
          </p>

          <h3 className="mt-5 font-bold">Overview</h3>
          {show.summary ? (
            <div
              className="mt-1 leading-relaxed text-paper/85"
              dangerouslySetInnerHTML={{ __html: show.summary }}
            />
          ) : (
            <p className="mt-1 text-paper/60">No summary available.</p>
          )}

          <dl className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
            {info.map(([k, v]) => (
              <div key={k}>
                <dt className="inline text-paper/60">{k}: </dt>
                <dd className="inline font-medium">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="rounded-lg bg-brass px-5 py-2.5 font-bold text-velvet-deep hover:brightness-110"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
