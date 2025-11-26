import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Code2, CheckCircle2, Mail } from 'lucide-react';
import { EMAIL } from '../constants';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-20">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 right-0 h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(134,239,172,0.15),transparent_70%)] -z-10 pointer-events-none"></div>
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-pastel-200 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-pastel-300 rounded-full blur-3xl -z-10 opacity-50 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white border border-pastel-200 shadow-sm text-pastel-700 text-sm font-semibold tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pastel-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pastel-500"></span>
          </span>
          Open for Contracting
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-pastel-950 leading-tight">
          SDET & Test Architect <br />
          <span className="text-pastel-600">
            Manual & Automated
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          <span className="font-semibold text-pastel-800">Software Development Engineer in Test.</span> Bridging the gap between manual precision and automated scalability. 
          Expertise in Playwright, TypeScript, and End-to-End QA Strategy.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <Link 
            to="/portfolio" 
            className="w-full sm:w-auto px-8 py-4 bg-pastel-600 text-white rounded-xl font-bold text-lg hover:bg-pastel-700 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Code2 size={20} />
            View Portfolio
          </Link>
          
          <div 
            className="w-full sm:w-auto px-4 py-4 text-pastel-900 font-bold text-lg hover:text-pastel-600 transition-colors duration-300 flex items-center justify-center gap-2 cursor-default"
          >
            <Mail size={20} />
            {EMAIL}
          </div>
        </div>

        {/* Mini About Snippet */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-pastel-100 hover:border-pastel-300 transition-colors">
            <div className="w-10 h-10 bg-pastel-100 rounded-full flex items-center justify-center text-pastel-600 mb-4">
              <CheckCircle2 size={20} />
            </div>
            <h3 className="text-pastel-900 font-bold text-lg mb-2">Manual QA Expert</h3>
            <p className="text-gray-600 text-sm">Rigorous attention to detail for exploratory, usability, and visual testing.</p>
          </div>
          
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-pastel-100 hover:border-pastel-300 transition-colors">
            <div className="w-10 h-10 bg-pastel-100 rounded-full flex items-center justify-center text-pastel-600 mb-4">
              <Code2 size={20} />
            </div>
            <h3 className="text-pastel-900 font-bold text-lg mb-2">Automation Architect</h3>
            <p className="text-gray-600 text-sm">Building scalable frameworks with Playwright and Cypress.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm border border-pastel-100 hover:border-pastel-300 transition-colors">
            <div className="w-10 h-10 bg-pastel-100 rounded-full flex items-center justify-center text-pastel-600 mb-4">
              <BookOpen size={20} />
            </div>
            <h3 className="text-pastel-900 font-bold text-lg mb-2">End-to-End QA Strategy</h3>
            <p className="text-gray-600 text-sm">Integration of testing into CI/CD pipelines ensuring rapid delivery.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;