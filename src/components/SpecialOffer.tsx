import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { Timer, Sparkles } from 'lucide-react';

export const SpecialOffer = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7); // 7 days from now

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 min-w-[100px]">
      <span className="text-3xl font-bold text-blue-600">{value}</span>
      <span className="text-sm text-slate-600">{label}</span>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50 overflow-hidden">
      <div 
        ref={ref}
        className="container mx-auto px-4 md:px-6"
      >
        <div 
          className={`text-center transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6">
            <Sparkles size={20} className="mr-2" />
            <span className="font-medium">Limited Time Offer</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Special Launch Discount
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
            Get 25% off on all web development services. Don't miss out on this exclusive offer!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <TimeBlock value={timeLeft.days} label="Days" />
            <TimeBlock value={timeLeft.hours} label="Hours" />
            <TimeBlock value={timeLeft.minutes} label="Minutes" />
            <TimeBlock value={timeLeft.seconds} label="Seconds" />
          </div>

          <a 
            href="https://wa.me/918309545370" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <Timer size={20} className="mr-2" />
            Claim Offer Now
          </a>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-teal-500 rounded-full opacity-5 blur-3xl"></div>
      </div>
    </section>
  );
};
