import axios from 'axios'

const baseUrl = 'http://localhost:3002/persons'

const getAll = () => {
    return axios
        .get(baseUrl)
        .then(response => response.data)
}

const create = (newPerson) => {
    return axios
        .post(baseUrl, newPerson)
        .then(respone => respone.data)
}

const update = (id,updatedPerson) => {
    return axios
        .put(`${baseUrl}/${id}`,updatedPerson)
        .then(respone => respone.data)
}

export default {getAll , create, update}