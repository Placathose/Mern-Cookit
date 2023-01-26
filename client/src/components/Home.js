import React, { useState } from 'react';
import styles from './Home.module.css';



export default function Home () {
  const [ string, setString ] = useState("");
  const [recipes, setRecipes] = useState([]);


  return (
    <div>
      <input type="text"
        onChange={ (event) => {
          setString(event.target.value);
        }
        }
      />

      <button
        onClick={ () => {
          fetch('http://localhost:3001', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(string)
          })
          .then( (response) => response.json())
          .then( (result) => console.log(result))
          .catch( (err) => console(`This is error: ${err}`))
          ;


        } }
      >
        Add String
      </button>

      <button
        onClick={ () => {
          fetch('http://localhost:3001/recipes/', { mode: 'cors'}) 
          .then( (response) => response.json())
          .then( (data) => setRecipes(data))   
          .catch(err => {
            console.log(`This is the error: ${err}`)
          })
        }}
    
      >
        Get Data
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
  );
}
