import FollowUsSection from "@/components/FollowUsSection";
import { googleDriveImages } from "@/lib/images";

export default function Contact() {
  return (
    <div className="pt-16 min-h-screen bg-mg-dark text-mg-light">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contact</h1>
            <p className="text-xl text-gray-300">Get in touch for collaborations, press, or just to say hello</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-bold text-mg-gold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-envelope text-mg-gold text-xl w-6"></i>
                    <a 
                      href="mailto:johngaengmusic@gmail.com" 
                      className="text-mg-light hover:text-mg-gold transition-colors duration-200"
                    >
                      johngaengmusic@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-mg-gold mb-4">Connect</h3>
                <div className="space-y-3">
                  <a href="https://www.instagram.com/melodious_gaeng" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-mg-light hover:text-mg-gold transition-colors">
                    <i className="fab fa-instagram text-xl w-6"></i>
                    <span>@melodious_gaeng</span>
                  </a>
                  <a href="https://www.facebook.com/melodiousgaeng/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-mg-light hover:text-mg-gold transition-colors">
                    <i className="fab fa-facebook text-xl w-6"></i>
                    <span>Melodious Gaeng</span>
                  </a>
                  <a href="https://www.youtube.com/channel/UCPjBfP9MkLN4Im3TUBXws1g" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-mg-light hover:text-mg-gold transition-colors">
                    <i className="fab fa-youtube text-xl w-6"></i>
                    <span>YouTube Channel</span>
                  </a>
                  <a href="https://open.spotify.com/artist/4fbu4uj2jCKMf0XrhyGbHL" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-mg-light hover:text-mg-gold transition-colors">
                    <i className="fab fa-spotify text-xl w-6"></i>
                    <span>Spotify</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center items-center">
              <img 
                src={googleDriveImages.contactBandPhoto}
                alt="Melodious Gaeng" 
                className="max-w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <FollowUsSection />
    </div>
  );
}
