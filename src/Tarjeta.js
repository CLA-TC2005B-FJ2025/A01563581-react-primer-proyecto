import React from 'react'


export function Tarjeta(props) {
  return (
    <div>
      <img src={props.image} width= {150}/>
      <div>Nombre del personaje: {props.nombre}</div>
      <div>Color Favorito: {props.colorFavorito}</div>
        Tarjeta de Personaje
        
    </div>
  )
}
