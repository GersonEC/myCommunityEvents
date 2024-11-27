// app/routes/index.tsx
import * as fs from 'node:fs';
import { createFileRoute, useRouter } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/start';
import { Event, EventCard } from '../components/EventCard';
import MilanSkyline from '../assets/skyline-milano.png';
import React from 'react';
import { AddEventForm } from '../components/AddEventForm';
import { fakeEvents } from '../utils/fakes';

// const filePath = 'count.txt';

// async function readCount() {
//   return parseInt(
//     await fs.promises.readFile(filePath, 'utf-8').catch(() => '0')
//   );
// }

// const getCount = createServerFn({
//   method: 'GET',
// }).handler(() => {
//   return readCount();
// });

// const updateCount = createServerFn({ method: 'POST' })
//   .validator((d: number) => d)
//   .handler(async ({ data }) => {
//     const count = await readCount();
//     await fs.promises.writeFile(filePath, `${count + data}`);
//   });

export const Route = createFileRoute('/')({
  component: Home,
  // loader: async () => await getCount(),
});

function Home() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [events, setEvents] = React.useState<Event[]>(() => fakeEvents);
  const handleAddEvent = () => {
    setIsDialogOpen(true);
  };

  const handleAddEventSubmit = (newEvent: Event) => {
    console.log({ newEvent });
    setEvents([...events, newEvent]);
    setIsDialogOpen(false);
  };

  return (
    <div>
      <nav>
        <button onClick={handleAddEvent}>Add Event</button>
      </nav>

      <dialog open={isDialogOpen}>
        <AddEventForm handleSubmit={handleAddEventSubmit} />
      </dialog>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img style={{ margin: 'auto', width: '700px' }} src={MilanSkyline} />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '50px',
            maxWidth: '700px',
            border: 'solid red',
            listStyle: 'none',
          }}
        >
          {events.map((event: Event, index: number) => (
            <li key={index}>
              <EventCard
                communityName={event.communityName}
                eventDate={event.eventDate}
                eventDescription={event.eventDescription}
                eventLink={event.eventLink}
                eventTitle={event.eventTitle}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
