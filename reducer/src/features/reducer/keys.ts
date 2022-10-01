export type Value = string

export type State = {
    todos: Value
    users: Value
}


let type: keyof State = "todos"

let response : State = {
    todos : "",
    users : ""
}

let result = response[type]
