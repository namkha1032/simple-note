import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const VisibilityFilter = (props) => {
    const dispatch = useDispatch()

    return (
        <>
            <input
                type="radio"
                name="filter"
                onChange={() => dispatch(filterChange('ALL'))}
            /><label>all</label><br/>
            <input
                type="radio"
                name="filter"
                onChange={() => dispatch(filterChange('IMPORTANT'))}
            /><label>important</label><br/>
            <input
                type="radio"
                name="filter"
                onChange={() => dispatch(filterChange('NONIMPORTANT'))}
            /><label>non-important</label><br/>
        </>
    )
}

export default VisibilityFilter