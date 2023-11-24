
import './App.css'
import GenerMovieList from './components/GenerMovieList'
import Header from './components/Header'
import ProductionHouse from './components/ProductionHouse'
import Slider from './components/Slider'

function App() {


  return (
    <>
      <div className=''>
        <Header/>
        <Slider/>
        <ProductionHouse/>
        <GenerMovieList/>
      </div>
    </>
  )
}

export default App
