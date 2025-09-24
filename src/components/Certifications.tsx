import React from 'react';
import { Shield, Award, CheckCircle, Phone } from 'lucide-react';
import docCert1 from "../images/certification icon with since 1971 text.jpg";
import docCert2 from "../images/certification icon with since 1975 text.jpg";
import docCert3 from "../images/sce-logo.png";
import docCert4 from "../images/EAFSM.png";
import docCert5 from "../images/download-1.png";
import docCert6 from "../images/hah-1.jpg";
import docCert7 from "../images/civil-defence-dubai-logo1.jpg";

const Certifications = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Licensed & Certified Gas Cylinder Supplier
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BBQ Gas is fully licensed and certified by Dubai authorities for safe gas cylinder 
            supply and installation services across the UAE.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Certification Images */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-red-200 rounded-2xl transform rotate-2 opacity-30 group-hover:rotate-3 transition-transform duration-300"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-lg">
                <img
                  src={docCert1}
                  alt="Professional gas cylinder storage facility in Dubai"
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Al Salam Gas Distributor LLC</h3>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-green-200 rounded-2xl transform -rotate-2 opacity-30 group-hover:-rotate-3 transition-transform duration-300"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-lg">
                <img
                  src={docCert2}
                  alt="Professional gas cylinder delivery truck in Dubai"
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Al Jafliyah Gas Distribution LLC</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Certification Logos and Contact */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Certifications</h3>
              
               <div className="grid grid-cols-3 gap-6 mb-8">
                  <img src={docCert3} alt="Certification Logo 1" className="w-full h-20 object-contain rounded-md shadow-sm" />
                  <img src={docCert4} alt="Certification Logo 2" className="w-full h-20 object-contain rounded-md shadow-sm" />
                  <img src={docCert5} alt="Certification Logo 3" className="w-full h-20 object-contain rounded-md shadow-sm" />
                  <img src={docCert6} alt="Certification Logo 4" className="w-full h-20 object-contain rounded-md shadow-sm" />
                  <img src={docCert7} alt="Certification Logo 5" className="w-full h-20 object-contain rounded-md shadow-sm" />
               </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-6 text-center text-white">
                <h4 className="text-xl font-bold mb-3">Ready for New Gas Connection?</h4>
                <p className="mb-4 opacity-90">Call our certified technicians now</p>
                <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 mx-auto">
                  <Phone size={20} />
                  <span>+971 58 282 1712</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
