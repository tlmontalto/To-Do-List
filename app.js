const submitButton = document.querySelector('#submit')
const toDoList = document.querySelector('.to-do-list')
const itemsCompleted = document.querySelector('.completed-list')

const removeBtn = document.createElement('button')
const completeBtn = document.createElement('button');
let listItem = document.createElement('li')

const listArray = []

const renderList = () => {

    completeBtn.innerText = 'Completed'

    for (let items of listArray) {
        listItem.innerText = items
        toDoList.appendChild(listItem)
        listItem.append(completeBtn)
    }

    completeBtn.onclick = () => {
        listItem.remove()
        completeBtn.remove()
        itemsCompleted.append(listItem)

        removeBtn.innerText = 'Remove'
        listItem.appendChild(removeBtn)
        removeBtn.onclick = () => {
            listItem.remove()
            removeBtn.remove()
        }
    }
}

submitButton.onclick = () => {
    const inputValue = document.querySelector('#input-box').value
    listArray.push(inputValue)
    document.querySelector('#input-box').value = ''
    renderList()
}