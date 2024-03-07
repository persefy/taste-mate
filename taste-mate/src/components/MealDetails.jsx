import { useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from "axios"
import { BASE_URL } from '../globals'

const MealDetails = () => {

    const [meal, setMeal] = useState ('')

    let {id} = useParams()
    console.log(id)

    useEffect(() => {
        const getMeal = async() => {
            const response = await axios.get(`${BASE_URL}lookup.php?i=${id}`)
            setMeal(response.data.meals[0])
            console.log(response.data.meals[0])
        }
        getMeal()
    }, [id])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return meal ? (
        <div>
            <div className="meal-details-container">
                <div className="meal-details-header">
                    <img className="meal-details-image" src={meal.strMealThumb}/>
                    <h1>{meal.strMeal}</h1>
                    <div className="meal-subheader">
                        <h3>Region: <strong>{meal.strArea}</strong></h3>
                        <h3>Tags: <strong>{meal.strTags && meal.strTags.split(',').join(', ')}</strong></h3>
                    </div>

                </div>
                <div className="meal-details-body">
                    <div className="ingredients-container">
                        <h2>Ingredients</h2>
                        <div className="ingredients-list">
                            {Object.keys(meal).map(key => {
                                if (key.startsWith('strIngredient') && meal[key]) {
                                    const measureKey = `strMeasure${key.slice(13)}`
                                    return (
                                        <div key={key} className="ingredient-item">
                                            <h4>{meal[measureKey]} {meal[key]}</h4>
                                            
                                        </div>
                                    )
                                }
                                return null
                            })}
                        </div>
                    </div>
                    <div className="instructions-container">
                        <h2>Instructions</h2>
                        <div className="instruction-list">
                            {meal.strInstructions.split('\r\n').map((step, index) => (
                                <h4 key={index}>{`${index + 1}. ${step}`}</h4>
                            ))}
                        </div>
                    </div>
                    
                </div>
                <div className="video">
                    <iframe
                        width="560"
                        height="315"
                        src={meal.strYoutube.replace("watch?v=", "embed/")}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className='scroll-top-container'>
                <button className="scroll-top-button" onClick={scrollToTop}>
                    Scroll back to top
                </button>
            </div>
        </div>
        ) : null
}

export default MealDetails
