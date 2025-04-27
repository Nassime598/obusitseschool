import React from 'react';
import { Bell, Calendar, Users, Award } from 'lucide-react';

interface Announcement {
  icon: React.ReactNode;
  date: string;
  title: string;
  content: string;
}

const Announcements: React.FC = () => {
  const announcements: Announcement[] = [
    {
      icon: <Calendar className="w-5 h-5" />,
      date: "June 15, 2025",
      title: "End of Term Examinations",
      content: "The end of term examinations will be conducted from June 15-25. Students are advised to prepare well and bring all necessary materials."
    },
    {
      icon: <Users className="w-5 h-5" />,
      date: "May 20, 2025",
      title: "Parent-Teacher Meeting",
      content: "We invite all parents to attend the upcoming parent-teacher meeting to discuss student progress and school development initiatives."
    },
    {
      icon: <Award className="w-5 h-5" />,
      date: "July 5, 2025",
      title: "Annual Sports Day",
      content: "The annual sports day will be held on July 5th. Students are encouraged to register for various events by May 30th."
    }
  ];

  return (
    <section id="announcements" className="section bg-white">
      <div className="container">
        <div className="section-title">
          <h2>Announcements</h2>
          <p>Stay updated with the latest news and events from our school</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {announcements.map((announcement, index) => (
            <div 
              key={index}
              className={`
                relative p-6 mb-6 transition-all duration-300 bg-white border-l-4 rounded-lg shadow-md 
                hover:shadow-lg border-teal-600 hover:border-l-8
              `}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 text-white rounded-full bg-teal-600 shrink-0">
                  {announcement.icon}
                </div>
                <div>
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-medium text-teal-800 bg-teal-100 rounded-full">
                    {announcement.date}
                  </span>
                  <h3 className="mb-2 text-xl font-semibold">{announcement.title}</h3>
                  <p className="text-slate-600">{announcement.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <a 
            href="#" 
            className="flex items-center gap-2 px-6 py-3 text-blue-900 transition-colors border-2 rounded-md border-blue-900 hover:bg-blue-900 hover:text-white"
          >
            <Bell className="w-5 h-5" />
            View All Announcements
          </a>
        </div>
      </div>
    </section>
  );
};

export default Announcements;