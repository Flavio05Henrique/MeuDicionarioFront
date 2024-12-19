let viewContainer

export const setViewContainer = (containerHtml) => {
    if(containerHtml == null) return console.log("container invalido")
    viewContainer = containerHtml
}

export const viewUpdate = (list) => {
    if(list.length > 0) {
        viewContainer.innerHTML = generateValidList(list)
    }
}

const generateValidList = (list) => {
    return list.map(e => `<div class="word" id="${e.id}">${e.name}</div>`).join("")
} 

