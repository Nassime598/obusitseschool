import React from 'react';
import { BookOpen, Users, Award, Building } from 'lucide-react';

const AboutCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}> = ({ icon, title, description }) => (
  <div className="card hover:shadow-lg transition-shadow">
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 text-white rounded-full bg-teal-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-slate-600">{description}</p>
  </div>
);

const About: React.FC = () => {
  const aboutCards = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Comprehensive Education",
      description: "We offer a comprehensive educational program focusing on academic excellence and holistic development."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Experienced Faculty",
      description: "Our dedicated team of 24 teachers is committed to guiding students toward academic success and personal growth."
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Boarding Facilities",
      description: "We provide safe and supportive boarding facilities for students who require accommodation."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Public School",
      description: "As a public institution, we strive to provide quality education that is accessible to all students in our community."
    }
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="section-title">
          <h2>About Our School</h2>
          <p>Established to provide quality education for intermediate students in the Ditsobotla district</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {aboutCards.map((card, index) => (
            <AboutCard 
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        
        <div className="max-w-3xl p-8 mx-auto mt-16 text-center bg-blue-50 rounded-lg">
          <h3 className="mb-4 text-2xl">Our Mission</h3>
          <p className="mb-4 text-lg text-slate-700">
            At Obusitse Middle School, our mission is to provide a supportive and challenging educational environment 
            where students can develop their academic abilities, critical thinking skills, and character.
          </p>
          <p className="text-lg text-slate-700">
            We are committed to educational excellence, fostering a sense of community, and preparing our students 
            for success in high school and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;