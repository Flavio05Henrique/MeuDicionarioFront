import { setViewContainer, viewUpdate } from "./viewManager.js"
import { addNewWord, findByWord, getSome } from "./wordControler.js"


const formAddNewWord = document.querySelector('[data="newWord"]')
const search = document.querySelector('[data="search"]') 
const viewContainer = document.querySelector('[data="wordsContainer"]')
const addNewWordOpenBnt = document.querySelector('[data="openAdd"]')

setViewContainer(viewContainer)
getSome()

formAddNewWord.addEventListener("submit", e => {
    e.preventDefault()

    const value = {
        'Name': formAddNewWord.querySelector("#word").value,
        'Meaning' : formAddNewWord.querySelector("#wordDescription").value
    }
    addNewWord(value)
})

search.addEventListener("submit", e => {
    e.preventDefault()
    findByWord(search.querySelector("#search").value)
})

addNewWordOpenBnt.addEventListener('click', e => {
    const getAddNewWordContainer = formAddNewWord
    getAddNewWordContainer.classList.toggle('heightZero')
})
