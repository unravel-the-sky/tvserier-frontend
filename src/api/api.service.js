import axios from 'axios'

const backendUrl = 'http://localhost:5000'
const getAllProductsUrl = `${backendUrl}/api/shows`

const handleResponse = (res) => {
    // const result = {
    //     error: false,
    //     status: res.status,
    //     statusText: res.statusText,
    //     data: res.data
    // }
    console.log('whoaa: ', res)
    return res
}

const handleError = (err, methodName) => {
    console.error(`error on ${methodName}: ${err}`)
    // const error = {
    //     error: true,
    //     status: err.response.status,
    //     statusText: err.response.statusText,
    //     data: err.response.data
    // }
    return err
}

export default {
    getAllProducts() {
        console.log('url: ', getAllProductsUrl)
        return axios.get(getAllProductsUrl)
            .then(res => handleResponse(res))
            .catch(err => handleError(err, 'getAllProducts'))
    }
}