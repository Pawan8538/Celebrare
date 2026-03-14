function Footer() {
  return (
    <footer className="mt-auto bg-dark-green text-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
            </svg>
            <span className="font-heading text-lg font-semibold">Celebrare</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/70">
            All rights reserved &copy; Celebrare
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
