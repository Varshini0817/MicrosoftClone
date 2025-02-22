import './App.css';
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'

function App() {
  return (
    <div>
      <First/>
      <div className='bg-violet-100 h-full'>
        <Second/>
        <Third/>
      </div>
    </div>
  )
}

export default App
