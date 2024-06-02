import React, { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Collection from './components/Collection'
import Footer from './components/Footer'
import { Gents,Ladies } from './data'
import Womanfa from './components/Womanfa'


const Mainpage = () => {
const[gentsFashion,setFashion]=useState(Gents)

const [womanFashion,setwoman]=useState(Ladies)

   console.log(Ladies)
  return (
    <div>
    <Header/>
    <Banner/>
    <Collection gentsFashion={gentsFashion}/>
    <Womanfa  womanFashion={womanFashion}/>
    <Footer/>
    

    </div>

  )
}

export default Mainpage