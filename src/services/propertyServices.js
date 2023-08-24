import axios from 'axios'

const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_URL : process.env.REACT_APP_DEV_URL;
const url = `${baseUrl}api/property/`

const propertyCreation = async (itemObject) => {
  const response = await axios.post(`${url}`, itemObject  );
  localStorage.setItem('propertyProjectApp', JSON.stringify(response.data));
  return response.data
}

const exportedObject = { propertyCreation } 

export default exportedObject

