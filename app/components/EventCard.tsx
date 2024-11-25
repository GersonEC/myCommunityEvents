export const EventCard = () => {
  return (
    <div
      style={{
        border: 'solid gray',
        borderRadius: '8px',
        backgroundColor: '#F0F0F0',
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '0 8px',
      }}
    >
      <div
        style={{ minWidth: '100px', display: 'flex', justifyContent: 'center' }}
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
          <a
            href='https://www.meetup.com/react-js-milano/events/304685624/?eventOrigin=group_upcoming_events'
            target='_blank'
          >
            CSS Superpowers with Layers
          </a>
        </h2>
        <p style={{ textWrap: 'balance' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <p>Giovedi 05 Dic 2024</p>
          <p>ReactJS Milano meetup</p>
        </div>
      </div>
    </div>
  );
};
