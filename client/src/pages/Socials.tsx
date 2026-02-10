import FollowUsSection from "@/components/FollowUsSection";

export default function Socials() {
  return (
    <div className="pt-16 min-h-screen bg-mg-brown text-mg-cream">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Socials</h1>
            <p className="text-xl text-mg-dust">Stay up to date with our latest posts and updates</p>
          </div>

          <div className="mb-12">
            <div className="rounded-xl p-4 flex justify-center border border-mg-dust/30">
              <iframe
                src="https://www.instagram.com/melodious_gaeng/embed"
                width="400"
                height="600"
                frameBorder="0"
                scrolling="no"
                allowTransparency
                className="rounded-lg max-w-full"
                title="Melodious Gaeng Instagram"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a 
              href="https://www.instagram.com/melodious_gaeng" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-mg-sand/10 hover:bg-mg-terra text-mg-cream p-6 rounded-xl transition-all duration-200 group border border-mg-dust/30"
            >
              <i className="fab fa-instagram text-2xl text-mg-terra group-hover:text-mg-cream"></i>
              <span className="font-heading font-bold text-lg">Instagram</span>
            </a>
            <a 
              href="https://www.facebook.com/melodiousgaeng/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-mg-sand/10 hover:bg-mg-terra text-mg-cream p-6 rounded-xl transition-all duration-200 group border border-mg-dust/30"
            >
              <i className="fab fa-facebook text-2xl text-mg-terra group-hover:text-mg-cream"></i>
              <span className="font-heading font-bold text-lg">Facebook</span>
            </a>
            <a 
              href="https://www.youtube.com/channel/UCPjBfP9MkLN4Im3TUBXws1g" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-mg-sand/10 hover:bg-mg-terra text-mg-cream p-6 rounded-xl transition-all duration-200 group border border-mg-dust/30"
            >
              <i className="fab fa-youtube text-2xl text-mg-terra group-hover:text-mg-cream"></i>
              <span className="font-heading font-bold text-lg">YouTube</span>
            </a>
            <a 
              href="https://open.spotify.com/artist/4fbu4uj2jCKMf0XrhyGbHL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-mg-sand/10 hover:bg-mg-terra text-mg-cream p-6 rounded-xl transition-all duration-200 group border border-mg-dust/30"
            >
              <i className="fab fa-spotify text-2xl text-mg-terra group-hover:text-mg-cream"></i>
              <span className="font-heading font-bold text-lg">Spotify</span>
            </a>
          </div>
        </div>
      </section>
      <FollowUsSection />
    </div>
  );
}
