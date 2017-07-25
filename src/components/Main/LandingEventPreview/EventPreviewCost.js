// This component displays the event cost within the preview card banner.

// You might notice some curious logic for this and that's based on the fact that the
// ticket objects returned by Eventbrite are frustratingly inconsistent in their formatting
// as entire fields disappear if a ticket class is "FREE"- represented by a boolean property in
// the ticket object.

// If "FREE" is true then there are no cost fields, which returns an error. For some reason we
// discovered events returning multple ticket objects, some of which were "FREE" and some weren't.
// The seemingly redundant logic in this component is designed to prevent errors there.

import React from 'react';
import ticket_icon_white from '../../../images/ticket_icon_white.png'

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

  // Set the display price. Calling Math.min on an empty array returns "Infinity".
  // An empty array should signify a free event.
  let displayPrice = ( lowestPrice !== Infinity ) ? `$${lowestPrice}` : 'FREE';
  // Is there more than one ticket class? If so add a plus sign to the end of the display price.
  displayPrice = prices.length > 1 ? `${displayPrice}+` : displayPrice;

  // NYAC is forbidden from charging for events at public facilities, but often charges a deposit
  // which is later fully refunded in order to ensure attendance. This conditional scans for part of
  // the disclaimer posted at the top of these events and if it appears we display a ticket icon instead
  // of a price tag.

  if (props.description.includes('fully refunded upon attendance')) {
    displayPrice = <img src={ticket_icon_white} className='deposit-only-ticket' />
  }

  return(
    <div className="event-preview-cost">
      {displayPrice}
    </div>
  )
}

export default EventPreviewCost
