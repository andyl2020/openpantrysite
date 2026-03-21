import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Users, Package, Clock, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Private Cake Decorating Workshops',
      description: 'Hands-on experiences where guests learn cake decorating techniques in a fun, welcoming environment. Perfect for groups, parties, or team building!',
      features: [
        'All materials provided',
        'Expert guidance from Patrice',
        'Small group sizes for personalized attention',
        'Take home your decorated creation'
      ],
      icon: <Users className="text-[#00A5B8]" size={40} />,
      color: 'from-[#FFD4D4] to-[#FFEAEA]'
    },
    {
      title: 'DIY Cake Decorating Kits',
      description: 'Create at home with our complete DIY kits! Includes a cake, icing, and all decorating supplies so you can enjoy the experience with friends, family, or a partner.',
      features: [
        'Complete kit with cake and supplies',
        'Easy-to-follow instructions',
        'Perfect for date nights or family fun',
        'Convenient home delivery options'
      ],
      icon: <Package className="text-[#FFB5B5]" size={40} />,
      color: 'from-[#D4F4F7] to-[#E8FAFC]'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#00A5B8]">Services</span>
          </h2>
          <div className="w-24 h-1 bg-[#FFB5B5] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the experience that's right for you - whether you prefer hands-on workshops or creating at home
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden relative"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-20 rounded-bl-full`}></div>
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-md mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Star className="text-[#FFB5B5] mr-2 flex-shrink-0 mt-1" size={18} fill="#FFB5B5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-[#00A5B8] hover:bg-[#008899] text-white transition-colors"
                >
                  Book Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-[#FFD4D4] to-[#D4F4F7] rounded-2xl p-8 md:p-12 text-center">
          <Clock className="text-[#00A5B8] mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Flexible Scheduling Available
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            We work with your schedule! Whether it's a weekend workshop, evening session, or special event, we'll find a time that works for you and your group.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-[#00A5B8] hover:bg-[#008899] text-white px-8 transition-colors"
          >
            Inquire About Availability
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;