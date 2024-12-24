import { Event } from '@prisma/client';
import { Pencil, Trash } from 'lucide-react';

interface EventProps {
  event: Event;
  handleDelete: (id: string) => void;
  handleEdit: (event: Event) => void;
}

export const EventCard: React.FC<EventProps> = ({
  event,
  handleDelete,
  handleEdit,
}) => {
  return (
    <div
      style={{
        minWidth: '400px',
        maxWidth: '700px',
        width: '95%',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'end',
          paddingRight: '12px',
          marginBottom: '4px',
        }}
      >
        <button
          style={{
            borderRadius: '4px',
            background: 'none',
            border: 'none',
            color: 'gray',
          }}
          onClick={() => handleEdit(event)}
        >
          <Pencil />
        </button>
        <button
          style={{
            borderRadius: '4px',
            background: 'none',
            border: 'none',
            color: 'gray',
          }}
          onClick={() => handleDelete(event.id)}
        >
          <Trash />
        </button>
      </div>
      <div
        style={{
          border: 'solid #582F0E',
          borderRadius: '8px',
          backgroundColor: '#FAEDCD',
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          boxSizing: 'border-box',

          maxHeight: '350px',
          paddingRight: '32px',

          boxShadow: 'rgba(100, 0, 0, 0.24) 0px 3px 8px',
          margin: '0 8px',
        }}
      >
        <div
          style={{
            minWidth: '70px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontSize: '2rem',
            }}
          >
            🗓️
          </span>
        </div>
        <div>
          <h2>
            <a
              style={{ color: '#0E577B' }}
              href={event.eventLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              {event.eventTitle}
            </a>
          </h2>
          <p style={{}}>{event.eventDescription}</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '12px',
            }}
          >
            <p>{event.eventDate.toLocaleDateString('it-IT')}</p>
            <p>{event.communityName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
