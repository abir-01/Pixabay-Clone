import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/header/Header'
import Options from './components/Options/Options'
import Image from './components/image/Image'
import Images from './components/Images'
import { useState } from 'react'

const App = () => {

const [text, settext] = useState('  sdcbjhvb\svd')

  return (
    <>
    {/* <Navbar /> */}
      {/* <Header /> */}
      {/* <Options /> */}
      <Image  />
      {/* <Images/> */}
      </>
  )
}

export default App