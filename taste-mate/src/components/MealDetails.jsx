import { useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from "axios"

const MealDetails = () => {

    const [meal, setMeal] = useState ('')

    let {id} = useParams()
    console.log(id)

    useEffect(() => {
        const getMeal = async() => {
            const response = await axios.get(`www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            setMeal(response.data)
            console.log(response.data)
        }
        getMeal()
    }, [id])

    return meal ? (
        <div>
            <div className="meal-details-container">
                <div className="meal-details-header">
                    <img src={meal.strMealThumb}/>
                    <h1>{meal.strMeal}</h1>
                </div>
                <div className="meal-details-body">
                    <div className="ingredients-container">
                        <h2>Ingredients</h2>
                        <div classname="ingredients-list">
                            {Object.keys(meal).map(key => {
                                if (key.startsWith('strIngredient') && meal[key]) {
                                    const measureKey = `strMeasure${key.slice(13)}`
                                    return (
                                        <div key={key} className="ingredient-item">
                                            <span>{meal[key]}</span>
                                            <span>{meal[measureKey]}</span>
                                        </div>
                                    )
                                }
                                return null
                            })}
                        </div>
                    </div>
                    <div className="instructions">
                        <h2>Instructions</h2>
                        <ul className="instruction-list">
                            {meal.strInstructions.split('\r\n').map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="video"></div>
                </div>
            </div>
        </div>
        ) : null
}

export default MealDetails

