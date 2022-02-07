import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from "axios";

export const baseurl = 'https://api.covid19api.com/summary';
export const getAllData = () => axios.get(baseurl)
.then(response => {
  return response.data.Countries;
})
.catch(error => {
  console.error('There was an error!', error);
});

export const fetchCountryInfo = () => async (dispatch) => {
  const response = await axios.get(baseurl);
  dispatch({
    type: 'updateCountryData',
    payload: response.data.Countries,
  });
};