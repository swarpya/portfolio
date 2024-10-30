import React from 'react';

const experiences = [
  {
    title: 'Computer Vision and LLM Developer',
    company: 'Georgian College Research & Innovation',
    period: 'September 2024 - Present',
    points: [
      'Working on Computer Vision Algorithms',
      'Collaborating with META for XR technology',
      'Working on Models like LLAMA 3.1, 3.2'
    ]
  },
  {
    title: 'LLM Engineer',
    company: 'Vilims Software',
    period: 'March 2023 - April 2024',
    points: [
      'Developed RESTful APIs for system integration',
      'Implemented LLMs and RAG techniques for PDF analysis',
      'Applied Computer Vision for document automation'
    ]
  },
  {
    title: 'Program Tutor',
    company: 'Georgian College',
    period: 'October 2024 - Present',
    points: [
      'Tutoring in Java, Spring Boot, Kotlin, and Python',
      'Guiding students through ML and Neural Networks',
      'Developing tailored learning strategies'
    ]
  }
];

export default function Experience() {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div 
          key={exp.title}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-102 transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
          <p className="text-blue-600 dark:text-blue-400 mb-2">{exp.company}</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.period}</p>
          <ul className="space-y-2">
            {exp.points.map((point, i) => (
              <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                <span className="mr-2">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}