const TODO_LIST_STORAGE = 'TODOS'

export default {
    get(){
        return JSON.parse(localStorage.getItem(TODO_LIST_STORAGE)) || []
    },
    set(todos){
        localStorage.setItem(TODO_LIST_STORAGE,JSON.stringify(todos))
    }
}