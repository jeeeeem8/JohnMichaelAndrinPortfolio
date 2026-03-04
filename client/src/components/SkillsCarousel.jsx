import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    name: 'HTML5',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Express',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  },
  {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  },
  {
    name: 'Java',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  },
  {
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Figma',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
  },
];

export default function SkillsCarousel() {
  // Duplicate the skills array for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="mb-16">
      <div className="relative bg-gradient-to-r from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-lg overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: [-2000, 0] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {duplicatedSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 w-24 h-24 flex items-center justify-center"
              whileHover={{ scale: 1.15, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="relative group">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-20 h-20 object-contain filter dark:invert opacity-80 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap pointer-events-none">
                  {skill.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent dark:from-gray-900 dark:to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-100 to-transparent dark:from-gray-800 dark:to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  );
}
