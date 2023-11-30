'use client'

import Image from 'next/image'
import { Themes } from '../categories-config'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function CategoryCard({ name, image, description }: Themes ) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleCategoryClick = () => {
        setSelectedCategory(name === selectedCategory ? null : name);
    }

    return (
        <div className=''>
            <div className='grid items-center justify-center' onClick={handleCategoryClick}>
                <Image 
                    src={image}
                    alt={name}
                    style={{ height: '150px', width: 'auto' }}
                    className='rounded-lg cursor-pointer'
                />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: selectedCategory === name ? 1 : 0, y: selectedCategory === name ? 0 : 20 }}
                transition={{ duration: 0.3 }}
                className='text-center'
            >
                <h3 className='text-2xl text-amber-100 text-bold p-2 underline'>{name}</h3>
                <p className='text-xl'>{description}</p>
            </motion.div>
        </div>
    )
}