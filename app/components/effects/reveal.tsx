"use client";

import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
