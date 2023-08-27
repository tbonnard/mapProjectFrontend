import axios from 'axios'

const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_URL : process.env.REACT_APP_DEV_URL;
const url = `${baseUrl}api/querylocation/`

const getMapQueryData = async (parameterData) => {
    axios.defaults.withCredentials = false;
    const urlOSM = `https://nominatim.openstreetmap.org/search.php?q=${parameterData}&polygon_geojson=1&format=jsonv2`
    const response = await axios.get(`${urlOSM}`)
    return response.data
}

const getMapQueryDataUserLocation = async (itemObject) => {
    const response = await axios.post(`${url}`, {itemObject})
    return response.data
}

const exportedObject = { getMapQueryData, getMapQueryDataUserLocation } 

export default exportedObject

