import axios from "axios"


export const read = async ({capital}) => {

    const promise = await axios({
        method: 'GET',
        url: `${capital}`,
        baseURL: 'http://api.weatherapi.com/v1/current.json?key=8a88406f21734422b8504112210507&q='
    })
    return promise.data
}