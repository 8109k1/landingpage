import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

export const Portfolio = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Design' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'mobile', name: 'Mobile Apps' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Fashion E-Commerce',
      category: 'ecommerce',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Modern e-commerce platform with seamless shopping experience',
    },
    {
      id: 2,
      title: 'Travel Blog',
      category: 'web',
      image: 'https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Engaging travel blog with interactive maps and content',
    },
    {
      id: 3,
      title: 'Fitness App',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Mobile fitness application with personalized workout plans',
    },
    {
      id: 4,
      title: 'Restaurant Website',
      category: 'web',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Elegant restaurant website with online reservation system',
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      category: 'ecommerce',
      image: 'https://images.pexels.com/photos/3182744/pexels-photo-3182744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Comprehensive real estate platform with virtual tours',
    },
    {
      id: 6,
      title: 'Health Tracking App',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/3183170/pexels-photo-3183170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Health and wellness tracking application with data visualization',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Portfolio</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-xl shadow-sm transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="inline-block py-1 px-3 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                  {filters.find(f => f.id === project.category)?.name}
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="btn-primary z-10">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};