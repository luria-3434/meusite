import mimImg from '../../assets/undraw_profile_pic_re_iwgo.svg'
import luriaImg from '../../assets/luria.jpg'
import styles from './sobre.module.css'

function Sobre() {
  return (
    <>
      <div className={styles.header}>
        <h1>
         Minha História
        </h1>
        <img src={mimImg} />
      </div>
      <div className={styles.subtitulo}>
        <img src={luriaImg}/>
        <p> 
        No início de 2022 já com mais experiência percebi que meus horizontes são ainda maiores, portanto decidi buscar novos desafios e aqui estou aprimorando meus conhecimentos com um novo proposito, atuar na área de tecnologia, acredito que a tecnologia é a uma ferramenta capaz de mudar as estruturas sociais, com proposito e equidade de oportunidades.
        <br></br>Atualmente estou me desenvolvendo em DEV Front-End, focada em cursos promovidos pelo movimento Black Money, pela iniciativa Preta Lab, pela Reprograma, pelo 
Programa Floripa Mais Tec, pelo Programaria e Google UX Design, além de me dedicar ao estudo da língua inglesa.
E aberta a novas oportunidades e experiências profissionais.
          .</p>
      </div>
    </>
 
  )
}

export default Sobre