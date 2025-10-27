import React from 'react';
import { useInView } from '../hooks/useInView';
import { Smartphone, Code, PenTool, Lightbulb, Globe, Server } from 'lucide-react';

export const Services = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const services = [
    {
      icon: <Code size={28} className="text-blue-600" />,
      title: 'Web Development',
      description: 'Custom websites built with the latest technologies that are responsive, fast, and optimized for search engines.',
    },
    {
      icon: <PenTool size={28} className="text-blue-600" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that engage users and improve conversion rates.',
    },
    {
      icon: <Smartphone size={28} className="text-blue-600" />,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications that work seamlessly on iOS and Android devices.',
    },
    {
      icon: <Lightbulb size={28} className="text-blue-600" />,
      title: 'Digital Strategy',
      description: 'Strategic planning to help you achieve your business goals through digital transformation.',
    },
    {
      icon: <Globe size={28} className="text-blue-600" />,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive more organic traffic to your website.',
    },
    {
      icon: <Server size={28} className="text-blue-600" />,
      title: 'Hosting & Maintenance',
      description: 'Reliable hosting solutions and ongoing maintenance to keep your website secure and up-to-date.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We provide comprehensive web development solutions to help your business thrive in the digital landscape.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-blue-50 p-3 rounded-lg inline-block mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};