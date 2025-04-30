import React from 'react'
import { useState, useEffect } from 'react'

const Projeto = () => {
  // adicionar tarefas
  const [todo, setTodo] = useState([])

  const [inputValue, setInputValue] = useState("")

  const handSubmit = (e) => {
    e.preventDefault()

    if(inputValue.trim() !== ""){
      const newTodo ={
        id: Date.now(),
        text: inputValue
      }

      setTodo ((prevtodo) => [...prevtodo, newTodo])

      setInputValue("");
    }
  }

  return (
    <div>
      <main>
        <h2>Lista de Tarefas</h2>
        <form className='form' onSubmit={handSubmit}>
          <input type="text" placeholder='Adicionar tarefa' className='input'
            value={inputValue}
            onChange={(e) => { setInputValue(e.target.value) }} />
          <button type="submit">Adicionar</button>
        </form>
        {todo.length === 0 && <p className='mensagem'> Não há tarefas </p>}
        <ul className='todo-lista'>
          {todo.map((todo) => (
            <li key={todo.id} className='todo-item'>
              {todo.text}
              <button className='button-delete'>Delete</button>
            </li>
          ))
          }
        </ul>
      </main>
    </div>
  )
}
export default Projeto