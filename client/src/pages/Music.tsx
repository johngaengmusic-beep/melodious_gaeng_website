import FollowUsSection from "@/components/FollowUsSection";

export default function Music() {
  return (
    <div className="pt-16 min-h-screen bg-mg-dark text-mg-light">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Music</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Each release is an opportunity to explore new sounds, work with different musicians, and see where the songs naturally lead.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-mg-muted rounded-xl p-4">
              <iframe 
                src="https://open.spotify.com/embed/artist/4fbu4uj2jCKMf0XrhyGbHL?utm_source=generator&theme=0" 
                width="100%" 
                height="380" 
                frameBorder="0" 
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className="rounded-lg"
                title="Melodious Gaeng on Spotify"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://open.spotify.com/artist/4fbu4uj2jCKMf0XrhyGbHL?si=0GIMF3N7TO-yNIlIX1sfLg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-mg-gold hover:bg-yellow-700 text-mg-dark px-8 py-4 rounded-lg font-heading font-bold text-lg transition-colors duration-200"
            >
              <i className="fab fa-spotify text-xl"></i>
              Listen on Spotify
            </a>
            <a 
              href="https://www.youtube.com/channel/UCPjBfP9MkLN4Im3TUBXws1g" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-mg-gold text-mg-gold hover:bg-mg-gold hover:text-mg-dark px-8 py-4 rounded-lg font-heading font-bold text-lg transition-colors duration-200"
            >
              <i className="fab fa-youtube text-xl"></i>
              Watch on YouTube
            </a>
          </div>
        </div>
      </section>
      <FollowUsSection />
    </div>
  );
}
