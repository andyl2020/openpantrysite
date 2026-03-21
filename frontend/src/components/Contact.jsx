import React from 'react';
import { Card } from './ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-[#00A5B8]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[#FFB5B5] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your cake decorating journey? Fill out the form below or reach out directly!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            </div>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-[#00A5B8]">
              <div className="flex items-start space-x-4">
                <div className="bg-[#FFD4D4] p-3 rounded-full">
                  <Mail className="text-[#00A5B8]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                  <a
                    href="mailto:openpantry.ca@gmail.com"
                    className="text-[#00A5B8] hover:underline"
                  >
                    openpantry.ca@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-[#FFB5B5]">
              <div className="flex items-start space-x-4">
                <div className="bg-[#D4F4F7] p-3 rounded-full">
                  <MapPin className="text-[#00A5B8]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600">Serving Metro Vancouver &amp; the Lower Mainland</p>
                </div>
              </div>
            </Card>

            <div className="bg-gradient-to-br from-[#FFD4D4] to-[#D4F4F7] rounded-2xl p-8 mt-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Why Choose Open Pantry?</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#00A5B8] rounded-full mr-3"></span>
                  Wilton certified instruction
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#00A5B8] rounded-full mr-3"></span>
                  Small, intimate group sizes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#00A5B8] rounded-full mr-3"></span>
                  All materials provided
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#00A5B8] rounded-full mr-3"></span>
                  Beginner-friendly environment
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#00A5B8] rounded-full mr-3"></span>
                  Flexible scheduling options
                </li>
              </ul>
            </div>
          </div>

          {/* Google Form Embed */}
          <div>
            <Card className="p-6 bg-white shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h3>
              <p className="text-gray-600 mb-6">
                Fill out the form below to inquire about workshops, DIY kits, or custom orders.
              </p>
              <div className="w-full">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfHo6AXYTL4pzh5y-oZDO9jAkf9LCDFoWin1PIB3s0BDUYbJQ/viewform?embedded=true"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  className="rounded-lg"
                >
                  Loading…
                </iframe>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
