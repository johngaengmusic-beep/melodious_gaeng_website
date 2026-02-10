import FollowUsSection from "@/components/FollowUsSection";
import { googleDriveImages } from "@/lib/images";

export default function About() {
  return (
    <div className="pt-16 min-h-screen bg-mg-light">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-mg-dark mb-6">
              About
            </h1>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-mg-dark">
                Melodious Gaeng is a creative music project founded by brothers Harrison and Liam Gaeng, who collaborate from 1,700 miles apart. What started as a long-distance experiment has become an ever-evolving journey through diverse musical landscapes&mdash;blending rock, jam, and jazz influences with acoustic-driven bluegrass, country, and even Caribbean-inspired rhythms.
              </p>
              
              <p className="text-lg leading-relaxed text-mg-dark">
                With no fixed boundaries, each release is an opportunity to explore new sounds, work with different musicians, and see where the songs naturally lead. Some listeners connect with a specific style; others follow the journey for the excitement of what&rsquo;s next. As Harrison puts it, &ldquo;Our goal is to let the music lead.&rdquo;
              </p>
              
              <p className="text-lg leading-relaxed text-mg-dark">
                Melodious Gaeng works much like a studio collective, bringing in top talent to shape each track. Collaborators have included members of Flash Mountain Flood, Jake Leg Band, Squeaky Feet, Envy Alo, Deer Creek Sharp Shooters, and Little Moon Travelers. Recordings take place at Vermillion Road Studios in Longmont, CO, engineered by Eric Wiggs and produced by Derek Dames Ohls&mdash;both renowned Colorado musicians who contribute their own artistry to the music.
              </p>

              <p className="text-lg leading-relaxed text-mg-dark">
                Inspired by the meticulous craftsmanship of Steely Dan, the constant reinvention of Michael Nau, and the adventurous spirit of any musician chasing inspiration, Melodious Gaeng continues to evolve&mdash;always following the music, wherever it may lead.
              </p>
            </div>
            
            <div className="flex justify-center">
              <img 
                src={googleDriveImages.aboutBandPhoto} 
                alt="Melodious Gaeng" 
                className="rounded-lg shadow-md w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>
      <FollowUsSection />
    </div>
  );
}
