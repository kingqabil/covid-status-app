const axios = require('axios');

export const baseurl = 'https://api.covid19api.com/summary';
export const getAllData = () => axios.get(baseurl)
.then(response => {
  return response.data.Countries;
})
.catch(error => {
  console.error('There was an error!', error);
});
