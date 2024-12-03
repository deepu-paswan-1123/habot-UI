import { useState } from 'react'
import Header from './Component/Header/Header'
import Hero from './Component/Hero/Hero'
import SectionTwo from './Component/Section2/Section_two'
import Youtube from './Component/youtube/youtube'
import SectionFour from './Component/Sectionfour/SectionFour'
import SectionFive from './Component/Sectionfive/SectionFive'
import './App.css'
import Footer from './Component/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Hero/>
     <SectionTwo/>
     <Youtube/>
     <SectionFour/>
     <SectionFive/>
     <Footer/>
    </>
  )
}

export default App;
