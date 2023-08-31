import axios from 'axios'

const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_URL : process.env.REACT_APP_DEV_URL;
const url = `${baseUrl}api/querylocation/`
const urldb = `${baseUrl}api/querylocationdb/`
const urlSearchNearbyPosition = `${baseUrl}api/querylocationaround/`

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

const getMapQueryDataAroundCenterAll =  async (itemObject) => {
    // const urlOverpassTurbo = `https://www.overpass-api.de/api/interpreter?${parameterData}`
    const exam = "[out:json](node(51.249,7.148,51.251,7.152);<;);out+body;"
    const urlOverpassTurbo = `https://overpass-api.de/api/interpreter?data=${exam}`
    const response = await axios.post(`${urlOverpassTurbo}`, {data:"(node(51.249,7.148,51.251,7.152);<;);out+meta;"} )

    // const response = await axios.post(`${urlSearchNearbyPosition}`, {itemObject} )
    console.log(response.data)
    return response.data
}

const exportedObject = { getMapQueryData, getMapQueryDataSearchNearLocation, getMapQueryDataDBData, getMapQueryDataAroundCenterAll } 

export default exportedObject

