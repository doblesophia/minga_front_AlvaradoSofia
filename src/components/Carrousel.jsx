import React, { useEffect, useState } from 'react'
import ArrowLeft from './ArrowLeft'
import ArrowRight from './ArrowRight'
import axios from 'axios'




const Carrousel = () => {
  let [counter, setCounter] = useState(0)
  
  let [categories, setCategories]= useState([])

  let prev =()=>{(counter!==0) ? (setCounter(counter-1)) : (setCounter(categories.length-1))
  
  }
  let next = ()=>{(counter !==categories.length-1) ? (setCounter(counter +1)) : (setCounter(0))
     
  }

  function getData(){
    axios("http://localhost:8000/categories")
    .then(res=>{setCategories(res.data)
  })
    .catch((err=>console.log(err)))
    
  }

  useEffect(()=>{
    getData()
  }, [])
  
  return(
    
    <>
     
          <ArrowLeft fnIzquierda = {prev}/>
          <img className='lg:w-72 lg:h-72 lg:-mt-20' src={categories[counter]?.character_photo} alt="" />
          <img className='lg:w-52 lg:h-52 lg:-mt-8 ml-12' src={categories[counter]?.cover_photo} alt="" />
          
          <div className='lg:w-56 text-left ml-28 pt-12 '>
          <h3 className='text-white text-2xl text-left'>{categories[counter]?.name}</h3>
          <p className='text-white text-xs text-left lg:w-80'>{categories[counter]?.description}</p>
          </div>
          <ArrowRight fnDerecha = {next}/>
        
    </>
  )
}

export default Carrousel
