import { viewUpdate } from "./viewManager"

const url = "https://localhost:7167/palavra"
 
export const addNewWord = (obj) => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(date => console.log(date))
    .catch(error => console.log(error))
}

export const findById = (id) => {
    const urlWithId = url + `/${id}` 
    fetch(urlWithId, {
        method: 'GET'
    })
    .then(resp => resp.json())
    .then(date => date)
    .catch(error => console.log(error))
} 

export const findByWord = (word) => {
    const urlWithId = url + `/search?word=${word}`
    fetch(urlWithId, {
        method: 'GET'
    })
    .then(resp => resp.json())
    .then(date => date)
    .catch(error => console.log(error))
} 

export const getSome = () => {
    fetch(url, {
        method: 'GET'
    })
    .then(resp => resp.json())
    .then(date => viewUpdate(date))
    .catch(error => console.log(error)) 
}