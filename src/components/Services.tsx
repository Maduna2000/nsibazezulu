import React from 'react';
import { Recycle, Truck, Trash } from 'lucide-react';

const services = [
  {
    icon: Recycle,
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Scrap Metal Recycling',
    description: 'Professional recycling services for all types of scrap metal, ensuring sustainable disposal and recycling practices.'
  },
  {
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Skip Bin Hire',
    description: 'Convenient skip bin rental services for construction, renovation, and cleanup projects of any size.'
  },
  {
    icon: Trash,
    image: 'https://images.unsplash.com/photo-1591193686104-fddba4cb0539?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Waste Management',
    description: 'Comprehensive waste management solutions tailored to meet your specific needs and environmental requirements.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#070909] mb-4">
            Our Services
          </h2>
          <p className="text-[#524944] max-w-2xl mx-auto">
            Professional waste management solutions for all your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <div className="bg-[#248416] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-[#248416]" />
                </div>
                <h3 className="text-xl font-bold text-[#070909] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#524944]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;