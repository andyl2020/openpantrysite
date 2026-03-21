import React from 'react';
import { Button } from './ui/button';
import { Cake, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFD4D4] via-[#FFEAEA] to-white"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <Cake size={80} className="text-[#00A5B8]" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <Sparkles size={60} className="text-[#FFB5B5]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm">
              <span className="text-[#00A5B8] font-semibold">Cake Decorating Workshops & DIY Kits</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gray-900">Discover Your</span>
              <br />
              <span className="text-[#00A5B8]">Creative Side</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl">
              Join Patrice at Open Pantry for hands-on cake decorating workshops where creativity meets community. Perfect for beginners and cake enthusiasts alike!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-[#00A5B8] hover:bg-[#008899] text-white px-8 py-6 text-lg transition-all hover:scale-105"
              >
                Book a Workshop
              </Button>
              <Button
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                variant="outline"
                className="border-2 border-[#00A5B8] text-[#00A5B8] hover:bg-[#00A5B8] hover:text-white px-8 py-6 text-lg transition-all"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right side - Hero image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://customer-assets.emergentagent.com/job_d2e1c9cd-4117-4e23-8dec-208e60b558d7/artifacts/zu09yshp_hero%20image%20patrice.jpg"
                alt="Patrice - Open Pantry Founder"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="bg-[#FFD4D4] p-3 rounded-full">
                  <Sparkles className="text-[#00A5B8]" size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Wilton Certified</p>
                  <p className="text-sm text-gray-600">Cake Decorator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;