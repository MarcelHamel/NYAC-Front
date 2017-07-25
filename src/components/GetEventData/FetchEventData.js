import axios from 'axios';

const FetchEventData = (url) => {
  return axios.get(url)
  .then(response => {
    window.localStorage.setItem('lastUpdateTime', new Date().getTime());
    return response.data;
  })
  .catch(err => console.log('ERROR: ', err))
}

export { FetchEventData };
