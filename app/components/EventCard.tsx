import { Event } from '@prisma/client';
import { LucideKanban, Pencil, Trash } from 'lucide-react';

type EventProps = Omit<Event, 'createdAt' | 'updatedAt'> & {
  handleDelete: (id: string) => void;
};

export const EventCard: React.FC<EventProps> = ({
  id,
  communityName,
  eventDate,
  eventDescription,
  eventLink,
  eventTitle,
  handleDelete,
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
          onClick={() => alert('edit')}
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
          onClick={() => handleDelete(id)}
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
              href={eventLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              {eventTitle}
            </a>
          </h2>
          <p style={{}}>{eventDescription}</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '12px',
            }}
          >
            <p>{eventDate.toLocaleDateString('it-IT')}</p>
            <p>{communityName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
