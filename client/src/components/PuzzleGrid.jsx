import React from 'react';
import { motion } from 'framer-motion';

const PuzzleGrid = () => {
  const pfpImage = '/pfp.jpg';
  // Define grid positions for diamond shape
  // For a single large image split across tiles we size the background to 300% x 400%
  // and set positions so each tile shows the correct fragment.
  const positions = [
    { row: 0, col: 1, bgPos: '50% 0%' },      // 0 - top center
    { row: 1, col: 0, bgPos: '0% 50%' },      // 1 - middle left
    { row: 1, col: 1, bgPos: '50% 50%' },     // 2 - middle center
    { row: 1, col: 2, bgPos: '100% 50%' },    // 3 - middle right
    { row: 2, col: 0, bgPos: '0% 100%' },     // 4 - lower left
    { row: 2, col: 1, bgPos: '50% 100%' },    // 5 - lower center
    { row: 2, col: 2, bgPos: '100% 100%' },   // 6 - lower right
    { row: 3, col: 0, bgPos: '0% 150%' },     // 7 - bottom left (slightly further down)
    { row: 3, col: 1, bgPos: '50% 150%' },    // 8 - bottom center (slightly further down)
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-xs md:max-w-lg lg:max-w-2xl">
        <motion.div
          className="grid gap-3 md:gap-6 lg:gap-8"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridAutoRows: 'auto',
            transform: 'rotate(45deg)',
            transformOrigin: 'center',
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {positions.map((pos, idx) => (
              <motion.div
                key={idx}
                className="relative overflow-hidden rounded-lg shadow-md md:shadow-lg"
                style={{
                  gridColumn: pos.col + 1,
                  gridRow: pos.row + 1,
                  aspectRatio: '1',
                  justifySelf: pos.col === 1 ? 'center' : 'auto',
                  overflow: 'hidden',
                }}
                variants={itemVariants}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 15,
                }}
              >
                <div className="w-full h-full">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-300"
                    style={{
                      backgroundImage: `url(${pfpImage})`,
                      backgroundPosition: pos.bgPos,
                      backgroundSize: '300% 200%',
                      transform: 'rotate(-45deg) scale(1.02)',
                      transformOrigin: 'center',
                    }}
                  />
                </div>
              </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PuzzleGrid;
