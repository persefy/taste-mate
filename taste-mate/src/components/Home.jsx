import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useNavigate, useParams } from 'react-router-dom'

export default function Home (props) {

    
    //console.log(category)

    const [randomMeals, setRandomMeals] = useState([])

    
    useEffect(() => {
      const getRandomMeals = async () => {
          try {
              const mealPromises = Array.from({ length: 6 }, async () => {
                  const response = await axios.get(`${BASE_URL}random.php`);
                  return response.data.meals[0]
              })
  
              const randomMeals = await Promise.all(mealPromises)
              setRandomMeals(randomMeals);
          } catch (error) {
              console.error('Error fetching meals:', error)
          }
      }
  
      getRandomMeals()
      console.log(randomMeals)
  }, [])

    let navigate=useNavigate()

    const showMeal = (mealData) => {
      navigate(`/category/${mealData.strCategory}/${mealData.idMeal}`)
      console.log(mealData.idMeal)
    }

    
    return (
      <div className="category-container">
        <h1>Suggested Recipes</h1>
          <div className="card-container">
              {randomMeals.map((meal) => (
                  <div key={meal.idMeal} className="card" onClick={() => showMeal({ strCategory: meal.strCategory, idMeal: parseInt(meal.idMeal) })}>
                      <img className="card-image" src={meal.strMealThumb} alt={meal.strMeal}></img>
                      <h3 className="card-name">{meal.strMeal}</h3>
                  </div>
              ))}
          </div>
      </div>
  )
  
}