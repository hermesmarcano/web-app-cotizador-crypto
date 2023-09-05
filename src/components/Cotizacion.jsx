import React from 'react'
import styled from '@emotion/styled'

const Contenedor = styled.div`
color: #fff;
font-family:'Lato', sans-serif;
font-weight: 700;
display: flex;
align-items: start;
`
const Imagen = styled.img`
display: block;
width: 150px;
`
const Texto = styled.p`
font-size: 18px;
span {
    font-weight: 700;
}
`
const Precio = styled.p`
font-size: 30px;
span {
    font-weight: 700;
}
`


function Cotizacion({cotizacion}) {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = cotizacion
  return (
    <Contenedor>
    <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt='Imagen de la criptomoneda'/>
      <div>
      <Precio>El precio es de: <span>{PRICE}</span></Precio>
      <Texto>Precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
      <Texto>Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
      <Texto>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
      <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
      </div>
      
    </Contenedor>
  )
}

export default Cotizacion
