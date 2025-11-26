import React from 'react';
import { Link } from 'react-router-dom';
import { Construction, ArrowLeft } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-20 text-center">
      <div className="bg-pastel-50 p-8 rounded-full mb-8 animate-bounce border border-pastel-200">
        <Construction size={64} className="text-pastel-500" />
      </div>
      
      <h1 className="text-5xl font-bold text-pastel-900 mb-4">Under Construction</h1>
      <p className="text-xl text-gray-500 mb-8 max-w-lg mx-auto">
        The Education platform is currently being built. Check back soon for tutorials, courses, and automation guides.
      </p>
      
      <Link 
        to="/" 
        className="flex items-center gap-2 px-6 py-3 bg-pastel-600 text-white rounded-lg font-bold hover:bg-pastel-700 transition-colors shadow-md"
      >
        <ArrowLeft size={20} />
        Return Home
      </Link>
    </div>
  );
};

export default Education;