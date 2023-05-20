todos=[
    {
        name: "buy milk",
        id: "1",
        done: false
    },
    {
        name: "buy coffee",
        id: "2",
        done: false
    },
    {
        name: "sleep",
        id: "3",
        done: true
    }
]

const todoContainer = document.getElementById("todo-container")

function render(){
    todoContainer.innerHTML= ""
    todos.forEach(item => {
        todoContainer.appendChild(getTodo(item))
    })
}

function getTodo(item){

    const container = document.createElement("div")
    container.classList.add("todo")

    const input = document.createElement("input")
    input.id = item.id;
    input.checked = item.done
    input.type = "checkbox"
    container.appendChild(input)

    input.addEventListener("change",() => {
        item.done = !item.done
        render()
    })

    const label = document.createElement("label")
    label.htmlFor = item.id;
    label.innerText = item.name
    if(item.done){
        label.classList.add("cut")
    }
    container.appendChild(label)

    return container
}
render()