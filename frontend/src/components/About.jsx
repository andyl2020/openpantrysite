import React from 'react';
import { Heart, Users, Award } from 'lucide-react';
import { Card } from './ui/card';
import { siteImages } from '@/lib/siteAssets';

const About = () => {
  const highlights = [
    {
      icon: <Heart className="text-[#FFB5B5]" size={32} />,
      title: 'Passion-Driven',
      description: 'Inspired by a culinary background and love for baking'
    },
    {
      icon: <Users className="text-[#00A5B8]" size={32} />,
      title: 'Community Focused',
      description: 'Creating spaces for people to connect and create together'
    },
    {
      icon: <Award className="text-[#FFB5B5]" size={32} />,
      title: 'Certified Expertise',
      description: 'Wilton Cake Decorating Certificate holder'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet <span className="text-[#00A5B8]">Patrice</span>
          </h2>
          <div className="w-24 h-1 bg-[#FFB5B5] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <blockquote className="space-y-6 rounded-2xl bg-[#FFF8F5] p-8 shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed">
                "I started Open Pantry in 2023 as a creative outlet and a way to
                save for graduate school. Fast forward to today, Open Pantry has
                quickly grown into a cozy creative community where I can share my
                love for cake decorating and other food-themed events.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Everything I know about baking and cake decorating is thanks to my
                mom, who taught me the basics at a young age, and Wilton Cakes,
                where I completed their Cake Decorating Certificate back in 2013.
                I'm excited to share my love for cakes and see everyone's
                creativity come to life."
              </p>

              <footer className="text-base font-semibold uppercase tracking-[0.2em] text-[#00A5B8]">
                - Patrice
              </footer>
            </blockquote>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={siteImages.aboutPortrait}
                alt="Patrice - Open Pantry Founder"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-gray-50 border-0"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
