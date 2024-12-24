// app/routes/index.tsx
import * as fs from 'node:fs';
import React from 'react';
import { createFileRoute, useRouter } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/start';
import { EventCard } from '../components/EventCard';
import MilanSkyline from '../assets/skyline-milano.png';
import { AddEventForm } from '../components/AddEventForm';
import { prisma } from '../utils/prisma';
import { Event } from '@prisma/client';
import { toast, ToastContainer } from 'react-toastify';

export const getEvents = createServerFn().handler(async () => {
  return await prisma.event.findMany();
});

const addEvent = createServerFn({ method: 'POST' })
  .validator((d: Event) => d)
  .handler(async ({ data }) => {
    const newEvent = await prisma.event.create({ data });
    return newEvent;
  });

const removeEvent = createServerFn({ method: 'POST' })
  .validator((d: string) => d)
  .handler(async ({ data }) => {
    return await prisma.event.delete({
      where: {
        id: data,
      },
    });
  });

export const Route = createFileRoute('/')({
  component: Home,
  // loader: async () => await getCount(),
});

function Home() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [events, setEvents] = React.useState<Event[]>([]);
  const handleAddEvent = () => {
    setIsDialogOpen(true);
  };

  React.useEffect(() => {
    const fetchEvents = async () => {
      const data = (await getEvents()) as Event[];
      setEvents(data);
    };
    fetchEvents();
  }, []);

  const handleAddEventSubmit = async (newEvent: Event) => {
    try {
      await addEvent({ data: newEvent });
      setEvents([...events, newEvent]);
      setIsDialogOpen(false);
      toast('✅ Event created successfully');
    } catch (err) {
      toast('❌ Ops.. something went wrong');
    }
  };

  const handleEventDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delte this event?')) {
      try {
        const newEvents = events.filter((event) => event.id !== id);
        setEvents(newEvents);
        await removeEvent({ data: id });
        toast('✅ Event deleted successfully');
      } catch (err) {
        toast('❌ Ops.. something went wrong');
      }
    }
  };

  return (
    <div>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h1
          style={{
            margin: '0',
            color: 'white',
            fontSize: '1.3rem',
            fontFamily: 'cursive',
          }}
        >
          My Community Events
        </h1>
        <button
          style={{
            color: 'white',
            backgroundColor: 'rgba(32,34,38,255)',
            borderRadius: '4px',
            border: '1px solid white',
            boxShadow: 'rgba(255, 255, 255, 50) 1px 1px 2px 0px',
            padding: '4px 12px',
          }}
          onClick={handleAddEvent}
        >
          <span>Add Event</span>
        </button>
      </nav>

      {isDialogOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0,0,0, 0.8)',
          }}
        >
          <dialog
            style={{
              backgroundColor: 'rgba(32,34,38,255)',
              border: 'solid gray',
              borderRadius: '8px',
              width: '80%',
              maxWidth: '600px',
              minWidth: '250px',
              position: 'absolute',
              top: '20%',
            }}
            open={isDialogOpen}
          >
            <AddEventForm
              handleSubmit={handleAddEventSubmit}
              handleClose={() => setIsDialogOpen(false)}
            />
          </dialog>
        </div>
      )}

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '700px',
          }}
        >
          <img
            style={{
              margin: 'auto',
              width: '100%',
            }}
            src={MilanSkyline}
          />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          {events.map((event: Event) => (
            <EventCard
              key={event.id}
              id={event.id}
              communityName={event.communityName}
              eventDate={event.eventDate}
              eventDescription={event.eventDescription}
              eventLink={event.eventLink}
              eventTitle={event.eventTitle}
              handleDelete={handleEventDelete}
            />
          ))}
        </div>
        <ToastContainer theme='dark' autoClose={3000} />
      </div>
    </div>
  );
}
