// import library
import { createSlice } from '@reduxjs/toolkit'
// initialState
const initialNoteState = [
    { content: 'reducer defines how redux store works', important: true, id: 1 },
    { content: 'state of store can contain any data', important: false, id: 2 }
]
const generateId = () => (
    Number((Math.random() * 1000000).toFixed(0))
)
// reducerF
const noteReducer = (state = initialNoteState, action) => {
    switch (action.type) {
        case 'NEW_NOTE':
            return [...state, action.payload]
        case 'TOGGLE_IMPORTANCE': {
            const id = action.payload.id
            const noteToChange = state.find(n => n.id === id)
            const changedNote = {
                ...noteToChange,
                important: !noteToChange.important
            }
            return state.map(note =>
                note.id !== id ? note : changedNote
            )
        }
        default:
            return state
    }
}
// action
const createNote = (content) => {
    return {
        type: 'NEW_NOTE',
        payload: {
            content: content,
            important: false,
            id: generateId()
        }
    }
}

const toggleImportanceOf = (id) => {
    return {
        type: 'TOGGLE_IMPORTANCE',
        payload: {
            id: id
        }
    }
}
// ------------------------------ Toolkit ------------------------------------
const noteSlice = createSlice({
    name: 'notes',
    initialState: initialNoteState,
    reducers: {
        createNote(state, action) {
            const newObj = {
                content: action.payload,
                important: false,
                id: generateId()
            }
            return [...state, newObj]
            // const content = action.payloadF
            // state.push({
            //     content,
            //     important: false,
            //     id: generateId(),
            // })
        },
        toggleImportanceOf(state, action) {
            const id = action.payload
            const noteToChange = state.find(n => n.id === id)
            const changedNote = {
                ...noteToChange,
                important: !noteToChange.important
            }
            console.log(JSON.parse(JSON.stringify(state)))
            return state.map(note =>
                note.id !== id ? note : changedNote
            )
        }
    },
})
// ------------------------------ Toolkit ------------------------------------
// export default noteReducer;
// export { createNote, toggleImportanceOf }

export default noteSlice


// export const { createNote, toggleImportanceOf } = noteSlice.actions
// export default noteSlice.reducer