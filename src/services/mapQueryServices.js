import axios from 'axios'

const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_URL : process.env.REACT_APP_DEV_URL;
const url = `${baseUrl}api/querylocation/`
const urldb = `${baseUrl}api/querylocationdb/`

const getMapQueryData = async (parameterData) => {
    axios.defaults.withCredentials = false;
    const urlOSM = `https://nominatim.openstreetmap.org/search.php?q=${parameterData}&polygon_geojson=1&format=jsonv2`
    const response = await axios.get(`${urlOSM}`)
    return response.data
}

const getMapQueryDataSearchNearLocation = async (itemObject) => {
    const response = await axios.post(`${url}`, {itemObject})
    return response.data
}

const getMapQueryDataDBData = async (itemObject) => {
    const response = await axios.post(`${urldb}`, {itemObject})
    return response.data
}

const getMapQueryDataOverpassTurbo =  async (data) => {
    axios.defaults.withCredentials = false;
    // const urlOverpassTurbo = `https://www.overpass-api.de/api/interpreter?${parameterData}`
    const urlOverpassTurbo = `https://www.overpass-api.de/api/interpreter?`
    const response = await axios.post(`${urlOverpassTurbo}`, {body:data})
    return response.data
}


const exportedObject = { getMapQueryData, getMapQueryDataSearchNearLocation, getMapQueryDataDBData, getMapQueryDataOverpassTurbo } 

export default exportedObject

