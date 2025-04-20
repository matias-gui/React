import React from 'react'
import { useState } from 'react'

const ExemplosEventos = () => {
    const saudacao = () =>{
        alert("Olá!!")
    }
    const handSaudacao = (name) =>{
        alert(`Olá ${name}`)
    }
    const [nome, setNome] = useState()

    const handSubmit = (e) => {
        //Previne que a pagina não recarregue
        e.preventDefault()
        alert(`Enviado  ${nome}`)}

  return (
  
    <div>
        <h2>Eventos</h2>
        <button onClick={() => alert("Olá")}>Clique Aqui</button>
        <button onClick={saudacao}>Clique Aqui 2</button> <br />
        <button onClick={() => handSaudacao("Guilherme")}>Olá Guilherme</button>
        <button onClick={() => handSaudacao ("Kessya")}>Olá Kessya</button>
        
        <form onSubmit={handSubmit}>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}  placeholder='Digite seu nome'/>
            <input type="submit" value="Enviar" />
        </form>
    

    </div>
  )
}

export default ExemplosEventos