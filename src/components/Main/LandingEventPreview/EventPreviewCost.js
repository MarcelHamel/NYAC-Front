import React from 'react';

const EventPreviewCost = (props) => {
  let prices = props.tickets.map((ticket) => {
    return !(ticket.free) ? Math.floor(ticket.cost.value/100) : 0;
  });
  let lowestPrice = Math.min.apply(null, prices);
  let displayPrice = lowestPrice === 0 ? 'FREE' : `$${lowestPrice}`;
  displayPrice = prices.length > 1 ? `${displayPrice}+` : displayPrice;
  return(
    <div className="event-preview-cost">
      {displayPrice}
    </div>
  )
}

export default EventPreviewCost
