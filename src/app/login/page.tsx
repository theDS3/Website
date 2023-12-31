import React from 'react';
import AdminLogin from '@/components/Admin/AdminLogin';
import { AuthProvider } from '@/components/Providers';

export default function Login() {
  return (
    <>
      <main>
        <AuthProvider>
          <AdminLogin />
        </AuthProvider>
      </main>
    </>
  );
}
