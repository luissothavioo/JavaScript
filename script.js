const listElement = document.querySelector("#app ul")
const inputElement = document.querySelector("#app input")
const buttonElement = document.querySelector("#app button")

const tarefas = JSON.parse(localStorage.getItem("list")) || []

function renderTarefas() {
    listElement.innerHTML = ""
    console.log(tarefas)
    for (const iterator of tarefas) {
        const tarefaElement = document.createElement("li")
        const tarefaText = document.createTextNode(iterator)


        const linkElement = document.createElement("a")
        linkElement.setAttribute("href", "#")


        const pos = tarefas.indexOf(iterator)
        linkElement.setAttribute("onclick", `deleteTarefa(${pos})`)


        const linkText = document.createTextNode("Excluir")
        linkElement.appendChild(linkText)


        tarefaElement.appendChild(tarefaText)
        tarefaElement.appendChild(linkElement)
        listElement.appendChild(tarefaElement)
    }
}
renderTarefas()

function addTarefas() {
    const tarefaText = inputElement.value
    tarefas.push(tarefaText)
    inputElement.value = ""
    renderTarefas()
    saveToStorage()
}
buttonElement.onclick = addTarefas

function deleteTarefa(pos) {
    tarefas.splice(pos, 1)
    renderTarefas()
    saveToStorage()
}

function saveToStorage() {
    localStorage.setItem("list", JSON.stringify(tarefas))
}

// console.log()
// for (let i=0; i < tarefas.length; i++) {
//     const tarefaElement = document.createElement
//     const tarefaElement = document.createTextNode()

//     tarefaElement.appendChild(tarefaText)
//     listElement.appendChild(tarefaElement)
// }
