import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/variants';

export default function AnimatedSection({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
