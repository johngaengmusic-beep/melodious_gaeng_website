export default function SubscribeSection() {
  return (
    <section className="py-16 bg-mg-terra">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-mg-cream mb-6">
          Stay Connected
        </h2>
        <p className="text-xl text-mg-cream/90 mb-4 font-body">
          Follow along for new releases, collaborations, and more.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="https://www.instagram.com/melodious_gaeng"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-mg-brown text-mg-cream hover:bg-mg-brown/80 font-heading font-semibold px-8 py-3 rounded-lg text-lg transition-colors inline-flex items-center justify-center gap-2"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a
            href="https://open.spotify.com/artist/4fbu4uj2jCKMf0XrhyGbHL"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-mg-brown text-mg-cream hover:bg-mg-brown/80 font-heading font-semibold px-8 py-3 rounded-lg text-lg transition-colors inline-flex items-center justify-center gap-2"
          >
            <i className="fab fa-spotify"></i> Spotify
          </a>
        </div>
      </div>
    </section>
  );
}
