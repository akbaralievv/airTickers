import { useContext } from 'react';

import Card from './Card';
import { FilterContext } from '../../App';

import data from '../../tickets.json';

function Tickets() {
  const { checked } = useContext(FilterContext);

  const filteredTickets = data.tickets.filter((ticket) => {
    if (!checked[0] && ticket.stops === 0) {
      return false;
    }
    if (!checked[1] && ticket.stops === 1) {
      return false;
    }
    if (!checked[2] && ticket.stops === 2) {
      return false;
    }
    if (!checked[3] && ticket.stops === 3) {
      return false;
    }

    return true;
  });

  return (
    <section className="tickets">
      {filteredTickets.length > 0 ? (
        filteredTickets.map((ticket, id) => <Card data={ticket} key={id} />)
      ) : (
        <h2>Билетов нет</h2>
      )}
    </section>
  );
}

export default Tickets;
