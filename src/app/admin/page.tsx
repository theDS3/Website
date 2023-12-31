import AdminInfo from '@/components/Admin/AdminInfo';
import { AuthProvider } from '../../components/Providers';

export default function AdminView() {
  return (
    <>
      <AuthProvider>
        <AdminInfo />;
      </AuthProvider>
    </>
  );
}
