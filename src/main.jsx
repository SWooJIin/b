
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from './commons/Layout'
import Home from './pages/Home'
import './index.css'
import A from './pages/A'


createRoot(document.getElementById('root')).render(
<BrowserRouter> 
 <Routes>
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='/:id' element={<A/>}/>
  </Route>
 </Routes>
</BrowserRouter>

)
