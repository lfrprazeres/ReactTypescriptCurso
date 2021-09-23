import React from 'react';
import { useState } from 'react';
import { ITarefa } from '../../types/Tarefa';
import styles from './style.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface IFormulario {
  setLista: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}


export const Form = ({ setLista }: IFormulario) => {
  const [tarefa, setTarefa] = useState('')
  const [tempo, setTempo] = useState('00:00')

  function salvarTarefa(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const novaTarefa = {
      tarefa,
      tempo,
      id: uuidv4()
    };
    setLista(listaAnterior => [
      ...listaAnterior,
      {
        ...novaTarefa,
        completado: false,
        selecionado: false
      }
    ]);
    resetaFormulario();
  }

  function resetaFormulario() {
    setTarefa('');
    setTempo('00:00');
  }

  return (
    <form onSubmit={salvarTarefa} className={styles.novaTarefa}>
      <div className={styles.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input 
          type="text" 
          name="tarefa" 
          id="tarefa" 
          value={tarefa}
          placeholder="O que você quer estudar?" 
          onChange={(evento) => { setTarefa(evento.target.value) }}
          required/>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input 
          type="time"
          step="1" 
          name="tempo" 
          id="tempo" 
          min="00:00:00"
          max="01:30:00"
          value={tempo}
          onChange={(evento) => { setTempo(evento.target.value) }}
          required/>
        </div>
      <button type="submit">Adicionar</button>
    </form>
  )
}