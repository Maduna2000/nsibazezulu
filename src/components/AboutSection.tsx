import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <img 
            src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/logo.png"
            alt="Nsibazezulu Logo"
            className="w-32 h-32 mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold text-[#070909] mb-6">About Us</h2>
          <p className="text-[#524944] mb-6">
            Nsibazezulu Waste Management and Skip Hire is a trusted waste management company dedicated to providing efficient, reliable and environmentally responsible services across Eswatini. With roots dating back to 2014 and official business registration in 2020, we have built a strong foundation based on years of hands-on industry experience and a commitment to excellence.
          </p>
          <p className="text-[#524944]">
            Guided by our passion for environmental preservation, we strive to reduce waste, promote recycling and support a cleaner, healthier future for our communities. Partner with Nsibazezulu Waste management and Skip hire for tailored waste management solutions that prioritise sustainability and environmental stewardship.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;