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
    const exam = `[out:json][timeout:25];(rel[amenities="All"](around:500,${itemObject['lat']},${itemObject['lng']}););(._;>;);out;`
    const eee = `[out:json];(node["amenity"](around:2000,${itemObject['lat']},${itemObject['lng']});way["amenity"](around:2000,${itemObject['lat']},${itemObject['lng']});relation["amenity"](around:2000,${itemObject['lat']},${itemObject['lng']}););out;>;`
    const eeenwr = `[out:json];(nwr["amenity"](around:100,${itemObject['lat']},${itemObject['lng']}););out;>;`
    // const eeenwralltag = `[out:json];(nwr(around:200,${itemObject['lat']},${itemObject['lng']})[~"."~"."];);out;>;`
    const urlOverpassTurbo = `https://overpass-api.de/api/interpreter?data=${eeenwr}`
    const response = await axios.get(`${urlOverpassTurbo}` )

    // const response = await axios.post(`${urlSearchNearbyPosition}`, {itemObject} )
    return response.data
}

const getItemsIdsToOSM =  async (itemObject) => { 
    // console.log(itemObject)
    const url = `https://nominatim.openstreetmap.org/lookup?osm_ids=${itemObject}&polygon_geojson=1&format=jsonv2`
    const response = await axios.get(`${url}` )
    // console.log(response.data)
    if (response.status !== 200) {
        return false
    }
    return response.data
}


const exportedObject = { getItemsIdsToOSM, getMapQueryData, getMapQueryDataSearchNearLocation, getMapQueryDataDBData, getMapQueryDataAroundCenterAll } 

export default exportedObject

