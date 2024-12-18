import { prisma } from '../app/utils/prisma';

export const fakeEvents = [
  {
    communityName: 'ReactJS Milano',
    eventDate: new Date(),
    eventDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    eventLink:
      'https://www.meetup.com/react-js-milano/events/304685624/?eventOrigin=group_upcoming_events',
    eventTitle: 'CSS Superpowers with Layers',
  },
  {
    communityName: 'Crafted Software',
    eventDate: new Date(),
    eventDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    eventLink:
      'https://www.meetup.com/react-js-milano/events/304685624/?eventOrigin=group_upcoming_events',
    eventTitle: 'TCP Lightning talks',
  },
  {
    communityName: 'Milano JS',
    eventDate: new Date(),
    eventDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    eventLink:
      'https://www.meetup.com/react-js-milano/events/304685624/?eventOrigin=group_upcoming_events',
    eventTitle: 'Exploring the new javascript types',
  },
];

const seed = async () => {
  const t0 = performance.now();
  console.log('DB Seed started...');

  await prisma.event.deleteMany();
  await prisma.event.createMany({
    data: fakeEvents,
  });

  const t1 = performance.now();
  console.log(`DB Seed finished: ${t1 - t0}ms`);
};

seed();
