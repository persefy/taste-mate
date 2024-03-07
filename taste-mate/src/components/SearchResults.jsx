import axios from "axios"
import SearchBar from "./SearchBar"
import DataContext from "../DataContext"
import { useEffect, useContext, useState } from 'react'
import { BASE_URL } from '../globals'
import { useParams, useNavigate } from 'react-router-dom'

export default function SearchResults () {
    const { searchMealQuery, setSearchMealQuery } = useContext(DataContext);
    const [meals, setMeals] = useState([])

    // const getSearchResults = async () => {
    //     console.log(searchQuery)
    //     const response = await axios.get(`${BASE_URL}search.php?s=${searchQuery}`)
    //     console.log(response.data.meals)
    //     setSearchResults(response.data.meals)
    //     console.log(searchResults)
    // }
    //----------------------------
    useEffect(() => {
        const getMealResults = async ()  => {
            try {
                console.log(searchMealQuery)
                const response = await axios.get(`${BASE_URL}search.php?s=${searchMealQuery}`)
                console.log(response.data.meals)
                setMeals(meals=>(response.data.meals))
                console.log(meals)
            } catch (error) {
                console.error('Error fetching meal:', error)
            }

        } 
            getMealResults()
    }, [])

    let navigate=useNavigate()

    const showMeal = (key) => {
      navigate(`/category/:category/${key}`)
      //need to grab category...
      console.log(key)
    }
    //also add code for when 0 items are returned
    return (
        <div>
            <h4>Results for {searchMealQuery}</h4>
            <ul>
                {meals.map((meal, key) => (
                 
                        <div key={key} className="card" onClick={() => showMeal(parseInt(meal.idMeal))}>
                            <h3>{meal.strMeal}</h3>
                            <img src={meal.strMealThumb} alt={meal.strMeal}></img>
                        </div>
                ))}
            </ul>
        </div>
    )
}
