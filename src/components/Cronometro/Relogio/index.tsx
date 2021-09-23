import styles from './style.module.scss'

interface IRelogio {
  totalSegundos: number
}

export const Relogio = ({ totalSegundos }: IRelogio) => {

  const minutos = ('0' +  Math.floor(totalSegundos / 60)).slice(-2);
  const segundosRestantes = ('0'+ totalSegundos % 60).slice(-2);
  const [minutoEsquerdo, minutoDireito] = minutos.split('');
  const [segundoEsquerdo, segundoDireito] = segundosRestantes.split('');

  return (
    <>
      <span className={styles.relogioNumero}>{minutoEsquerdo}</span>
      <span className={styles.relogioNumero}>{minutoDireito}</span>
      <span className={styles.relogioDivisao}>:</span>
      <span className={styles.relogioNumero}>{segundoEsquerdo}</span>
      <span className={styles.relogioNumero}>{segundoDireito}</span>
    </>
  );
}