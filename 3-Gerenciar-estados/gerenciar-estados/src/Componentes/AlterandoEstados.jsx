import { useState } from "react";

const AlterandoEstados = () => {
  // Criação de uma variavel de alteração, e uma de consulta
  const [contador, setContador] = useState(0)
  // Criação de uma função de incrementação
  const incrementar = () => {
    //Alterando o valor da variável
    setContador((prevContador) => (contador + 1)) 
   // setContador(contador + 1)
    console.log(contador)
  }

  const [usuario, setUsuario] = useState({
    nome: "Guilherme",
    idade: 22,
    hobbies: ["Programação", "Futebol"]
  })

  const aumentarIdade = () => {
    setUsuario((prevUsuario) => (
      {
        ...prevUsuario,
        idade: prevUsuario.idade + 1
      }
    ))}

    const diminuirIdade = () => {
      setUsuario((prevUsuario) => (
        {
          ...prevUsuario,
          idade: prevUsuario.idade - 1
        }
      ))
    }

  return (
    <div>
      <h2>Contador</h2>
      <p>Voçê clicou {contador} vezes.</p>
      <button onClick={incrementar}>Incrementar</button>

      <h3>Usuario</h3>
      <p>Nome: {usuario.nome} <br/> Idade: {usuario.idade}
      </p>
      <button onClick={diminuirIdade}> - </button>
      <button onClick={aumentarIdade}> + </button>
     
    
    </div>
  )
};

export default AlterandoEstados;