import React, { useState } from 'react';
import styles from './Home.module.css';

 const data = [
  {
    title : "Lasagna",
    description : "This is an italian recipe born in the Milan and now appreciated and cooked in the whole world",
    ingredients: [ "Lasagna sheets", "Tomato", "Basil", "minced-beef", "onion" ]
  },
  {
    title : "Pizza",
    description : "This is a margherrita style pizza",
    ingredients: [ "Floor", "Tomatoes", "Mozzarella", "Olive oil" ]
  },
  {
    title : "Beef Burger",
    description : "This is an american style burger with ground beef patty and freshly baked bread",
    ingredients: [ "minced beef", "Onion", "lettuce", "cucumber" ]
  },
  {
    title : "Noodle soup",
    description : "This is a Hong Kong street food",
    ingredients: [ "Egg noodles", "Fish balls", "lettuce" ]
  },
  {
    title : "BBQ pork with rice",
    description : "This is a Hong KOng style traditional meal",
    ingredients: [ "BBQ Pork", "Rice" ]
  },
];




export default function Home() {

  const [text, setText] = useState("");
  const [recipes] = useState(data);

  return (
    <div>
      <input type="text" 
        onChange={ (event) => {
          setText(event.target.value)
        }
        }
      />

      <button 
        onClick={() => {
          fetch('http://localhost:3001', {
            method: 'POST',
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(text)
          
          })
            

        }}
      >
        Add String
      </button>

      <div className={styles.recipesContainer}>
        {recipes.map((recipe) => {
          return(
            <div key={recipe} className={styles.container}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>

              <ul className={styles.tagContainer}>
                {recipe.ingredients.map((ingre) => {
                  return(
                    <li key={ingre} className={styles.tags}>{ingre}</li>
                  )
                })}
              </ul>
          </div>
          )
        
        })}
      </div>
    </div>
  )
}
