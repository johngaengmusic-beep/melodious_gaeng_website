import FollowUsSection from "@/components/FollowUsSection";

const releases = [
  {
    title: "Melodious Twang",
    type: "EP",
    year: "2025",
    spotifyId: "0VfNWLrk57ZA527WzdDsWn",
    description: "Acoustic-driven bluegrass and country with heartfelt storytelling."
  },
  {
    title: "Satyr's Sun",
    type: "EP",
    year: "2025",
    spotifyId: "6eBuVdaSEL3BBJ83ELiOsh",
    description: "Rock, jam, and jazz influences exploring new sonic territory."
  },
  {
    title: "Poolside Clams",
    type: "Single",
    year: "2025",
    spotifyId: "3Hvlam4luKWIojbVP3Awtf",
    description: "A standalone instrumental single with Caribbean-inspired rhythms."
  }
];

export default function Music() {
  return (
    <div className="pt-16 min-h-screen bg-mg-brown text-mg-cream">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Music</h1>
            <p className="text-xl text-mg-dust max-w-2xl mx-auto">
              Each release is an opportunity to explore new sounds, work with different musicians, and see where the songs naturally lead.
            </p>
          </div>
          
          <div className="space-y-12 max-w-4xl mx-auto mb-12">
            {releases.map((release) => (
              <div key={release.spotifyId} className="bg-mg-cream/5 backdrop-blur-sm rounded-xl p-6 border border-mg-dust/20">
                <div className="mb-4">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-mg-cream">{release.title}</h2>
                    <span className="text-sm font-heading text-mg-terra uppercase tracking-wider">{release.type} &middot; {release.year}</span>
                  </div>
                  <p className="text-mg-dust font-body">{release.description}</p>
                </div>
                <iframe
                  src={`https://open.spotify.com/embed/album/${release.spotifyId}?utm_source=generator&theme=0`}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-lg"
                  title={`${release.title} on Spotify`}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://open.spotify.com/artist/4fbu4uj2jCKMf0XrhyGbHL?si=0GIMF3N7TO-yNIlIX1sfLg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-mg-terra hover:bg-orange-800 text-mg-cream px-8 py-4 rounded-lg font-heading font-bold text-lg transition-colors duration-200"
            >
              <i className="fab fa-spotify text-xl"></i>
              Follow on Spotify
            </a>
            <a 
              href="https://www.youtube.com/channel/UCPjBfP9MkLN4Im3TUBXws1g" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-mg-terra text-mg-terra hover:bg-mg-terra hover:text-mg-cream px-8 py-4 rounded-lg font-heading font-bold text-lg transition-colors duration-200"
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
