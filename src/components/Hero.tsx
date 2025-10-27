import React, { useEffect, useRef } from 'react';

export const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateElements = () => {
      if (headingRef.current) {
        headingRef.current.classList.add('animate-in');
      }
      
      setTimeout(() => {
        if (subheadingRef.current) {
          subheadingRef.current.classList.add('animate-in');
        }
      }, 300);
      
      setTimeout(() => {
        if (ctaRef.current) {
          ctaRef.current.classList.add('animate-in');
        }
      }, 600);
      
      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.classList.add('animate-in');
        }
      }, 900);
    };

    animateElements();
  }, []);

  return (
    <section id="hero" className="pt-28 lg:pt-36 pb-24 overflow-hidden relative bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p
              className="text-lg md:text-xl font-semibold text-black -mb-2"
            >
              ---Hello, I'm Rajesh
            </p>
            <h1 
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 opacity-0 translate-y-8 transition-all duration-700"
            >
              We Design the Way <span className="text-blue-600">You Think</span>
            </h1>
            <p 
              ref={subheadingRef}
              className="text-lg md:text-xl text-slate-600 max-w-xl opacity-0 translate-y-8 transition-all duration-700 delay-200"
            >
              Transforming your vision into exceptional digital experiences. We craft beautiful, functional websites that drive growth and elevate your brand.
            </p>
            <div 
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 opacity-0 translate-y-8 transition-all duration-700 delay-400"
            >
              <a 
                href="#contact" 
                className="btn-primary"
              >
                Get Started
              </a>
            </div>
          </div>
          <div 
            ref={imageRef}
            className="relative opacity-0 translate-x-8 transition-all duration-700 delay-600"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Web Development Team" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-teal-500 rounded-full opacity-20 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-teal-500 rounded-full opacity-5 blur-3xl"></div>
    </section>
  );
};
