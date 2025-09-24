import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ayesha Khan',
    role: 'Marketing Manager, Dubai Hills',
    quote: 'Their delivery is always on time and the tracking feature is a game-changer. Highly recommended!',
    avatar: '/avatars/ayesha.jpg'
  },
  {
    name: 'Ravi Mehta',
    role: 'Restaurant Owner, JBR',
    quote: 'Super reliable service. I’ve never had to worry about running out of gas during peak hours.',
    avatar: '/avatars/ravi.jpg'
  },
  {
    name: 'Fatima Al Noor',
    role: 'Home Chef, Downtown Dubai',
    quote: 'The team is professional, responsive, and the delivery speed is unmatched.',
    avatar: '/avatars/fatima.jpg'
  }
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [index]);

  const { name, role, quote, avatar } = testimonials[index];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">Trusted by thousands across Dubai for fast and reliable gas delivery</p>
        </div>

        <div className="relative bg-gray-50 p-8 rounded-2xl shadow-lg">
          <Quote className="absolute top-6 left-6 text-orange-300" size={32} />
          <p className="text-xl text-gray-800 italic mb-6">"{quote}"</p>
          <div className="flex items-center justify-center gap-4">
            <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer" onClick={prev}>
            <ChevronLeft className="text-gray-400 hover:text-orange-500" size={28} />
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer" onClick={next}>
            <ChevronRight className="text-gray-400 hover:text-orange-500" size={28} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
