import React from 'react'
import './Botao.css'



function Botao(props) {
  return (
    <button className='orange-btn'>
      {props.texto}
    </button>
    
    


  )
}

export default Botao