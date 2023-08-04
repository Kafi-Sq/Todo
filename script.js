const addBtn = document.querySelector('.enter-btn')
const value = document.querySelector('.input-value')
const todos = JSON.parse(localStorage.getItem('todos')) || []
let addHTML = ''

renderTodos()

value.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        todos.push(value.value)
        renderTodos()
        value.value = ''
        localStorage.setItem('todos', JSON.stringify(todos))
    }
})

addBtn.addEventListener('click', () => {
    todos.push(value.value)
    renderTodos()
    value.value = ''
    localStorage.setItem('todos', JSON.stringify(todos))
})

function renderTodos() {
    addHTML = ''
    todos.forEach((todo, i) => {
        addHTML += `
            <div class="content">
                <p>${todo}</p>
                <button onclick="deleteTodo(${i})">Delete</button>
            </div>
        `
    })
    document.querySelector('.content-container').innerHTML = addHTML
}



function deleteTodo(i) {
    todos.splice(i, 1);
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos()
}