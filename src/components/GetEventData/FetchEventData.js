// Function used fetch data from Eventbrite.
// NOTE: This is a pure function and not a React component...

import axios from 'axios';

const FetchEventData = (url) => {
  // Return the result of an axios request to the supplied endpoint
  return axios.get(url)
  .then(response => {
    // Then set a new timestamp for the events cache
    window.localStorage.setItem('lastUpdateTime', new Date().getTime());
    // Then return response data.
    return response.data;
  })
  .catch(err => console.log('ERROR: ', err))
}

export { FetchEventData };
