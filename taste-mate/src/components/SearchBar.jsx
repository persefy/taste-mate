import { useState } from 'react'
import '../App.css'

export default function SearchBar () {
    const initialState = {
        searchQuery: '',
    }
    const [formState, setFormState] = useState(initialState);

    const handleSubmit = (event) => {
        event.preventDefault()
        //doing something with data

        console.log(formState)
        //reverting to our initial state

        setFormState(initialState)

    }

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id="searchQuery"
                        onChange={handleChange}
                        value={formState.searchQuery}/>
                <button type="submit">Search</button>
            </form>
        </div>


    )
}
