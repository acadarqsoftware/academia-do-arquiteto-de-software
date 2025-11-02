import React, { useEffect, useState } from 'react';
import './InfoEvents.css';
import EventCardItem from './outsideCard/EventCardItem.jsx';

function EventCard() {
  const [events, setEvents] = useState([]);

  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    fetch(`${baseUrl}/assets/eventos/eventos.json`)
      .then((response) => response.json())
      .then((date) => {
        const eventsOrder = [...date].sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
        setEvents(eventsOrder);
      })
      .catch((error) => console.error('erro ao buscar eventos: ', error));
  }, []);

  return (
    <div className="container-fluid px-5 mt-5 maintitle-event-card">
      <h2 className="text-center fw-bold mb-4">Eventos</h2>

      <div className="row">
        {events.map((event, index) => (
          <EventCardItem
            key={index}
            event={event}
            showPalestraInfo={index === 0} // Só no primeiro card
          />
        ))}
      </div>
    </div>
  );
}


export default EventCard;
