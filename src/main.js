import { addNewWord, findByWord, findOne } from "./wordControler.js"


const formAddNewWord = document.querySelector('[data="newWord"]')
const search = document.querySelector('[data="search"]') 


formAddNewWord.addEventListener("submit", e => {
    e.preventDefault()

    value = {
        'word': formAddNewWord.querySelector("#word").value,
        'description' : formAddNewWord.querySelector("#wordDescription").value
    }
    addNewWord(value)
})

search.addEventListener("submit", e => {
    e.preventDefault()
    console.log(findByWord(search.querySelector("#search").value))
})
