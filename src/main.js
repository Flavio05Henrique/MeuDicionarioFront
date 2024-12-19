import { setViewContainer, viewUpdate } from "./viewManager.js"
import { addNewWord, findByWord, findOne } from "./wordControler.js"


const formAddNewWord = document.querySelector('[data="newWord"]')
const search = document.querySelector('[data="search"]') 
const viewContainer = document.querySelector('[data="words"]')

setViewContainer(viewContainer)
getSome()

formAddNewWord.addEventListener("submit", e => {
    e.preventDefault()

    value = {
        'Name': formAddNewWord.querySelector("#word").value,
        'Meaning' : formAddNewWord.querySelector("#wordDescription").value
    }
    addNewWord(value)
})

search.addEventListener("submit", e => {
    e.preventDefault()
    console.log(findByWord(search.querySelector("#search").value))
})
