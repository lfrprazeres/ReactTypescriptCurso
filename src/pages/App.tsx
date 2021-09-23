import { useState } from 'react'
import { Form } from '../components/Formulario/index'
import { Lista } from '../components/Lista/index'
import { Cronometro } from '../components/Cronometro/index'
import { ITarefa } from '../types/Tarefa'
import { timeToSeconds } from 'common/utils/date'
import styles from "./style.module.scss"

export const App = () => {
  const [lista, setLista] = useState<ITarefa[]>([]);
  const [idSelecionado, setIdSelecionado] = useState<string>();
  const [tempo, setTempo] = useState<number>(0);

  function selecionaItem(item: ITarefa, index: number) {
    setIdSelecionado(item.id);
    setLista((listaAnterior: ITarefa[]) =>
      listaAnterior.map((itemAnterior: ITarefa, indexAnterior: number) => {
        itemAnterior.selecionado = false;
        if(indexAnterior === index) itemAnterior.selecionado = true;
        return itemAnterior;
      })
    )
    const segundos = timeToSeconds(item.tempo);
    setTempo(segundos);
  }

  function tarefaFinalizada() {
    if (idSelecionado) {
      setLista((listaAnterior: ITarefa[]) =>
        listaAnterior.map((itemAnterior: ITarefa) => (
          itemAnterior.id === idSelecionado ? { ...itemAnterior, selecionado: false, completado: true } : itemAnterior
        )))
      setTempo(0);
    }
  } 

  return (
    <div className={styles.AppStyle}>
      <Form setLista={setLista} />
      <Cronometro tempoFinalizado={tarefaFinalizada} tempo={tempo} />
      <Lista lista={lista} abreItem={selecionaItem} />
    </div>
  );
}