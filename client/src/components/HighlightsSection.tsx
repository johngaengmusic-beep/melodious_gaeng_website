export default function HighlightsSection() {
  return (
    <section className="py-16 bg-mg-sand">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <a 
            href="https://open.spotify.com/artist/4fbu4uj2jCKMf0XrhyGbHL" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-mg-cream p-8 rounded-xl hover:shadow-lg transition-all duration-200 group border border-mg-dust"
          >
            <i className="fab fa-spotify text-mg-terra text-4xl mb-4 group-hover:scale-110 transition-transform"></i>
            <h3 className="text-xl font-heading font-bold text-mg-brown mb-2">Stream on Spotify</h3>
            <p className="text-mg-brown/60 font-body text-sm">Listen to our latest releases</p>
          </a>
          
          <a 
            href="https://www.youtube.com/channel/UCPjBfP9MkLN4Im3TUBXws1g" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-mg-cream p-8 rounded-xl hover:shadow-lg transition-all duration-200 group border border-mg-dust"
          >
            <i className="fab fa-youtube text-mg-terra text-4xl mb-4 group-hover:scale-110 transition-transform"></i>
            <h3 className="text-xl font-heading font-bold text-mg-brown mb-2">Watch on YouTube</h3>
            <p className="text-mg-brown/60 font-body text-sm">Videos, live sessions & more</p>
          </a>
          
          <a 
            href="https://www.instagram.com/melodious_gaeng" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-mg-cream p-8 rounded-xl hover:shadow-lg transition-all duration-200 group border border-mg-dust"
          >
            <i className="fab fa-instagram text-mg-terra text-4xl mb-4 group-hover:scale-110 transition-transform"></i>
            <h3 className="text-xl font-heading font-bold text-mg-brown mb-2">Follow on Instagram</h3>
            <p className="text-mg-brown/60 font-body text-sm">Behind the scenes & updates</p>
          </a>
        </div>
      </div>
    </section>
  );
}
