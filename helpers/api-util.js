export async function getAllEvents() {

  const res = await fetch('https://nextjs-course-cdb64-default-rtdb.firebaseio.com/events.json');
  const data = await res.json();
  const events = [];
  for(const key in data){
    events.push({
      id: key,
      ...data[key]
    })
  }
  return events;
}
export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}