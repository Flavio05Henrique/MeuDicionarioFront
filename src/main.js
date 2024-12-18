const formAddNewWord = document.querySelector('[data="newWord"]')
const url = "localhost:7167/palavra"

console.log(formAddNewWord)

const addNewWord = (obj) => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })
}

formAddNewWord.addEventListener("submit", e => {
    e.preventDefault()

    value = {
        'word': formAddNewWord.querySelector("#word").value,
        'description' : formAddNewWord.querySelector("#wordDescription").value
    }
    addNewWord(value)
    // const word = formAddNewWord.querySelector("#word").value
    // const description = formAddNewWord.querySelector("#wordDescription").value

})
