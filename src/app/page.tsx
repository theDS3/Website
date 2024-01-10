import AuthProvider from '@/components/AuthProvider';
import Login from '@/components/Login';

export default function LoginPage() {
  return (
    <AuthProvider>
      <main>
        <Login />
      </main>
    </AuthProvider>
  );
}
