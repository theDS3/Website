'use client'

import Image from 'next/image'
import { Themes } from '../categories-config'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function CategoryCard({ name, image, description }: Themes) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleCategoryClick = () => {
        setSelectedCategory(name === selectedCategory ? null : name);
    }

    return (
        <div className='w-48 mx-10 pt-4'>
            <motion.div
                className='grid items-center justify-center text-center'
                onClick={handleCategoryClick}
                whileHover={{ scale: 1.05 }}
            >
                <Image
                    src={image}
                    alt={name}
                    width={200}
                    height={200}
                    className='rounded-lg cursor-pointer'
                />
                <h3 className='text-2xl text-white font-bold'>{name}</h3>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: selectedCategory === name ? 1 : 0, y: selectedCategory === name ? 0 : 20 }}
                transition={{ duration: 0.3 }}
                className='text-center relative'
            >
                {selectedCategory === name && (
                    <div className='w-28 h-1 bg-amber-100 mx-auto mt-2 mb-2 rounded-full'></div>
                )}

                <p className='text-xl pt-2'>{description}</p>
            </motion.div>
        </div>
    )
}
