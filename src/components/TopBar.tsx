import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-[#248416] text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <span>+268 7602 3495</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            <span>info@nsibazezulu.com</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span>Manzini, Eswatini</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;