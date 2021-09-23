import { ITarefa } from '../../../types/Tarefa'
import styles from './style.module.scss'

interface IItem {
  item: ITarefa,
  index: number,
  abreItem: (item: ITarefa, index: number) => void
}

export const Item = ({ item, index, abreItem }: IItem) => {
  return (
    <li
      className={`${styles.item} ${item.selecionado ? styles.itemSelecionado : ""} ${item.completado ? styles.itemCompletado : ""}`}
      onClick={() => !item.completado && abreItem(item, index)}>
      <h3>{item.tarefa}</h3>
      <span>{item.tempo}</span>
      {item.completado && <span className={styles.concluido} aria-label="icone de concluido"></span>}
    </li>
  )
}