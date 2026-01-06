import React from "react";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, YOUTUBE_URL } from "../constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-pastel-100 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-pastel-900 tracking-wider">
            FOXASSURED
          </h3>
          <p className="text-gray-500 mt-2 text-sm">
            Ensuring quality at the speed of code.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center space-x-6">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-pastel-50 p-3 rounded-full hover:bg-pastel-600 transition-all duration-300 border border-pastel-100 hover:border-transparent"
              aria-label="GitHub"
            >
              <Github
                size={20}
                className="text-pastel-600 group-hover:text-white transition-colors"
              />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-pastel-50 p-3 rounded-full hover:bg-pastel-600 transition-all duration-300 border border-pastel-100 hover:border-transparent"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={20}
                className="text-pastel-600 group-hover:text-white transition-colors"
              />
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-pastel-50 p-3 rounded-full hover:bg-pastel-600 transition-all duration-300 border border-pastel-100 hover:border-transparent"
              aria-label="YouTube"
            >
              <Youtube
                size={20}
                className="text-pastel-600 group-hover:text-white transition-colors"
              />
            </a>
          </div>
          <div
            className="group flex items-center gap-2 text-gray-500 hover:text-pastel-600 transition-colors cursor-default"
            aria-label="Email"
          >
            <Mail size={18} />
            <span className="font-medium">{EMAIL}</span>
          </div>
        </div>

        <div className="text-gray-400 text-xs text-center md:text-right">
          <p>
            &copy; {new Date().getFullYear()} FoxAssured. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
