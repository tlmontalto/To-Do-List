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

    const completeBtn = document.createElement('button');
    completeBtn.innerText = 'Completed'
    listItem.append(completeBtn)
    listItem.append(completeBtn)

    completeBtn.onclick = () => {
        listItem.remove()
        completeBtn.remove()
        itemsCompleted.append(listItem)
    }

    const removeBtn = document.createElement('button')
    removeBtn.innerText = 'Remove'
    listItem.appendChild(removeBtn)

    removeBtn.onclick = () => {
        listItem.remove()
        removeBtn.remove()
    }
}

submitButton.onclick = () => {
    const inputValue = document.querySelector('#input-box').value
    listArray.push(inputValue)
    document.querySelector('#input-box').value = ''
    renderList()
}