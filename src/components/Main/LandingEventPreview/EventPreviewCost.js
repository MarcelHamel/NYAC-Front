import React from 'react';

const EventPreviewCost = (props) => {

  // Assign prices to an array of ticket values. 'FREE' produces a value of zero.
  let prices = props.tickets.map((ticket) => {
    return !(ticket.free) ? Math.floor(ticket.cost.value/100) : 0;
  });

  // Filter out free tickets
  const allTicketsHavePrice = prices.filter((ticketPrice) => {
    return ticketPrice > 0;
  })

  // Find lowest value
  let lowestPrice;
  if (allTicketsHavePrice) {
    lowestPrice = Math.min.apply(null, allTicketsHavePrice);
  }

  let displayPrice = ( lowestPrice !== Infinity ) ? `$${lowestPrice}` : 'FREE';
  displayPrice = prices.length > 1 ? `${displayPrice}+` : displayPrice;
  return(
    <div className="event-preview-cost">
      {displayPrice}
    </div>
  )
}

export default EventPreviewCost
