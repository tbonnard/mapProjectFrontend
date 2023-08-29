import axios from 'axios'

const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_URL : process.env.REACT_APP_DEV_URL;
const url = `${baseUrl}api/vote/`
//when too many projects per property, need to check per project instead of per property
const urlAllProject = `${baseUrl}api/votesproject/`
const urlAllProperty = `${baseUrl}api/votesproperty/`
const urlUser = `${baseUrl}api/voteuser/`


const checkVotes = async (objectId) => {
  const response = await axios.get(`${urlAllProperty}${objectId}`);
  return response.data
}


const checkUserVotes = async (itemObject) => {
  axios.defaults.withCredentials = true;
  const userToken = document.cookie.replace(/(?:(?:^|.*;\s*)jwtTk\s*=\s*([^;]*).*$)|^.*$/, '$1');
  const csrftoken = document.cookie.replace(/(?:(?:^|.*;\s*)csrftoken\s*=\s*([^;]*).*$)|^.*$/, '$1');

  const response = await axios.post(`${urlUser}`, itemObject,
  {
    headers: {
      Authorization: `Bearer ${userToken}`,
      'X-CSRFToken': csrftoken,
      'Content-Type': 'application/json',
    }} );
  return response.data
}


const removeVote = async (itemObject) => {
  axios.defaults.withCredentials = true;
  const userToken = document.cookie.replace(/(?:(?:^|.*;\s*)jwtTk\s*=\s*([^;]*).*$)|^.*$/, '$1');
  const csrftoken = document.cookie.replace(/(?:(?:^|.*;\s*)csrftoken\s*=\s*([^;]*).*$)|^.*$/, '$1');

  const response = await axios.delete(`${url}${itemObject}`,
  {
    headers: {
      Authorization: `Bearer ${userToken}`,
      'X-CSRFToken': csrftoken,
      'Content-Type': 'application/json',
    }} );
  return response.data
}

const addVote = async (itemObject) => {
  axios.defaults.withCredentials = true;
  const userToken = document.cookie.replace(/(?:(?:^|.*;\s*)jwtTk\s*=\s*([^;]*).*$)|^.*$/, '$1');
  const csrftoken = document.cookie.replace(/(?:(?:^|.*;\s*)csrftoken\s*=\s*([^;]*).*$)|^.*$/, '$1');

  const response = await axios.post(`${url}`, itemObject,
  {
    headers: {
      Authorization: `Bearer ${userToken}`,
      'X-CSRFToken': csrftoken,
      'Content-Type': 'application/json',
    }} );
  return response.data
}


const exportedObject = { checkVotes,checkUserVotes, removeVote, addVote } 

export default exportedObject

