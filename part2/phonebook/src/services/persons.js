import axios from 'axios'

const baseUrl = 'https://arcane-cove-57668.herokuapp.com/api/persons'

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

const remove = (id) => {
    return axios
        .delete(`${baseUrl}/${id}`)
        .then(response => response.data)
}

export default {getAll , create, update, remove}