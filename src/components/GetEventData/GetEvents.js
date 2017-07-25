import { ValidateCache } from './ValidateCache';
import { FetchEventData } from './FetchEventData';

const GetEvents = (url, cb) => {

  // Define events as event cache
  let eventsCache = localStorage.getItem('events');
  if (eventsCache) { eventsCache = JSON.parse(eventsCache)};
  const cacheIsValid = ValidateCache();
  console.log('cacheisvalid: ', cacheIsValid)

  const getEventsFromCache = (cache) => {
    console.log('fetch from cache');
    return cb(cache);
  }

  const getEventsFromAPI = (path) => {
    console.log('fetch from API')
    FetchEventData(path)
    .then(data => cb(data))
  }

  cacheIsValid ? getEventsFromCache(eventsCache) : getEventsFromAPI(url);
}

export { GetEvents };


