export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-velvet">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-paper/70 sm:flex-row sm:px-6">
        <p className="font-display font-bold text-paper">🎬 MovieExplorer</p>
        <p>© {new Date().getFullYear()} MovieExplorer. Data from TVMaze.</p>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-brass"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
