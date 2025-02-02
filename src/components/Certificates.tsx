import React from 'react';

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#070909] mb-12 text-center">
          Our Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/eea-certificate.png"
              alt="Environmental Management Certification"
              className="w-full h-48 object-contain rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-[#070909] mb-2">Environmental Management</h3>
            <p className="text-[#524944]">Certified by the Eswatini Environment Authority for excellence in environmental management practices and sustainability.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/police-certificate.png"
              alt="Police Clearance Certificate"
              className="w-full h-48 object-contain rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-[#070909] mb-2">Police Clearance</h3>
            <p className="text-[#524944]">Authorized and cleared by the Royal Eswatini Police Service for waste management and recycling operations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates