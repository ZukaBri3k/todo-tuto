const todos = [
    { id: 1, name: 'Learn TypeScript', completed: false },
    { id: 2, name: 'Learn GraphQL', completed: false },
    { id: 3, name: 'Learn React', completed: true },
    { id: 4, name: 'Learn Angular', completed: false },
    { id: 5, name: 'Learn Vue', completed: false },
]

export default defineEventHandler((event) => {
    return todos
})