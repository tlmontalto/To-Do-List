const submitButton = document.querySelector('#submit')
const toDoList = document.querySelector('.to-do-list')
const itemsCompleted = document.querySelector('.completed-list')

const listArray = []

const renderList = () => {
    let listItem = document.createElement('div')

    for (let items of listArray) {
        listItem.innerText = items
        toDoList.appendChild(listItem)
        listItem.className = 'list-item'
    }

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-button')
    completeBtn.innerText = 'Completed'
    completeBtn.style.backgroundColor = 'green';
    listItem.append(completeBtn)

    completeBtn.onclick = () => {
        listItem.remove()
        completeBtn.remove()
        itemsCompleted.append(listItem)
        listItem.className = 'done-item'
        const removeBtn = document.createElement('button')
        removeBtn.innerText = 'Remove'
        removeBtn.style.backgroundColor = 'red';
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