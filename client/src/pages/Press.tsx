import FollowUsSection from "@/components/FollowUsSection";

export default function Press() {
  return (
    <div className="pt-16 min-h-screen bg-mg-light">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-mg-dark mb-6">Press</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Media coverage, reviews, and press resources for Melodious Gaeng.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-mg-dark text-mg-light p-8 rounded-xl">
              <div className="flex items-start gap-4">
                <i className="fas fa-quote-left text-mg-gold text-3xl mt-1 flex-shrink-0"></i>
                <div>
                  <blockquote className="text-xl md:text-2xl font-heading font-bold mb-4">
                    Featured in Denver Westword's Colorado New Music Roundup
                  </blockquote>
                  <p className="text-gray-300 mb-4 font-body">
                    Melodious Gaeng's debut EP, Satyr's Sun, was included in Denver Westword's monthly roundup of new Colorado music releases.
                  </p>
                  <cite className="text-mg-gold font-heading font-semibold">
                    &mdash; Denver Westword
                  </cite>
                </div>
              </div>
            </div>

            <div className="bg-mg-dark text-mg-light p-8 rounded-xl">
              <div className="flex items-start gap-4">
                <i className="fas fa-quote-left text-mg-gold text-3xl mt-1 flex-shrink-0"></i>
                <div>
                  <blockquote className="text-xl md:text-2xl font-heading font-bold mb-4">
                    Melodious Twang EP Reviewed by Glide Magazine
                  </blockquote>
                  <p className="text-gray-300 mb-4 font-body">
                    Glide Magazine featured a review of the "Melodious Twang" EP and the track "Change of Plans" featuring Deer Creek Sharp Shooters.
                  </p>
                  <cite className="text-mg-gold font-heading font-semibold">
                    &mdash; Glide Magazine
                  </cite>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-xl">
              <h3 className="text-2xl font-heading font-bold text-mg-dark mb-4">About Melodious Gaeng</h3>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                Melodious Gaeng is a creative music project founded by brothers Harrison and Liam Gaeng, who collaborate from 1,700 miles apart. Blending rock, jam, and jazz influences with acoustic-driven bluegrass, country, and even Caribbean-inspired rhythms, each release explores new sonic territory with a rotating cast of Colorado's top musicians.
              </p>
              <p className="text-gray-700 font-body leading-relaxed">
                Recordings take place at Vermillion Road Studios in Longmont, CO, engineered by Eric Wiggs and produced by Derek Dames Ohls. Collaborators have included members of Flash Mountain Flood, Jake Leg Band, Squeaky Feet, Envy Alo, Deer Creek Sharp Shooters, and Little Moon Travelers.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-heading font-bold text-mg-dark mb-4">Press Inquiries</h3>
              <p className="text-gray-600 font-body mb-6">
                For press inquiries, interviews, or media requests, please reach out via email.
              </p>
              <a 
                href="mailto:johngaengmusic@gmail.com" 
                className="inline-flex items-center gap-2 bg-mg-gold hover:bg-yellow-700 text-mg-dark px-8 py-3 rounded-lg font-heading font-bold text-lg transition-colors"
              >
                <i className="fas fa-envelope"></i>
                johngaengmusic@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
      <FollowUsSection />
    </div>
  );
}
