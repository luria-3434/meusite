import styles from '../Inicio/inicio.module.css'
import inicioImg from '../../assets/undraw_appreciation_re_6k7g.svg'
import envelopeImg from '../../assets/undraw_envelope.svg'
import codeImg from '../../assets/undraw_code.svg'
import vidaImg from '../../assets/undraw_person.svg'

function Inicio() {
  return (
    <>
      <div className={styles.header}>
        <h1>
          Meu sitezinho
        </h1>
        <img src={inicioImg} />
      </div>
      <div className={styles.beneficios}>
    <section className={styles.content}>
      <div className={styles.cardsContainer}>
        <h2 className={styles.tituloCards}>Habilidades/ vida / Contato</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img className={styles.imagemCard} src={vidaImg}/>
            <div className={styles.textos}>
              <p className={styles.texto}>
              Eu conto um pouquinho sobre mim, minha formação, a história da minha migração de carreira, gostos e curiosidades.     
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.imagemCard} src={codeImg} />
            <div className={styles.textos}>
              <p className={styles.texto}>
              Mostro meu portfólio. Tudo o que aprendi até o momento dando destaque para alguns dos projetos que criei enquanto estudo programação.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.imagemCard} src={envelopeImg} />
            <div className={styles.textos}>
              <p className={styles.texto}>
              Entre em contato comigo. Seja para entrevistas de emprego como deva ou para trocarmos ideias sobre os estudos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
    </>
  )
}

export default Inicio