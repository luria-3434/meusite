// import { useState, useEffect } from 'react'
// import { FiTrash2, FiPlus } from 'react-icons/fi'
// import { nanoid } from 'nanoid'

// import slowImg from '../../assets/roupaslow.jpg'

// import styles from './portfolio.module.css'

// const Portfolio = () => {
//   const getLocalList = () => {
//     let items = localStorage.getItem('list')
  
//     if (items) {
//       return JSON.parse(localStorage.getItem('list'))
//     } else {
//       return []
//     }
//   }
  
//   const [list, setList] = useState(getLocalList)
//   const [newTask, setNewTask] = useState('')

//   function handleCreateNewTask() {
//     const task = {
//       id: nanoid(),
//       title: newTask,
//       isComplete: false
//     }

//     if(task.title === '') {
//       return
//     }

//     setList([...list, task])
//     setNewTask('')
//   }

//   function handleRemoveTask(id) {
//     const tasksFiltered = list.filter(task => task.id !== id)
//     setList(tasksFiltered)
//   }

//   useEffect(() => {
//     localStorage.setItem('list', JSON.stringify(list))
//   }, [list])

//   return (
//     <>
//       <div className={styles.header}>
//         <h1>
//           Deixe sujestões de marcas Slow Fashion 
//         </h1>
//         <img src={slowImg} />
//       </div>
     
//       <div className={styles.inputContainer}>
//         <input 
//           className={styles.input}
//           type="text" 
//           placeholder="Deixe aqui sua sugestão" 
//           onChange={(e) => setNewTask(e.target.value)}
//           value={newTask}
//         />
//         <div className={styles.addContainer}>
//           <button className={styles.addTask} type="submit" onClick={handleCreateNewTask}>
//             <FiPlus size={18} color="#fff"/>
//           </button>
//         </div>
//       </div>
    
//       <main>
//         <ul className={styles.listItems}>
//           {list.map(task => {
//             return(
//               <li key={task.id}>
//                 <div>
//                   <p>{task.title}</p>
//                 </div>
//                 <button className={styles.removeTask} type="button" data-testid="remove-task" onClick={() => handleRemoveTask(task.id)}>
//                   <FiTrash2 size={16}/>
//                 </button>
//               </li>
//             )
//           })}
//         </ul>
//       </main>
//     </>
    
//   )
// }

// export default Portfolio





import { useState, useEffect } from 'react'
import portfolioImg from '../../assets/portfolio.svg'
import Axios  from 'axios'
import { ArrowBendDownRight } from 'phosphor-react'

import styles from '../../pages/Portfolio/portfolio.module.css'
import Inicio from '../Inicio/Inicio'


  function Portfolio() {
  const [repositories, setRepositories] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [reposFiltrados, setReposFiltrados] = useState([])

}
 export default Portfolio