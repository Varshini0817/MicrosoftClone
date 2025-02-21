import './App.css';
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'

function App() {
  return (
    <div>
      <First/>
      <div className='bg-violet-100 bg-gradient-to-t '>
        <Second/>
        <Third/>
      </div>
    </div>
  )
}

export default App
