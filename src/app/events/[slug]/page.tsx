import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import EventPage from '@/components/v2/EventsPage';
import PageShell from '@/components/v2/PageShell';
import { events, getEvent } from '@/utils/events';

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);
  return { title: event ? `${event.title} | DS3` : 'Event | DS3' };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  return (
    <PageShell>
      <main>
        <EventPage event={event} />
      </main>
    </PageShell>
  );
}
