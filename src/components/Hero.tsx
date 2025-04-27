import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center min-h-screen text-white bg-blue-900 hero"
      style={{
        backgroundImage: 'url("https://www.developafrica.org/sites/default/files/styles/image_1368x768/public/IMG_0320.jpg?itok=R4cWWLo-")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
      
      <div className="container relative z-10 text-center">
        <h1 className="mb-4 text-5xl font-bold animate-fade-in-up md:text-6xl">
          Welcome to Obusitse Middle School
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-xl animate-fade-in-up animation-delay-300 md:text-2xl">
          Empowering students to achieve academic excellence and personal growth
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-600">
          <a href="#about" className="btn btn-secondary">
            Learn More
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a href="#contact" className="btn bg-white text-blue-900 hover:bg-slate-100">
            Contact Us
          </a>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="p-2 rounded-full bg-white/20 hover:bg-white/30">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;