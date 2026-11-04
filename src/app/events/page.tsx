import BlobTitle from '@/components/v2/BlobTitle';
import EventsFilter from '@/components/v2/EventsFilter';
import PageShell from '@/components/v2/PageShell';
import { brand } from '@/utils/brand';

export const metadata = { title: 'Events | DS3' };

export default async function EventsPage({
  searchParams,
}: {
  searchParams: Promise<{ show?: string }>;
}) {
  const { show } = await searchParams;
  const initial = show === 'past' ? 'past' : 'current';

  return (
    <PageShell>
      <main className="flex min-h-screen flex-col items-center px-6 pb-24 pt-32 text-center">
        <BlobTitle color={brand.purple}>Events</BlobTitle>

        {/* key remounts the filter when the nav link changes the URL while you're already on /events */}
        <EventsFilter
          key={initial}
          initial={initial}
        />

        <p className="mt-16 max-w-xl text-lg text-white/70">
          Workshops, bootcamps and hackathons from DS3.
        </p>
      </main>
    </PageShell>
  );
}
