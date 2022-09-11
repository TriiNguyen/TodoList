import html from "../core.js"
import { connect } from "../store.js"

function Footer({todos,filters,filter}) {
    return html`
        <footer class="footer">
            <span class="todo-count"><strong>${todos.filter(todo => !todo.completed).length}</strong> item left</span>
            <ul class="filters">
                ${Object.keys(filters).map(selectFilter => html`
                    <li>
                        <a onclick="dispatch('selectFilter','${selectFilter}')"
                        class="${filter === selectFilter && 'selected'}" href="#">
                        ${selectFilter[0].toUpperCase() + selectFilter.slice(1)}</a>
                    </li>
                ` )}     
            </ul>
            ${todos.filter(filters.completed).length > 0  
                && html`<button class="clear-completed"
                onclick = "dispatch('clearCompleted')"
                >Clear completed</button>`}
            
        </footer>
    `
}

export default connect()(Footer)