import { useState, useEffect } from "react"

const UseEffectExemplo = () => {
    // Sem dependência
    useEffect(() => {
        console.log("Contando USE1")

    })
    // Com dependência / array dep vazio
    useEffect(() => {
        console.log("Contando USE2")
    },[]
    )
    // UseState ativa a renderização
    const [contar, setContar] = useState (0)
    const [contar2,setContar2]= useState (0)
    //Com dependências
    useEffect(() => {
        console.log("Contando USE3")
    },[contar,contar2]
    )
  return (
    <div>
        <h2>Contar</h2>
        <p>{contar}</p>
        <button onClick={() => setContar(contar + 1)}>Contar</button>
        <button onClick={() => setContar2(contar2 + 1)}>Contar</button>

    </div>
  )
}

export default UseEffectExemplo