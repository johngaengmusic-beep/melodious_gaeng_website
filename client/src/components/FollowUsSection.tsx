export default function FollowUsSection() {
  return (
    <section className="py-8 bg-mg-brown">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-heading font-bold text-mg-cream mb-4">
            Follow Us
          </h3>
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.instagram.com/melodious_gaeng" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-mg-terra hover:bg-orange-800 text-mg-cream rounded-full transition-colors duration-200"
              aria-label="Follow us on Instagram"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a 
              href="https://www.facebook.com/melodiousgaeng/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-mg-terra hover:bg-orange-800 text-mg-cream rounded-full transition-colors duration-200"
              aria-label="Follow us on Facebook"
            >
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a 
              href="https://www.youtube.com/channel/UCPjBfP9MkLN4Im3TUBXws1g" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-mg-terra hover:bg-orange-800 text-mg-cream rounded-full transition-colors duration-200"
              aria-label="Watch us on YouTube"
            >
              <i className="fab fa-youtube text-xl"></i>
            </a>
            <a 
              href="https://open.spotify.com/artist/4fbu4uj2jCKMf0XrhyGbHL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-mg-terra hover:bg-orange-800 text-mg-cream rounded-full transition-colors duration-200"
              aria-label="Listen on Spotify"
            >
              <i className="fab fa-spotify text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
