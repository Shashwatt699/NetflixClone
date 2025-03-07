import React from 'react'
import Navbar  from './components/Navbar'
import Hero1   from './components/Hero1'
import Hero2   from './components/Hero2'
import Hero3   from './components/Hero3'
import Hero4   from './components/Hero4'
import Footer  from './components/Footer'
const App = () => {
  return (
    <div classname='flex flex-col bg-black min-h-screen justify-center items-center'>
      <Navbar/>
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Footer />
    </div>
  )
}

export default App