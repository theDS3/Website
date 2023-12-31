'use client'

import React from 'react'
import { useSession } from 'next-auth/react';

export default function AdminInfo() {
    const { data: session } = useSession();
  return (
    <div className="grid place-items-center h-screen text-white">
        <div className="shadow-lg p-8 bg-white/30 flex flex-col gap-2 my-6">
            <div>
                Email: <span className='font-bold'>{session?.user?.email}</span>
            </div>
            <button className='bg-red-500 font-bold text-white px-6 py-2 mt-3'>
                Logout
            </button>
        </div>
    </div>
  )
}
 