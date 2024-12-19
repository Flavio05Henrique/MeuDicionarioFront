let viewContainer
let currentListWord

export const setViewContainer = (containerHtml) => {
    if(containerHtml == null) return console.log("container invalido")
    viewContainer = containerHtml
}

export const setListWord = (list) => {
    currentListWord = [...currentListWord, ...list]
}

export const viewUpdate = (list) => {
    if(list.length > 0) {
        viewContainer.innerHTML = generateValidList(list)
    }
}

export const viewRefresh = () =>  {
    if(currentListWord.length > 0) {
        viewContainer.innerHTML = generateValidList(currentListWord)
    } 
}

const generateValidList = (list) => {
    return list.map(e => `<div class="word" id="${e.id}">${e.name}</div>`).join("")
} 

