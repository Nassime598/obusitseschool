import React, { useState, useEffect, useRef } from 'react';
import { Users, GraduationCap, CalendarClock } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  duration?: number;
}

const StatItem: React.FC<StatItemProps> = ({ 
  icon, 
  value, 
  label, 
  duration = 2000 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const end = value;
    const increment = end / 40;
    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, duration / 40);

    return () => clearInterval(timer);
  }, [value, duration, isVisible]);

  return (
    <div 
      ref={ref}
      className="flex flex-col items-center p-6 text-center transition-transform duration-500 transform bg-white rounded-lg shadow-md hover:scale-105"
    >
      <div className="p-4 mb-4 text-white rounded-full bg-blue-900">
        {icon}
      </div>
      <h3 className="mb-2 text-4xl font-bold text-blue-900">{count}</h3>
      <p className="text-lg text-slate-600">{label}</p>
    </div>
  );
};

const Statistics: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: 698,
      label: "Students (2025)",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      value: 20,
      label: "Teachers (2025)",
    },
    {
      icon: <CalendarClock className="w-8 h-8" />,
      value: 35,
      label: "Years of Excellence",
    }
  ];

  return (
    <section 
      className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="container">
        <div className="section-title">
          <h2 className="text-white border-teal-400">School Statistics</h2>
          <p className="text-white/90">Our growing community of learners and educators</p>
        </div>

        <div className="grid gap-6 mx-auto md:grid-cols-3 max-w-4xl">
          {stats.map((stat, index) => (
            <StatItem 
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
        
        <div className="max-w-xl p-6 mx-auto mt-12 text-center bg-white/10 backdrop-blur-sm rounded-lg">
          <h3 className="mb-3 text-2xl font-semibold">Growing Every Year</h3>
          <p>
            Our school has seen consistent growth in student enrollment, with projections 
            showing continued expansion in the coming years. We're committed to maintaining 
            our standards of excellence as we grow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;