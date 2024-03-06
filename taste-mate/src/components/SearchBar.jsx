import axios from "axios"
import { useState, useContext } from 'react'
//import { BASE_URL } from '../globals'
import DataContext  from "../DataContext";
import '../App.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../globals'

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
        
        
        console.log(searchQuery.value)
        //const response = await axios.get(`${BASE_URL}search.php?s=${searchMealQueryStr}`)
    
        const response = await axios.get(`${BASE_URL}search.php?s=${searchQuery.value}`)
        //const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=beef`)
        
        console.log(response.data.meals)
        
        


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

