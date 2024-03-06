import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useNavigate, useParams } from 'react-router-dom'

export default function Category(props) {

    let {category} = useParams()
    //console.log(category)

    const [meals, setMeals] = useState([])

    const [displayCategory,setDisplayCategory] = useState(category)

    console.log(displayCategory)
    useEffect(() => {
        console.log(category)



        const getMeals = async () => {
            try {
                const response = await axios.get(`${BASE_URL}filter.php?c=${displayCategory}`)
                setDisplayCategory(category)
                setMeals(response.data.meals)
                console.log(meals)
            } catch (error) {
                console.error('Error fetching meal:', error)
            }
        }
        getMeals()
        console.log(meals)
    },[category])

    let navigate=useNavigate()

    const showMeal = (key) => {
      navigate(`${key}`)
      console.log(key)
    }

    
    return (
        <div>
            <h1>Category</h1>
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