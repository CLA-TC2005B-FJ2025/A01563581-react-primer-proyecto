import React from 'react'
import { Tarjeta } from './Tarjeta'
import PeachesImage from './images/Peaches.png'
import LuigiImage from './images/Luigi.png'
import MarioImage from './images/Mario.png'

export function App() {
  return (
    <div>
        <div>Personajes de Mario Bros</div>
        <Tarjeta nombre= "Mario" colorFavorito = "Rojo" image = {MarioImage}/>
        <Tarjeta nombre= "Luigi" colorFavorito = "Verde" image = {LuigiImage}/>
        <Tarjeta nombre= "Peaches" colorFavorito = "Rosa"image = {PeachesImage}/>
    </div>
  )
}
