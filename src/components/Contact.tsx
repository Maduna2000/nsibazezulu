import React from 'react';
import { Clock, Phone, MapPin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#070909] mb-12 text-center">
            Get in Touch
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Clock className="h-6 w-6 text-[#248416] mb-4" />
              <div>
                <h3 className="font-bold text-[#070909] mb-2">Operating Hours</h3>
                <p className="text-[#524944]">Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p className="text-[#524944]">Saturday: 9:00 AM - 1:00 PM</p>
                <p className="text-[#524944]">Sunday: Closed</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <Phone className="h-6 w-6 text-[#248416] mb-4" />
              <div>
                <h3 className="font-bold text-[#070909] mb-2">Phone</h3>
                <p className="text-[#524944]">+268 7602 3495</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <Mail className="h-6 w-6 text-[#248416] mb-4" />
              <div>
                <h3 className="font-bold text-[#070909] mb-2">Email</h3>
                <p className="text-[#524944]">info@nsibazezulu.com</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <MapPin className="h-6 w-6 text-[#248416] mb-4" />
              <div>
                <h3 className="font-bold text-[#070909] mb-2">Location</h3>
                <p className="text-[#524944]">Manzini, Eswatini</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;