import React, {useState} from 'react'
import { Link } from'react-router-dom'

const PlanetItem = ({planet}) => {
  // const planet
  const [ showTrivia,  setShowTrivia ] = useState(false) 
  return (
    <>
      <div className={planet.name} onClick={() => setShowTrivia(!showTrivia)}>
      </div>
      <div  className={`trivia-${planet.name} show-${showTrivia ? 'trivia' : 'planet'}`} onClick={() => setShowTrivia(!showTrivia)}>
        <h2 className="planet-name">{planet.name}</h2>
        <em><p>Did you know that {planet.trivia}?</p></em>
        <Link to={planet.name}>
        <button>More info</button></Link>
      </div>
    </>
  )
}

export default PlanetItem
