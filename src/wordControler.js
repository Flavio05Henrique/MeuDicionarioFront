const url = "localhost:7167/palavra"
 
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
    .then(date => console.log(date))
    .catch(error => console.log(error))
} 

export const findByWord = (word) => {
    const urlWithId = url + `/search/${word}`
    fetch(urlWithId, {
        method: 'GET'
    })
    .then(date => console.log(date.json()))
    .catch(error => console.log(error))
} 

export const getSome = () => {
    fetch(url, {
        method: 'GET'
    })
    .then(date => console.log(date))
    .catch(error => console.log(error)) 
}