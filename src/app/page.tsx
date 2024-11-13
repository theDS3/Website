'use client';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent, useRef, useState } from 'react';

import { Button } from '@/components/Button';

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession();

  const email = useRef<string>();
  const password = useRef<string>();
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await signIn('credentials', {
        email: email.current,
        password: password.current,
        redirect: false,
      });

      if (res && res.error) {
        setError('Invalid Login');
        return;
      } else {
        router.push('/volunteer/scan');
      }
    } catch (error) {
      return error;
    }
  };

  // Redirects logged user to scanning page
  if (session) {
    router.push('/volunteer/scan');
  }

  return (
    !session && (
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-[80vh]">
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-white">
              Volunteer Login
            </h1>
            <form
              className="flex flex-col space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="email@eaxample.com"
                  required
                  onChange={(e) => (email.current = e.target.value)}
                  autoComplete="on"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={(e) => (password.current = e.target.value)}
                  autoComplete="on"
                />
              </div>
              <Button
                fontSize="text-xl"
                className="w-fit ms-auto me-auto">
                Login
              </Button>
              {error && (
                <div className="text-center mt-3 mb-[-12px] text-red-600">
                  {error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    )
  );
}
