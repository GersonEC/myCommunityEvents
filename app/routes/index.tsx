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
  let today = new Date();
  today.setHours(0);
  return await prisma.event.findMany({
    where: {
      eventDate: {
        gte: today,
      },
    },
    orderBy: [
      {
        eventDate: 'asc',
      },
    ],
  });
});

/*const addEvent = createServerFn({ method: 'POST' })
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

const updateEvent = createServerFn({ method: 'POST' })
  .validator((event: Event) => event)
  .handler(async ({ data }) => {
    return await prisma.event.update({
      where: {
        id: data.id,
      },
      data,
    });
  });*/

export const Route = createFileRoute('/')({
  component: Home,
  // loader: async () => await getCount(),
});

function Home() {
  const [isDialogOpen, setIsDialogOpen] = React.useState({
    isOpen: false,
    mode: 'add',
  });
  const [events, setEvents] = React.useState<Event[]>([]);
  const [eventToEdit, setEventToEdit] = React.useState<Event>();
  const handleAddEvent = () => {
    setIsDialogOpen({ isOpen: true, mode: 'add' });
  };

  React.useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = (await getEvents()) as Event[];
        setEvents(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEvents();
  }, []);

  /*const handleAddEventSubmit = async (newEvent: Event) => {
    try {
      await addEvent({ data: newEvent });
      setEvents([...events, newEvent]);
      setIsDialogOpen({ isOpen: false, mode: 'add' });
      toast('✅ Event created successfully');
    } catch (err) {
      toast('❌ Ops.. something went wrong');
    }
  };

  const handleEditEventSubmit = async (event: Event) => {
    try {
      await updateEvent({ data: event });
      const newEvents = [...events];
      const index = newEvents.findIndex((ev) => ev.id === event.id);
      newEvents[index] = event;
      setEvents(newEvents);
      setIsDialogOpen({ isOpen: false, mode: 'add' });
      toast('✅ Event updated successfully');
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
  };*/

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

      {isDialogOpen.isOpen && (
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
            open={isDialogOpen.isOpen}
          >
            {isDialogOpen.mode === 'add' ? (
              <AddEventForm
                mode='add'
                handleAdd={/*handleAddEventSubmit*/ () => {}}
                handleClose={() =>
                  setIsDialogOpen({ isOpen: false, mode: 'add' })
                }
              />
            ) : (
              <AddEventForm
                mode='edit'
                handleEdit={/*handleEditEventSubmit*/ () => {}}
                handleClose={() =>
                  setIsDialogOpen({ isOpen: false, mode: 'add' })
                }
                event={eventToEdit ?? ({} as Event)}
              />
            )}
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
        Ciao
        {/*<div
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
              event={event}
              handleDelete={handleEventDelete}
              handleEdit={() => {
                setIsDialogOpen({ isOpen: true, mode: 'edit' });
                setEventToEdit(event);
              }}
            />
          ))}
        </div>*/}
        <ToastContainer theme='dark' autoClose={3000} />
      </div>
    </div>
  );
}
