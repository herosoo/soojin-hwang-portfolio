export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="container-wide flex flex-col items-start justify-between gap-6 text-sm text-white/55 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span className="grid h-7 w-7 place-items-center rounded-lg border border-white/10 bg-gradient-to-br from-indigo-500/30 to-cyan-400/20">
            <span className="block h-1.5 w-1.5 rounded-full bg-white" />
          </span>
          <span>
            © {new Date().getFullYear()} Soojin Hwang. Designed & coded with
            intent.
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            href="https://www.soojinhwang.com"
            className="transition hover:text-white"
          >
            soojinhwang.com
          </a>
          <span className="text-white/20">·</span>
          <a
            href="mailto:soojin.ux@gmail.com"
            className="transition hover:text-white"
          >
            soojin.ux@gmail.com
          </a>
          <span className="text-white/20">·</span>
          <a
            href="https://www.linkedin.com/"
            className="transition hover:text-white"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
