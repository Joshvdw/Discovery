import React from 'react'
import planets from '../../data/planets'
import PlanetItem from './PlanetItem'

const Planets = () => {
  return (
    planets.map(planet => {
      return (<PlanetItem planet={planet} key={planet.id}/>)
    })
  )
}

export default Planets
