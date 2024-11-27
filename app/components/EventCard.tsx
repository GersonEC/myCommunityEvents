export interface Event {
  communityName: string;
  eventDate: Date;
  eventDescription: string;
  eventLink: string;
  eventTitle: string;
}

export const EventCard: React.FC<Event> = ({
  communityName,
  eventDate,
  eventDescription,
  eventLink,
  eventTitle,
}) => {
  return (
    <div
      style={{
        border: 'solid gray',
        borderRadius: '8px',
        backgroundColor: '#F0F0F0',
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        padding: '0 8px',
        maxWidth: '700px',
        maxHeight: '200px',
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
          <a href={eventLink} target='_blank'>
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
