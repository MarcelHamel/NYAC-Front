import React from 'react';

const EventTicketPriceRange = (props) => {

  // Computes display price range
  let ticketPrices = props.tickets.map((ticket) => {
    return ticket.cost.value / 100;
  })

  let minPrice = Math.min.apply(null, ticketPrices);
  let maxPrice = Math.max.apply(null, ticketPrices);

  let displayPrice = minPrice === maxPrice ? `$${maxPrice}` : `$${minPrice} - $${maxPrice}`;

  if (maxPrice == -Infinity ) {
    return(<div></div>)
  } else {
    return(
      <div>
        <p className="event-ticket-price-range">{displayPrice}</p>
      </div>
    )
  }
}

export default EventTicketPriceRange;
