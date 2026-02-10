export default function Footer() {
  return (
    <footer className="bg-mg-dark text-mg-light py-8 border-t border-mg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <span className="text-mg-gold font-heading font-bold text-2xl tracking-wide">MELODIOUS GAENG</span>
          </div>
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://www.instagram.com/melodious_gaeng" target="_blank" rel="noopener noreferrer" className="text-mg-light hover:text-mg-gold transition-colors" aria-label="Instagram">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="https://www.facebook.com/melodiousgaeng/" target="_blank" rel="noopener noreferrer" className="text-mg-light hover:text-mg-gold transition-colors" aria-label="Facebook">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCPjBfP9MkLN4Im3TUBXws1g" target="_blank" rel="noopener noreferrer" className="text-mg-light hover:text-mg-gold transition-colors" aria-label="YouTube">
              <i className="fab fa-youtube text-xl"></i>
            </a>
            <a href="https://open.spotify.com/artist/4fbu4uj2jCKMf0XrhyGbHL" target="_blank" rel="noopener noreferrer" className="text-mg-light hover:text-mg-gold transition-colors" aria-label="Spotify">
              <i className="fab fa-spotify text-xl"></i>
            </a>
          </div>
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Melodious Gaeng. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
