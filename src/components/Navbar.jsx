import { Link, NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `px-2 py-1 text-sm font-medium transition-colors hover:text-brass ${
    isActive ? "text-brass" : "text-paper/80"
  }`;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-paper/10 bg-velvet-deep/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="font-display text-xl font-extrabold tracking-tight">
          🎬 Movie<span className="text-brass">Explorer</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <Link
            to="/movies"
            className="rounded-full bg-brass px-4 py-2 text-sm font-bold text-velvet-deep transition hover:brightness-110"
          >
            Movies
          </Link>
        </div>
      </nav>
    </header>
  );
}
