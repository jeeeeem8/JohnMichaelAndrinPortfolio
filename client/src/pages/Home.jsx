import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

export default function Home() {
  const base = import.meta.env.BASE_URL;
  const imageUrl = `${base}pfp.jpg`;
  const cvFile = `${base}cvJohnMichaelG.Andrin.pdf`;

  return (
    <section className="relative pt-28 pb-16 px-6 md:px-12 lg:px-24 text-center overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,_#10b981_10%25,_transparent_70%25)]" />

      <AnimatedSection>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          
          {/* LEFT CONTENT */}
          <div className="flex-1 text-left">
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-black dark:text-white">
              Hi, I'm John Michael G. Andrin
            </h1>

            <h2 className="mt-4 text-xl md:text-2xl font-semibold text-primary">
              Front-End Developer
            </h2>

            <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
              I craft modern, responsive, and high-performance web interfaces 
              using React, Tailwind CSS, and clean UI/UX principles.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                to="/skills"
                className="px-8 py-3 bg-primary text-white rounded-full shadow-lg transition-all duration-300"
              >
                View Skills
              </Link>

              <Link
                to="/contact"
                className="px-8 py-3 border-2 border-primary text-primary rounded-full shadow-lg transition-all duration-300"
              >
                Contact Me
              </Link>
              <a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-primary text-primary rounded-full shadow-lg transition-all duration-300"
              >
                View CV
              </a>
            </div>
          </div>

          {/* RIGHT DIAMOND GRID */}
          <div className="mt-16   w-full md:w-[420px] lg:w-[480px] aspect-square flex items-center justify-center">
            
            {/* Rotated Container */}
            <div className="rotate-45 w-[85%] h-[85%]">
              
              <div className="grid grid-cols-3 grid-rows-3 gap-1 w-full h-full">
                
                {[...Array(9)].map((_, index) => {
                  const row = Math.floor(index / 3);
                  const col = index % 3;

                  return (
                    <div
                      key={index}
                      className="overflow-hidden"
                      style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundSize: "300% 300%",
                        backgroundPosition: `${col * 50}% ${row * 50}%`,
                      }}
                    />
                  );
                })}

              </div>
            </div>
          </div>

        </div>
      </AnimatedSection>
    </section>
  );
}