import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(227,171,61,0.28), transparent 70%), linear-gradient(180deg, #4a1428 0%, #2b0a17 55%, #1a0610 100%)",
      }}
    >
      <div className="mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">
          Discover movies
          <br />
          worth the popcorn.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-paper/80">
          Explore and discover your favorite shows and movies from around the
          world. Search by title, check ratings, and read the story before you
          press play.
        </p>
        <Link
          to="/movies"
          className="mt-10 rounded-full bg-brass px-8 py-4 text-base font-bold text-velvet-deep shadow-lg shadow-black/40 transition hover:brightness-110"
        >
          Explore now
        </Link>
      </div>
    </section>
  );
}
