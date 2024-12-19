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
        maxHeight: '200px',
        boxShadow: 'rgba(100, 0, 0, 0.24) 0px 3px 8px',
      }}
    >
      <div
        style={{
          minWidth: '100px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontSize: '3rem',
          }}
        >
          🗓️
        </span>
      </div>
      <div>
        <h2>
          <a style={{ color: '#582F0E' }} href={eventLink} target='_blank'>
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
