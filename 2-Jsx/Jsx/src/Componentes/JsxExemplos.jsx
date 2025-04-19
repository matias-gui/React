 import React from 'react'
 
 const JsxExemplos = () => {

    const nome = "Guilherme"

    const usuario  = {
        nome: "Kessya",
        sobreNome: "Alves",
    };

    function Nome (nome){
        return `Olá ${nome}`
    }

    const logado = true

    const usuarios = [
        {id : 1, nome:"Paulo"},
        {id : 2, nome:"João"},
        {id : 3, nome:"Marcos"},  
    ]

   return (

     <div>
        {/* Basico */}
        <h2>   Conteudo que o usuario vai ver </h2>

        <p> Olá, meu nome é {nome}</p>

        <p> Usuario: {usuario.nome} {usuario.sobreNome} 
        </p>

        <p> {5 + 8} </p>

        <p> {Nome(nome)} </p>
        <p> {Nome("Kessya")}</p>
       
       {/* Interações */}
        <div>
            <button onClick={() => alert("Teste")}>Clique</button>
        </div>

        {logado ? (<p>Está logado</p>) : (<p>Não está logado</p>)}
        
        {/* Renderizações de listas */}
        <div>
            <ul>
                {usuarios.map((usuario)=> (
                    <li key={usuario.id}>
                        {usuario.id} - {usuario.nome}
                    </li>
                ))}
            </ul>
        </div>
        </div>
   )
 }
 
 export default JsxExemplos