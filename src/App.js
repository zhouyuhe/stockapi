import React, { useState, useEffect } from 'react';


const App= () => {
  const [hasError, setErrors]=useState(false)
  const [planets, setPlanets]=useState({})

  async function fetchData() {
    const res = await fetch("https://swapi.co/api/planets/4/");
    res
      .json()
      .then(res => setPlanets(res))
      .catch(err => setErrors(err));
  }
  useEffect(()=> {

    fetchData();
  });
  return (
    <div>
      {JSON.stringify(planets)}
      <hr />
      <span>Has Error : {JSON.stringify(hasError)}</span>
    </div>
    
  )
}

export default App;
