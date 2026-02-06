import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export const BentoItem = ({ className, children, span = "" }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 }
            }}
            className={`
        ${span}
        ${className}
      `}
        >
            <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={1000}
                className="glass p-8 rounded-3xl h-full w-full flex flex-col justify-center shadow-lg hover:shadow-2xl border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group"
            >
                {children}
            </Tilt>
        </motion.div>
    );
};
