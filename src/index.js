// import library
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
// import component
import App from './App'
// import reducer
import noteReducer from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'
// import test
import { createNote } from './reducers/noteReducer'
import { filterChange } from './reducers/filterReducer'
/////////////////////////////////////////////////////////
// combine reducers
const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})
// create store
const store = createStore(reducer, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// const store = configureStore({
//   reducer: {
//     notes: noteReducer,
//     filter: filterReducer
//   }
// })

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

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