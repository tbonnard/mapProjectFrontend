import axios from 'axios'

// const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_URL : process.env.REACT_APP_DEV_URL;
// const url = `${baseUrl}api/property/`

const getMapQueryData = async (parameterData) => {
    const url = `https://nominatim.openstreetmap.org/search.php?q=${parameterData}&polygon_geojson=1&format=jsonv2`
    const response = await axios.get(`${url}` );
    return response.data
}

const exportedObject = { getMapQueryData } 

export default exportedObject

