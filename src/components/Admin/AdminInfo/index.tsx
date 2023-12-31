'use client';

import React, { useEffect } from 'react';
import { useSession, getSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function AdminInfo() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    // to check if admin is logged in or not
    const checkLoggedInStatus = async () => {
      // obtain session data
      const userSession = await getSession();

      // check if admin is not logged in
      if (!userSession) {
        // redirect to datathon page to prevent access to admin page
        router.push('/datathon');
      }
    };

    checkLoggedInStatus();
  }, [session, router]);

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/datathon' });
  };

  return (
    <div className="grid place-items-center h-screen text-white">
      <div className="shadow-lg p-8 bg-white/30 flex flex-col gap-2 my-6">
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 font-bold text-white px-6 py-2 mt-3">
          Logout
        </button>
      </div>
    </div>
  );
}
