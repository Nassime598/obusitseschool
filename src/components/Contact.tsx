import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  details: string | React.ReactNode;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, details }) => (
  <div className="flex items-start gap-4 p-4">
    <div className="p-3 text-white rounded-full shrink-0 bg-blue-900">
      {icon}
    </div>
    <div>
      <h3 className="mb-1 text-lg font-semibold">{title}</h3>
      <div className="text-slate-600">{details}</div>
    </div>
  </div>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section bg-slate-100">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Get in touch with Obusitse Middle School</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6 border-b border-slate-200">
              <h3 className="text-2xl font-semibold text-blue-900">Contact Information</h3>
              <p className="mt-2 text-slate-600">Feel free to reach out to us with any questions or inquiries</p>
            </div>
            
            <div className="p-6">
              <ContactInfo 
                icon={<MapPin className="w-5 h-5" />} 
                title="Address" 
                details={
                  <>
                    <p>Moetgaan Section, Madibogo, 2772</p>
                    <p>P.O. Box 2009, Madibogo, 2772</p>
                    <p>Magisterial District: Ditsobotla</p>
                  </>
                }
              />
              
              <ContactInfo 
                icon={<Phone className="w-5 h-5" />} 
                title="Phone" 
                details={
                  <>
                    <p>Tel: 018 337 9009</p>
                    <p>Fax: 018 337 9009</p>
                  </>
                }
              />
              
              <ContactInfo 
                icon={<Mail className="w-5 h-5" />} 
                title="Email" 
                details="ZaneleDlaminisa@gmail.com"
              />
              
              <ContactInfo 
                icon={<Clock className="w-5 h-5" />} 
                title="Office Hours" 
                details={
                  <>
                    <p>Monday - Friday: 7:30 AM - 3:30 PM</p>
                    <p>Weekends & Holidays: Closed</p>
                  </>
                }
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6 border-b border-slate-200">
              <h3 className="text-2xl font-semibold text-blue-900">Send a Message</h3>
              <p className="mt-2 text-slate-600">We'll get back to you as soon as possible</p>
            </div>
            
            <form className="p-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block mb-1 text-sm font-medium text-slate-700">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border rounded-md border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border rounded-md border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-1 text-sm font-medium text-slate-700">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border rounded-md border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Inquiry about admission"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1 text-sm font-medium text-slate-700">
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border rounded-md border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full px-6 py-3 font-medium text-white transition-colors rounded-md bg-blue-900 hover:bg-blue-800"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="p-4 mt-12 overflow-hidden bg-white rounded-lg shadow-md">
          <h3 className="mb-4 text-xl font-semibold text-center">Our Location</h3>
          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.3!2d25.1435!3d-26.42271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI1JzIxLjgiUyAyNcKwMDgnMzYuNiJF!5e0!3m2!1sen!2sus!4v1615382606199!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              title="School Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;