import React from 'react';
import { useInView } from '../hooks/useInView';
import { CheckCircle } from 'lucide-react';

export const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const stats = [
    { value: '7+', label: 'Years Experience' },
    { value: '200+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '10', label: 'Team Members' },
  ];

  const benefits = [
    'Customized solutions tailored to your business needs',
    'Responsive design that works on all devices',
    'SEO-friendly websites that rank higher in search results',
    'Fast, reliable, and secure web applications',
    'Ongoing support and maintenance',
    'Transparent communication and project management',
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Our Team" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-teal-500 rounded-full opacity-10 blur-3xl -z-10"></div>
              
             
            </div>
          </div>
          
          <div 
            ref={ref}
            className={`transition-all duration-700 delay-300 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">About Our Agency</h2>
            <p className="text-lg text-slate-600 mb-8">
              We are a team of passionate web developers and designers dedicated to creating exceptional digital experiences. With over 10 years of experience, we've helped businesses of all sizes establish a strong online presence and achieve their digital goals.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-blue-600 mt-1 mr-3 shrink-0" />
                  <p className="text-slate-700">{benefit}</p>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="btn-primary">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};