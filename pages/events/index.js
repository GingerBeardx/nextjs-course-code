import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';

export default function AllEvents() {
  const events = getAllEvents();

  return (
    <main>
      <EventList items={events} />
    </main>
  );
}
