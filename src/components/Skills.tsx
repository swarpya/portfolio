import React from 'react';
import { Code, Blocks, Cpu, Brain, Database, Mobile } from 'lucide-react';

const skillCategories = [
  {
    icon: Brain,
    title: 'AI & ML',
    color: 'purple',
    skills: ['LLMs & LangChain', 'Computer Vision', 'PyTorch & TensorFlow', 'Neural Networks']
  },
  {
    icon: Code,
    title: 'Development',
    color: 'blue',
    skills: ['React & Node.js', 'Python & Java', 'Flutter', 'REST APIs']
  },
  {
    icon: Database,
    title: 'Data & Tools',
    color: 'green',
    skills: ['PostgreSQL & MongoDB', 'Qdrant Vector DB', 'Git & Docker', 'AWS DevOps']
  }
];

export default function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {skillCategories.map((category, index) => (
        <div 
          key={category.title}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center mb-4">
            <category.icon className={`w-6 h-6 text-${category.color}-500`} />
            <h3 className="text-xl font-semibold ml-2 text-gray-900 dark:text-white">{category.title}</h3>
          </div>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            {category.skills.map((skill) => (
              <li key={skill} className="transform hover:translate-x-2 transition-transform duration-300">{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}