import { Routes, Route } from 'react-router'
import './App.css'
import './styles.scss';
import Window from './components/Window';

function App() {

  return (
    <div id='app' className=''>
      <Window />
      <Routes>
        <Route path='/' />
        <Route path='/about' />
        <Route path='/contact' />
        <Route path='/features' />
        <Route path='/others' />
      </Routes>
    </div>
  )
}

export default App;