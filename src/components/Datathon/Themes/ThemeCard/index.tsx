'use client';

import { motion } from 'framer-motion';
import Image, { type StaticImageData } from 'next/image';
import { useState } from 'react';

export interface Theme {
  name: string;
  image: StaticImageData;
  description: string;
}
export default function ThemeCard({ name, image, description }: Theme) {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  const handleThemeClick = () => {
    setSelectedTheme(name === selectedTheme ? null : name);
  };

  return (
    <div className="w-48 mx-10 pt-4">
      <motion.div
        className="grid items-center justify-center text-center"
        onClick={handleThemeClick}
        whileHover={{ scale: 1.05 }}>
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="rounded-lg"
        />
        <h3 className="text-2xl text-white font-bold">{name}</h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: selectedTheme === name ? 1 : 0,
          y: selectedTheme === name ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
        className="text-center relative">
        <div className="w-28 h-1 bg-amber-100 mx-auto mt-2 mb-2 rounded-full"></div>
        <div className="flex flex-col justify-center items-center pt-4 h-56">
          <p className="text-lg pt-2">{description}</p>
        </div>
      </motion.div>
    </div>
  );
}
