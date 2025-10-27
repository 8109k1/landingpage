import React from 'react';
import { useInView } from '../hooks/useInView';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export const Contact = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  const contactInfo = [
    {
      icon: <Phone size={20} className="text-blue-600" />,
      title: 'Phone',
      details: '+91 8309545370',
      link: 'tel:+918309545370',
    },
    {
      icon: <Mail size={20} className="text-blue-600" />,
      title: 'Email',
      details: 'info@devcraft.com',
      link: 'mailto:info@devcraft.com',
    },
    {
      icon: <MessageCircle size={20} className="text-green-500" />,
      title: 'WhatsApp',
      details: '+91 8309545370',
      link: 'https://wa.me/918309545370',
    },
    {
      icon: <MapPin size={20} className="text-blue-600" />,
      title: 'Office',
      details: 'delhi, Tech City',
      link: 'https://maps.google.com',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a free consultation and quote.
          </p>
        </div>

        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto"
        >
          <div 
            className={`lg:col-span-2 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.link}
                    className="flex items-start hover:text-blue-600 transition-colors duration-300"
                  >
                    <div className={`${item.title === 'WhatsApp' ? 'bg-green-50' : 'bg-blue-50'} p-3 rounded-lg mr-4`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600">{item.details}</p>
                    </div>
                  </a>
                ))}
              </div>
              
            </div>
          </div>
          
          <div 
            className={`lg:col-span-3 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-white rounded-xl shadow-sm p-8">
              <video 
                src="hi.mp4"
                controls
                autoPlay
                muted
                loop
                className="rounded-lg shadow-md w-full h-auto max-h-[600px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};