import React from 'react';

const Experience = () => {
    const techs = [
        {
          id: 1,
          title: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 2,
          title: "React",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          title: "Python",
          style: "shadow-blue-500",
        },
        {
          id: 4,
          title: "MongoDB",
          style: "shadow-green-600",
        },
        {
          id: 5,
          title: "Node.Js",
          style: "shadow-green-400",
        },
        {
          id: 6,
          title: "Express",
          style: "shadow-white",
        },
        {
          id: 7,
          title: "Jenkins",
          style: "shadow-red-600",
        },
        {
          id: 8,
          title: "Groovy",
          style: "shadow-blue-400",
        },
        {
          id: 9,
          title: "C#",
          style: "shadow-purple-400",
        },
        {
          id: 10,
          title: "HTML",
          style: "shadow-orange-400",
        },
        {
          id: 11,
          title: "CSS",
          style: "shadow-blue-400",
        },
        {
          id: 12,
          title: "AWS",
          style: "shadow-orange-400",
        },
        {
          id: 13,
          title: "Terraform",
          style: "shadow-purple-400",
        },
        {
          id: 14,
          title: "Kubernetes",
          style: "shadow-blue-400",
        },
        {
          id: 15,
          title: "Docker",
          style: "shadow-blue-400",
        },
        {
          id: 16,
          title: "Jules",
          style: "shadow-green-400",
        },
        {
          id: 17,
          title: "Go",
          style: "shadow-blue-300",
        },
        {
          id: 18,
          title: "Django",
          style: "shadow-green-400",
        },
        {
          id: 19,
          title: "MySQL",
          style: "shadow-orange-400",
        },
        {
          id: 20,
          title: "PostgreSQL",
          style: "shadow-blue-400",
        },
        {
          id: 21,
          title: "pytest",
          style: "shadow-yellow-400",
        },
      ];
    
      return (
        <div
          name="skills"
          className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
        >
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
              <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                Skills
              </p>
              <p className="py-6">These are the technologies I've worked with</p>
            </div>
    
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
              {techs.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

export default Experience