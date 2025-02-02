import React from 'react';
import { Clock, Banknote, Truck } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'Same-day service and flexible scheduling options'
    },
    {
      icon: Truck,
      title: 'Free Collection',
      description: 'Complimentary pickup services for qualifying materials in Manzini-Mbabane Corridor'
    },
    {
      icon: Banknote,
      title: 'Same Day Payment',
      description: 'Instant EFT and cash payments, no waiting no delays'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#070909] mb-12 text-center">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <div className="bg-[#248416] bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="h-10 w-10 text-[#248416]" />
              </div>
              <h3 className="text-xl font-bold text-[#070909] mb-4">{benefit.title}</h3>
              <p className="text-[#524944]">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;