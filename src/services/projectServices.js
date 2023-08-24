import axios from 'axios'

const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_URL : process.env.REACT_APP_DEV_URL;
const urlCreate = `${baseUrl}api/project/`
const url = `${baseUrl}api/projects/`


const getProjectsfromProperty = async (itemObject) => {
  const response = await axios.get(`${url}${itemObject.uuid}` );
  return response.data
}

const createProject = async (itemObject) => {
    const response = await axios.post(`${urlCreate}`, itemObject );
    return response.data
    
}

const exportedObject = { getProjectsfromProperty, createProject } 

export default exportedObject

