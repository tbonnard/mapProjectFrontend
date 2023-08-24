import axios from 'axios'

const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_URL : process.env.REACT_APP_DEV_URL;
const url = `${baseUrl}api/choice/`

const getChoices = async () => {
  const response = await axios.get(`${url}`);
  return response.data
}

const exportedObject = { getChoices } 

export default exportedObject

