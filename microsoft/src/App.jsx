import './App.css';
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'

function App() {
  return (
    <div className='flex flex-col'>
      <First/>
      <div className="bg-gradient-to-b from-purple-200 to-white m-0">
        <Second/>
        <Third/>
      </div>
    </div>
  )
}

export default App
