import { useDispatch, useSelector } from 'react-redux'
// import { toggleImportanceOf } from '../reducers/noteReducer'

// import noteReducer, { createNote, toggleImportanceOf } from '../reducers/noteReducer'
import noteSlice from '../reducers/noteReducer'
const Note = ({ note, handleClick }) => {
    return (
        <li onClick={handleClick}>
            {note.content}
            <strong> {note.important ? 'important' : ''}</strong>
        </li>
    )
}

// console.log("store at index: ", store)
// console.log("store.getState() at index: ", store.getState)

const Notes = () => {
    const dispatch = useDispatch()
    const notesArray = useSelector(state => {
        if (state.filter === 'ALL') {
            return state.notes
        }
        return state.filter === 'IMPORTANT'
            ? state.notes.filter(note => note.important)
            : state.notes.filter(note => !note.important)
    })

    return (
        <ul>
            {notesArray.map(note =>
                <Note
                    key={note.id}
                    note={note}
                    handleClick={() => dispatch(noteSlice.actions.toggleImportanceOf(note.id))}
                />
            )}
        </ul>
    )
}

export default Notes