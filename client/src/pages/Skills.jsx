import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import SkillsCarousel from '../components/SkillsCarousel';

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'JSX', 'Figma'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Java', 'Database Design', 'REST APIs'],
  },
  {
    category: 'Tools & Others',
    skills: ['Git', 'GitHub', 'Canva', 'Microsoft 365', 'Adobe Photoshop'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Skills() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="pt-24 pb-12 px-6 md:px-12 lg:px-24">

      {/* HEADER */}
      <AnimatedSection>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-black dark:text-white">
          My Skills
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-5xl mx-auto">
          I specialize in building responsive web applications with modern technologies and best practices.
        </p>
      </AnimatedSection>

      {/* CAROUSEL */}
      <AnimatedSection>
        <SkillsCarousel />
      </AnimatedSection>

      {/* SKILLS GRID */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-16 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skillCategories.map((category, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <div className="pl-6 py-6 border-r border-b md:border-b-0 border-primary/20 h-full flex flex-col">
              <h3 className="text-xl font-bold uppercase tracking-widest text-black dark:text-primary mb-6">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    className="px-3 py-1 border border-primary/30 rounded-full text-xs text-black dark:text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ================= CERTIFICATIONS ================= */}
      <AnimatedSection>
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-12">
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            
            {/* CERT 1 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer rounded-xl shadow-lg border border-primary/20 overflow-hidden bg-white dark:bg-gray-900 p-4"
              onClick={() => setSelectedImage('/fccRWD.png')}
            >
              <img
                src="/fccRWD.png"
                alt="Certification RWD"
                className="w-full h-auto object-contain rounded-lg"
              />
            </motion.div>

            {/* CERT 2 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer rounded-xl shadow-lg border border-primary/20 overflow-hidden bg-white dark:bg-gray-900 p-4"
              onClick={() => setSelectedImage('/fccJS.png')}
            >
              <img
                src="/fccJS.png"
                alt="Certification JS"
                className="w-full h-auto object-contain rounded-lg"
              />
            </motion.div>

          </div>
        </div>
      </AnimatedSection>

      {/* FULLSCREEN MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Certificate Preview"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}