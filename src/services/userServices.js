import axios from 'axios'

const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_URL : process.env.REACT_APP_DEV_URL;
const url = `${baseUrl}api/`

const loginUser = async credentials => {
    const csrftoken = document.cookie.replace(/(?:(?:^|.*;\s*)csrftoken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    const response = await axios.post(`${url}login/`, credentials, {headers: {
        'X-CSRFToken': csrftoken
      }})
    return response.data
}

const logoutUser = async ()  => {
    const response = await axios.post(`${url}logout/`)
    return response.data
}

// No need for the portfolio
const createAccount = async (accountObject) => {
    const response = await axios.post(`${url}register/`, accountObject)
    return response.data
  }
  
  // No need
  const checkUsername = async (username) => {
    const response = await axios.get(`${url}validate_username/${username}`)
    if (response.data.message === "username available") {return true} else {return false}
  }
  
  // No need for the portfolio -- missing details but no need so I let as is for now
  const userDetails = async () => {
    const loggedUserJSON = window.localStorage.getItem('jwtTk')
    const csrftoken = window.localStorage.getItem('csrftoken')
    const response = await axios.get(`${url}user`)
    return response.data
  }
  

const exportedObject = { loginUser, logoutUser, createAccount, checkUsername, userDetails  }

export default exportedObject