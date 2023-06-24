// import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'
import filterSlice from '../reducers/filterReducer'
const VisibilityFilter = (props) => {
    const dispatch = useDispatch()

    return (
        <>
            <input
                type="radio"
                name="filter"
                onChange={() => dispatch(filterSlice.actions.filterChange('ALL'))}
            /><label>all</label><br/>
            <input
                type="radio"
                name="filter"
                onChange={() => dispatch(filterSlice.actions.filterChange('IMPORTANT'))}
            /><label>important</label><br/>
            <input
                type="radio"
                name="filter"
                onChange={() => dispatch(filterSlice.actions.filterChange('NONIMPORTANT'))}
            /><label>non-important</label><br/>
        </>
    )
}

export default VisibilityFilter