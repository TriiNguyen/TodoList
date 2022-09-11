import html from "../core.js"
import { connect } from "../store.js"

function TodoItem({todo,index,indexEdit}) {
    return html`
        <li class="${todo.completed && 'completed'} ${indexEdit == index && 'editing'}">
            <div class="view">
                <input 
                class="toggle" 
                type="checkbox" ${todo.completed && "checked"}
                onchange = "dispatch('done',${index})" 
                >
                <label 
                ondblclick = "dispatch('startEdit',${index})"
                >${todo.title}</label>
                <button 
                onclick = "dispatch('delete',${index})"
                class="destroy"></button>
            </div>
            <input
            class="edit" 
            value="${todo.title}"
            onkeyup = "event.keyCode === 13 && dispatch('stopEdit',this.value.trim()) 
                || event.keyCode === 27 && dispatch('cancelEdit')"
            onblur = "dispatch('stopEdit',this.value.trim())"
            >
        </li>  
    `
}

export default connect()(TodoItem)