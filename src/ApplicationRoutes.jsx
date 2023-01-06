/*npm i nanoid
npm i phosphor-react
npm i react-icons
*/
//export default ApplicationRoutes

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Menu from './componentes/Menu/Menu'
import Rodape from './componentes/Rodape/Rodape'
import Inicio from './pages/Inicio/Inicio'
import Sobre from './pages/Sobre/Sobre'
import Portfolio from './pages/Portfolio/Portfolio'
import Contatos from './pages/Contatos/Contatos'


function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contatos" element={<Contatos/>}/>
      </Routes>
      <Rodape/>
    </BrowserRouter>
  )
}

export default ApplicationRoutes