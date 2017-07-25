// This displays the price range in the Single Event view.
import React from 'react';

const EventTicketPriceRange = (props) => {

  // Computes display price range
  let ticketPrices = props.tickets.map((ticket) => {
    // If the ticket has a 'cost' property, return the dollar value of ticket (no cents)
    // Else display zero. 'FREE' tickets have no cost property....
    return ticket.cost ? ticket.cost.value / 100 : 0;
  })

  // Filter out free tickets!
  ticketPrices = ticketPrices.filter((price) => {
    return price !== 0;
  })

  // Find minimum and maximum ticket values
  let minPrice = Math.min.apply(null, ticketPrices);
  let maxPrice = Math.max.apply(null, ticketPrices);

  // If min and max are the same, display only one value. If different, display a range.
  let displayPrice = minPrice === maxPrice ? `$${maxPrice}` : `$${minPrice} - $${maxPrice}`;

  // If the array is empty then don't display a price.
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
