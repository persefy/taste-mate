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

    const showMeal = (meal) => {
      navigate(`${meal.id}`)
      console.log(meal.id)
    }

        return (
            <div>
                <h1>Category</h1>
                <ul>
                    {meals.map((meal, index) => (
                        <li key={meal.id} onClick={() => showMeal(meal)}>{meal.strMeal}</li>
                    ))}
                </ul>
            </div>
        )
    }
