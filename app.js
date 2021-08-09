const submitButton = document.querySelector('#submit')
const toDoList = document.querySelector('.to-do-list')
const itemsCompleted = document.querySelector('.completed-list')

const listArray = []

const renderList = () => {
    let listItem = document.createElement('li')

    for (let items of listArray) {
        listItem.innerText = items
        toDoList.appendChild(listItem)
    }
}

submitButton.onclick = () => {
    const inputValue = document.querySelector('input').value
    listArray.push(inputValue)
    renderList()
}