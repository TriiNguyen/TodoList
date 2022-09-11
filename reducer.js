import storage from './ulti/storage.js'

const init = {
    todos: storage.get(),
    filter: "all",
    filters: {
        all: () => true,
        active: (todo) => !todo.completed,
        completed: (todo) => todo.completed
    },
    indexEdit: null
}

const actions = {
    add({todos},title) {
        todos.push({title,completed: false})
        storage.set(todos)
    },
    done({todos},index) {
        todos[index].completed = !todos[index].completed
        storage.set(todos)
    },
    toggleAll({todos},completed){
        todos.forEach(todo => todo.completed = completed)
        storage.set(todos)
    },
    clearCompleted(state) {
        state.todos = state.todos.filter(state.filters.active)
        storage.set(state.todos)
    },
    startEdit(state,index) {
        state.indexEdit = index
    },
    stopEdit(state,title) {
        if (state.editIndex !== null){
            if(title){
                state.todos[state.indexEdit].title = title
                storage.set(state.todos)
            } else {
                this.delete(state,state.indexEdit)
            }
            state.indexEdit = null
        }
    },
    delete({todos},index){
        todos.splice(index,1)
        storage.set(todos)
    },
    cancelEdit({indexEdit}) {
        indexEdit = null
    },
    selectFilter(state,selectFilter) {
        state.filter = selectFilter
    }
}

export default function reducer (state = init, action, args) {
    actions[action] && actions[action](state,...args)
    return state
}