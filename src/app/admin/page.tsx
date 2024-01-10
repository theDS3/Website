import AuthProvider from '@/components/AuthProvider';

export default function AdminPage() {
  return (
    <AuthProvider>
      <main>
        <p>Hello Admin</p>
      </main>
    </AuthProvider>
  );
}
