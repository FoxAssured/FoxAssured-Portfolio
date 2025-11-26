import React, { useState } from 'react';
import { SKILLS, SERVICES, PROJECTS, EXPERIENCES, EDUCATION, EMAIL } from '../constants';
import Icon from '../components/Icon';
import { ExternalLink, Github, Mail } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeExpId, setActiveExpId] = useState(EXPERIENCES[0].id);
  const activeExp = EXPERIENCES.find(e => e.id === activeExpId) || EXPERIENCES[0];

  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto space-y-32">
      
      {/* Introduction to Page */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-pastel-950 mb-6">Expertise & Experience</h1>
        <p className="text-gray-600 text-lg">
          Delivering high-quality software as a <span className="font-semibold text-pastel-700">Software Development Engineer in Test (SDET)</span> through advanced automation strategies, rigorous manual testing, and process optimization.
        </p>
      </section>

      {/* Services Section */}
      <section>
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px bg-pastel-200 flex-1"></div>
          <h2 className="text-3xl font-bold text-pastel-900">Services</h2>
          <div className="h-px bg-pastel-200 flex-1"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white border border-pastel-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-pastel-300 transition-all duration-300 group">
              <div className="w-12 h-12 bg-pastel-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pastel-100 transition-colors duration-300">
                <Icon name={service.iconName} className="text-pastel-600 group-hover:text-pastel-700" />
              </div>
              <h3 className="text-xl font-semibold text-pastel-900 mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px bg-pastel-200 flex-1"></div>
          <h2 className="text-3xl font-bold text-pastel-900">Technical Arsenal</h2>
          <div className="h-px bg-pastel-200 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((category, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-pastel-200 shadow-sm">
              <h3 className="text-xl font-semibold text-pastel-700 mb-6 pb-2 border-b border-pastel-100">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-pastel-50 text-pastel-800 text-sm font-medium rounded-lg border border-pastel-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px bg-pastel-200 flex-1"></div>
          <h2 className="text-3xl font-bold text-pastel-900">Featured Projects</h2>
          <div className="h-px bg-pastel-200 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden border border-pastel-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="h-48 overflow-hidden relative bg-pastel-50 flex items-center justify-center">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-pastel-900 mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-xs font-mono text-pastel-700 bg-pastel-50 px-2 py-1 rounded border border-pastel-100">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-600 hover:text-pastel-600 transition-colors">
                      <Github size={16} /> Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-600 hover:text-pastel-600 transition-colors">
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & Education */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Experience - Redesigned as Interactive Tabs */}
        <section>
           <h2 className="text-3xl font-bold text-pastel-900 mb-8 flex items-center gap-3">
             <div className="w-2 h-8 bg-pastel-500 rounded-full"></div>
             Work History
           </h2>
           
           <div className="flex flex-col gap-6">
             {/* Navigation Tabs */}
             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-2">
               <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-3 pb-2 md:pb-0 scrollbar-hide">
                 {EXPERIENCES.map((exp) => (
                   <button
                     key={exp.id}
                     onClick={() => setActiveExpId(exp.id)}
                     className={`flex-shrink-0 text-left px-5 py-4 rounded-xl transition-all duration-300 border w-64 md:w-full ${
                       activeExpId === exp.id
                         ? 'bg-white border-pastel-400 shadow-md translate-x-1'
                         : 'bg-white/50 border-transparent hover:bg-white hover:shadow-sm text-gray-500'
                     }`}
                   >
                     <h4 className={`font-bold text-lg ${activeExpId === exp.id ? 'text-pastel-800' : 'text-gray-600'}`}>
                       {exp.company}
                     </h4>
                     <p className={`text-sm ${activeExpId === exp.id ? 'text-pastel-600' : 'text-gray-400'}`}>
                       {exp.role}
                     </p>
                   </button>
                 ))}
               </div>
             </div>

             {/* Detail View */}
             <div className="bg-white rounded-2xl p-8 border border-pastel-200 shadow-sm min-h-[300px] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pastel-50 rounded-bl-full -z-0 opacity-50"></div>
                
                <div key={activeExpId} className="relative z-10 animate-fade-in">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-pastel-900">{activeExp.role}</h3>
                      <p className="text-pastel-600 font-medium text-lg">{activeExp.company}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end text-sm text-gray-500 gap-1">
                      <span className="flex items-center gap-1.5 bg-pastel-50 px-3 py-1 rounded-full text-pastel-700">
                        <Icon name="Calendar" size={14} /> {activeExp.period}
                      </span>
                      <span className="flex items-center gap-1.5 px-3">
                        <Icon name="MapPin" size={14} /> {activeExp.location}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities List */}
                  <div>
                    <h4 className="text-lg font-bold text-pastel-900 mb-4 flex items-center gap-2">
                      <Icon name="CheckCircle2" size={18} /> 
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-4">
                      {activeExp.responsibilities.map((resp, i) => (
                        <li key={i} className="text-gray-600 leading-relaxed flex items-start gap-3">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pastel-500 flex-shrink-0 shadow-sm"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
             </div>
           </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-3xl font-bold text-pastel-900 mb-8 flex items-center gap-3">
             <div className="w-2 h-8 bg-pastel-500 rounded-full"></div>
             Education & Certs
           </h2>
          <div className="space-y-4">
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="flex items-center gap-4 bg-white p-5 rounded-xl border border-pastel-100 shadow-sm hover:border-pastel-300 transition-all">
                <div className={`p-3 rounded-full ${edu.status === 'Coming Soon' ? 'bg-gray-100 text-gray-400' : 'bg-pastel-50 text-pastel-600'}`}>
                  <Icon name="GraduationCap" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-pastel-900">{edu.name}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-pastel-700 text-sm font-medium">{edu.institution}</p>
                    <span className="text-gray-500 text-xs">{edu.date}</span>
                  </div>
                  {edu.grade && <span className="text-xs text-pastel-600 mt-1 block font-medium">{edu.grade}</span>}
                  {edu.status === 'Coming Soon' && <span className="text-xs text-amber-500 mt-1 block font-medium">In Progress</span>}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Contact CTA */}
      <section className="bg-white rounded-3xl p-8 md:p-12 text-center border border-pastel-200 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pastel-300 via-pastel-500 to-pastel-300"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-pastel-900 mb-4">Ready to elevate your QA strategy?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Whether you need a full automation framework, a test audit, or a reliable contractor to manage your QA pipeline, I'm here to help.
        </p>
        <div 
          className="inline-flex items-center gap-2 text-pastel-600 hover:text-pastel-800 font-bold text-2xl transition-colors cursor-default"
        >
          <Mail size={24} />
          {EMAIL}
        </div>
      </section>

    </div>
  );
};

export default Portfolio;