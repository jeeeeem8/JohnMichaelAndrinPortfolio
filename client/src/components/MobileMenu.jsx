import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function MobileMenu({ open, onClose, links }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />
          <motion.div
            key="menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-full max-w-xs h-full bg-white dark:bg-gray-900 z-50 p-6 flex flex-col"
          >
            <button onClick={onClose} className="self-end p-2 mb-8 text-black dark:text-white">
              <X size={24} />
            </button>
            <nav className="flex flex-col space-y-6">
              {links.map(link => (
                <a
                  key={link.name}
                  href={link.to}
                  onClick={onClose}
                  className="text-lg font-medium text-black dark:text-white"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
