// This is cache validation script we use.

import { ValidateCache } from './ValidateCache';
import { FetchEventData } from './FetchEventData';

const GetEvents = (url, cb) => {

  // Define events as event cache
  let eventsCache = localStorage.getItem('events');
  // If the cache exsits, parse it!
  if (eventsCache) { eventsCache = JSON.parse(eventsCache)}
  // ValidateCache checks timestamp of cache.
  const cacheIsValid = ValidateCache();

  // Return the event cache after processed via the callback function provided
  const getEventsFromCache = (cache) => {
    return cb(cache);
  }

  // Gets Eventbrite data and returns processed results
  const getEventsFromAPI = (path) => {
    FetchEventData(path)
    .then(data => cb(data))
  }

  // If the cache is valid, use the cache. Else, fetch from Eventbrite.
  cacheIsValid ? getEventsFromCache(eventsCache) : getEventsFromAPI(url);
}

export { GetEvents };


