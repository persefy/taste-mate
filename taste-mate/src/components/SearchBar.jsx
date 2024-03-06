import axios from "axios"
import { useState, useContext } from 'react'
//import { BASE_URL } from '../globals'
import DataContext  from "../DataContext";
import '../App.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

export default function SearchBar () {
    const { searchMealQuery, setSearchMealQuery } = useContext(DataContext);
    let navigate = useNavigate()
    //form code below
    const initialState = {
        searchQuery: '',
    }

    const [formState, setFormState] = useState(initialState);

    const handleSubmit = (event) => {
        event.preventDefault()
        //doing something with data
        
        console.log(formState, searchMealQuery)
        
        //reverting to our initial state
        navigate('/searchResults/:name')
        setFormState(initialState)
    }

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }
    //form code above


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id="searchQuery"
                        onChange={handleChange}
                        value={formState.searchQuery}/>
                <button type="submit" onClick={()=> {
                    setSearchMealQuery(formState.searchQuery)
                }}>Search</button>
            </form>
        </div>


    )
}
