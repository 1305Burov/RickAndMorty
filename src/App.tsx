import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CharacterPage from './pages/CharacterPage/CharacterPage';
import Home from './pages/Home/Home';

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home />} /> 
            <Route path='/character/:id' element={ <CharacterPage />} /> 
            <Route path='*' element={ <Navigate to='/' />} /> 
        </Routes>
    </BrowserRouter>
  )
}

export default App
