import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageFade } from '../animations/variants';

export default function NotFound() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen text-center px-6"
      variants={pageFade}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <h1 className="text-6xl font-bold mb-4 text-black dark:text-white">404</h1>
      <p className="mb-6 text-black dark:text-gray-300">Sorry, the page you&apos;re looking for does not exist.</p>
      <Link to="/" className="px-6 py-3 bg-primary text-white rounded-full">
        Go Home
      </Link>
    </motion.div>
  );
}
