import React from 'react'
import { Link, useParams } from 'react-router-dom'
import planets from "../../data/planets"

const Planet = () => {
   const planetName = useParams()
   const planet = planets.find(planet => planet.name == planetName.name)

   return (
      <div className="planet-info-wrapper">
         <Link to="/" className="back-btn">
         <h6><span className="back-icon">&#8592;</span> Back</h6></Link>
         <div className="planet-info">
            <h2 className="planet-name-info">{planet.name}</h2>
            <p><strong>Size:</strong> {planet.size}</p>
            <p><strong>Co-ordinates:</strong> {planet.coordinates}</p>
            <p><strong>Moons:</strong> {planet.moons}</p>
            <div className={`info-planet ${planet.name}`}></div>
            <p>{planet.info}</p>
         </div>
      </div>
   )
}

export default Planet