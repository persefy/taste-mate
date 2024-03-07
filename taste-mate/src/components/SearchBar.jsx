import axios from "axios"
import { useState, useContext } from 'react'
import DataContext  from "../DataContext";
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../globals'
import '../App.css'

export default function SearchBar () {
    
    const { searchMealQuery, setSearchMealQuery } = useContext(DataContext);
    
    let navigate = useNavigate()
    
    //form code below
    const initialState = {
        searchQuery: '',
    }

    const [formState, setFormState] = useState(initialState);

    const handleSubmit = async (event) => {
        event.preventDefault()
        //doing something with data
    
        const response = await axios.get(`${BASE_URL}search.php?s=${searchMealQuery}`)

        //console.log(response.data.meals)
        console.log(formState, searchMealQuery)

        //reverting to our initial state
        setFormState(initialState)
        
        if (formState.searchQuery!='') {
        navigate(`/searchResults/${searchMealQuery}`)
        }
    }

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }
    //form code above

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="What are we cookin?" type="text" id="searchQuery"
                        onChange={handleChange}
                        value={formState.searchQuery}/>

                <button  className="search-button" type="submit" onClick={()=> {
                        if (formState.searchQuery!='') {
                            setSearchMealQuery(formState.searchQuery)
                        } else {
                            console.log('Please enter search query to use this feature')
                        }}}>Search</button>
            </form>
        </div>
    )
}

