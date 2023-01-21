import React, { useState } from 'react';



export default function Home () {
  const [ string, setString ] = useState("");


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

          });


        } }
      >
        Add String
      </button>

    </div>
  );
}
