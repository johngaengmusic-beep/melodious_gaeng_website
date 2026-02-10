import { Link } from "wouter";
import { googleDriveImages } from "@/lib/images";

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${googleDriveImages.heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-mg-brown/50"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="mb-16 mt-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-mg-cream drop-shadow-lg tracking-wider">
            MELODIOUS GAENG
          </h1>
        </div>
        
        <div className="mb-16">
          <p className="text-xl md:text-2xl lg:text-3xl font-body text-mg-sand drop-shadow-md max-w-3xl mx-auto leading-relaxed">A creative vision without boundaries — for the sake of the song</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/music">
            <span className="bg-mg-terra hover:bg-orange-800 text-mg-cream px-10 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-200 inline-block cursor-pointer shadow-xl hover:shadow-2xl transform hover:scale-105">
              Listen Now
            </span>
          </Link>
          <Link href="/about">
            <span className="border-2 border-mg-cream text-mg-cream hover:bg-mg-cream hover:text-mg-brown px-10 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-200 inline-block cursor-pointer shadow-xl hover:shadow-2xl transform hover:scale-105 bg-mg-brown/30 backdrop-blur-sm">
              About Us
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
