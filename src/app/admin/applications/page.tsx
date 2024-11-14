'use client';

import { useEffect, useRef, useState } from 'react';
import { useSession } from 'next-auth/react';
import { env } from '@/env/client.mjs';

const fetchOptions = {
  headers: {
    'Content-Type': 'application/json',
    'ds3-secret': env.NEXT_PUBLIC_VALIDATION_SECRET,
  },
};

export default async function Applications() {
  const { data: session } = useSession();

  useEffect(() => {
    const getAllApplications = async () => {
      try {
        const response = await fetch(`/api/admin/apps`, fetchOptions);
        if (response.ok) {
          const applications = await response.json();
          console.log(applications);
        } else {
          throw new Error('Failed to fetch applications');
        }
      } catch (error) {
        console.error(error);
      }
    };
    getAllApplications();
  }, []);

  return (
    <main className='fixed mt-28 px-4'>
      <div className='text-white'>Hacker Applications will be displayed here!</div>
    </main>
  );
}
