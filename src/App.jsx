import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../layout/Header'
import Banner from '../layout/Banner'
import Cards from '../layout/Cards'
import Cards2 from '../layout/Cards2'



function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <Header></Header>
    <Banner></Banner>
    <Cards 
      image="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/colin-watts-M1ObxvsWVhY.webp"
       flag="https://s.w.org/images/core/emoji/16.0.1/svg/1f1ee-1f1e9.svg"
        country="Kazakhstan"
        title="Caspian Sea Beach, Aktau"
        subtitle="A Unique Seaside Escape in Central Asia"
        price="1,580"
        duration="9"
        >
        
  
     
      
    </Cards>
    <Cards2></Cards2>
 
  </>
  )
}

export default App
