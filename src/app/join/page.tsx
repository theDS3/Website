import BlobTitle from '@/components/v2/BlobTitle';
import JoinForm from '@/components/v2/JoinForm';
import PageShell from '@/components/v2/PageShell';
import { brand } from '@/utils/brand';

export const metadata = { title: 'Join | DS3' };

export default function JoinPage() {
  return (
    <PageShell>
      <main className="flex min-h-screen flex-col items-center px-6 pb-24 pt-32 text-center">
        <BlobTitle color={brand.green}>Join us</BlobTitle>

        <p className="mt-10 max-w-xl text-lg text-white/70">
          Thanks for your interest in the Data Science and Statistics Society!
          We run events all year on data science and statistics. Join the
          mailing list for the latest updates.
        </p>

        <JoinForm />
      </main>
    </PageShell>
  );
}
