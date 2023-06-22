import { createNote, toggleImportanceOf } from './reducers/noteReducer'
import { useSelector, useDispatch } from 'react-redux'

//import component
import NewNote from './components/NewNote'
import Notes from './components/Notes'
import VisibilityFilter from './components/VisibilityFilter'

// App component
const App = () => {
  return (
    <>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </>
  )
}

export default App;