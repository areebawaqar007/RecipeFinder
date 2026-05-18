import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";
import IngredientsList from "./IngredientsList";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;

 const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      {" "}
      {/* Main Outer Div */}
      <div className={styles.recipeCard}>
        {" "}
        {/* Recipe Card Div */}
        <h1 className={styles.RecipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} />
        <div className={styles.recipeDetails}>
          {" "}
          {/* Recipe Details Div */}
          <span>
            <strong>{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong> Serves {food.servings}</strong>
          </span>
          <span>
            <strong>{food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</strong>
          </span>
          <div>
            {" "}
            {/* Health Status Div */}
            <span>
              <strong>{food.veryHealthy ? "Healthy" : "Not-healthy"}</strong>
            </span>
          </div>
        </div>
        <div>
          {" "}
          <h2>Ingredients</h2>
          
          <IngredientsList food={food} isLoading={isLoading} />
          {/* Instructions Section Div */}
          <h2>Instructions</h2>
          <div className={styles.recipeInstructions}>
            {" "}
            {/* Instructions List Div */}
            <ol>
              {isLoading ? (
                <p>Loading..</p>
              ) : (
                food.analyzedInstructions?.[0]?.steps?.map((step) => (
                  <li key={step.number}>{step.step}</li>
                ))
              )}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
