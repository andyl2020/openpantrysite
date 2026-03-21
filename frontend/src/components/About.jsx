import React from 'react';
import { Heart, Users, Award } from 'lucide-react';
import { Card } from './ui/card';

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
            <p className="text-lg text-gray-700 leading-relaxed">
              Open Pantry was started by <span className="font-semibold text-[#00A5B8]">Patrice</span>, a self-taught baker inspired by her mom, who studied culinary and baking. What began in 2023 as a small creative outlet during COVID quickly grew into a cozy creative community where Patrice shares her love for cake decorating and helping others discover their creativity.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              With a <span className="font-semibold text-[#FFB5B5]">Wilton cake decorating certificate</span> and a passion for bringing people together, Patrice loves creating spaces where people can try something new and surprise themselves with what they can make.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're a complete beginner or looking to refine your skills, Open Pantry welcomes everyone to explore the joy of cake decorating in a fun, supportive environment.
            </p>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://customer-assets.emergentagent.com/job_d2e1c9cd-4117-4e23-8dec-208e60b558d7/artifacts/8x9x9qde_1%20PXL_20260131_034055861.MP.jpg"
                alt="Workshop participants with decorated cakes"
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