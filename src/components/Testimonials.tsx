import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const stats = [
  { value: '7+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '10', label: 'Team Members' },
];

export const Testimonials = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, Fashion Brand',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'Working with DevCraft was a game-changer for our business. They created a stunning e-commerce website that perfectly captures our brand essence and has significantly increased our online sales.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder, Tech Startup',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'The team at DevCraft delivered beyond our expectations. Their attention to detail and technical expertise helped us launch our platform ahead of schedule. Highly recommended!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Jessica Williams',
      role: 'Marketing Director, Agency',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'We\'ve partnered with DevCraft on multiple client projects, and they consistently deliver exceptional results. Their creative approach and technical skills make them our go-to web development partner.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white overflow-hidden">
      <div 
        ref={ref}
        className="container mx-auto px-4 md:px-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div 
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative bg-slate-50 rounded-2xl p-8 md:p-12 shadow-sm">
              <div className="absolute top-0 transform -translate-y-1/2 left-1/2 -translate-x-1/2 bg-blue-600 rounded-full p-3">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-300 fill-yellow-300" />
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto md:mx-0">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div>
                  <blockquote className="text-lg md:text-xl text-slate-700 italic mb-6">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="font-bold text-slate-900">{testimonials[activeIndex].name}</div>
                      <div className="text-slate-600">{testimonials[activeIndex].role}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-500 rounded-full opacity-5 blur-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-teal-500 rounded-full opacity-5 blur-3xl -z-10"></div>
            </div>
          </div>

          <div 
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-2 gap-6 md:gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === activeIndex ? 'bg-blue-600' : 'bg-slate-300'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full bg-white rounded-full p-2 shadow-md text-slate-700 hover:text-blue-600 transition-colors duration-300 focus:outline-none"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-full bg-white rounded-full p-2 shadow-md text-slate-700 hover:text-blue-600 transition-colors duration-300 focus:outline-none"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};
