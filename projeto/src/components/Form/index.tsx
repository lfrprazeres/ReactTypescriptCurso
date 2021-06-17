import React from 'react';

function Form() {

  function handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log("tarefa cadastrada")
    event.preventDefault()
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="inputContainer">
        <label htmlFor="task">Nova tarefa</label>
        <input 
          type="text" 
          name="task" 
          id="task" 
          placeholder="O que você estudará?" 
          required />
      </div>
      <div className="inputContainer">
        <label htmlFor="time">Tempo</label>
        <input 
          type="time" 
          name="time" 
          id="time" 
          placeholder="00:00" 
          required />
      </div>
      <button 
        type="submit" 
        style={{ display: 'none' }}>
          Confirmar Tarefa
      </button>
    </form>
  )
}

export default Form;