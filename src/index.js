// import library
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
// import component
import App from './App'
// import reducer
import noteSlice from './reducers/noteReducer'
import filterSlice from './reducers/filterReducer'
// import test
// import { createNote } from './reducers/noteReducer'
// import { filterChange } from './reducers/filterReducer'
/////////////////////////////////////////////////////////
// // combine reducers
// const reducer = combineReducers({
//   notes: noteReducer,
//   filter: filterReducer
// })
// // create store
// const store = createStore(reducer)

const store = configureStore({
  reducer: {
    notes: noteSlice.reducer,
    filter: filterSlice.reducer
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

// console.log("store at index: ", store)
// console.log("store.getState() at index: ", store.getState)
// test some action
// console.log("----------test action--------------")
// console.log(store.getState())
// store.subscribe(() => console.log(store.getState()))
// store.dispatch(filterChange('IMPORTANT'))
// store.dispatch(createNote('combineReducers forms one reducer from many simple reducers'))

// const root = ReactDOM.createRoot(document.getElementById('root'))

// const renderApp = () => {
//   root.render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   )
// }

// renderApp()
// store.subscribe(renderApp)