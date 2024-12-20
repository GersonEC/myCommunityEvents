import { Event } from '@prisma/client';

type EventProps = Omit<Event, 'createdAt' | 'updatedAt'>;

export const EventCard: React.FC<EventProps> = ({
  id,
  communityName,
  eventDate,
  eventDescription,
  eventLink,
  eventTitle,
}) => {
  return (
    <div
      style={{
        border: 'solid #582F0E',
        borderRadius: '8px',
        backgroundColor: '#FAEDCD',
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        padding: '0 8px',
        minWidth: '400px',
        maxWidth: '700px',
        width: '90%',
        maxHeight: '350px',
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
        <p style={{ textWrap: 'balance' }}>{eventDescription}</p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <p>{eventDate.toLocaleDateString('it-IT')}</p>
          <p>{communityName}</p>
        </div>
      </div>
    </div>
  );
};
