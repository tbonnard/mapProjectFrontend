import axios from 'axios'

const getMapQueryData = async (parameterData) => {
    axios.defaults.withCredentials = false;
    const url = `https://nominatim.openstreetmap.org/search.php?q=${parameterData}&polygon_geojson=1&format=jsonv2`
    const response = await axios.get(`${url}`)
    return response.data
}

const exportedObject = { getMapQueryData } 

export default exportedObject

