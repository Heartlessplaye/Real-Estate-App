import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import  SignIn from './pages/SignIn'
import Contact from './pages/Contact'
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/sigIn' element={<SignIn/>}/>
      <Route path='/signOut' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
  )
}
