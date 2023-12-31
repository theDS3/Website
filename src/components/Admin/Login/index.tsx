'use client'

import React, { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
export default function Login() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router  = useRouter();

  const handleLoginButtonClick = () => {
    setShowLoginPopup(true);
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await signIn('credentials', {
        email: email,
        password: password,
        redirect: false,
      });

      if (res && res.error) {
        setError("Invalid Login");
        return;
      }

      router.replace("/datathon")
      router.push("/admin")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <button
          onClick={handleLoginButtonClick}
          className="w-max mt-6 mr-auto bg-[#50D634] py-2 border-none font-normal"
        >
          Admin Login
        </button>
      </div>

      {showLoginPopup && (
        <div className="z-[1999] login-popup fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email:
                </label>
                <input
                  onChange={e => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password:
                </label>
                <input
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeLoginPopup}
                  className="mr-2 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-[#50D634] hover:bg-[#3B9724] text-white py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            {error && (
              <div className="text-center mt-3 mb-[-12px] text-red-600">
                {error}
              </div>
            )}

            </form>
          </div>
        </div>
      )}
    </>
  );
};
