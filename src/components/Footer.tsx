import React from 'react';
import { School, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-12 text-white bg-blue-900">
      <div className="container">
        <div className="grid gap-8 pb-8 lg:grid-cols-4 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <School className="w-8 h-8" />
              <div>
                <h3 className="text-xl font-bold">Obusitse</h3>
                <p className="text-xs text-blue-200">Middle School</p>
              </div>
            </div>
            <p className="mb-4 text-blue-200">
              Providing quality education to intermediate students in the Ditsobotla district.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold border-b border-blue-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="transition-colors text-blue-200 hover:text-white hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors text-blue-200 hover:text-white hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="transition-colors text-blue-200 hover:text-white hover:underline">
                  School Gallery
                </a>
              </li>
              <li>
                <a href="#announcements" className="transition-colors text-blue-200 hover:text-white hover:underline">
                  Announcements
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors text-blue-200 hover:text-white hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold border-b border-blue-700 pb-2">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 shrink-0 text-teal-400" />
                <span className="text-blue-200">
                  Moetgaan Section, Madibogo, 2772
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 shrink-0 text-teal-400" />
                <span className="text-blue-200">018 337 9009</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 shrink-0 text-teal-400" />
                <span className="text-blue-200">ZaneleDlaminisa@gmail.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold border-b border-blue-700 pb-2">School Hours</h3>
            <ul className="space-y-2 text-blue-200">
              <li>
                <strong className="text-white">Monday - Friday:</strong> 7:30 AM - 3:30 PM
              </li>
              <li>
                <strong className="text-white">Administrative Office:</strong> 8:00 AM - 4:00 PM
              </li>
              <li>
                <strong className="text-white">Weekends & Holidays:</strong> Closed
              </li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 text-center border-t border-blue-800">
          <p className="text-blue-200">
            &copy; {currentYear} Obusitse Middle School. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;