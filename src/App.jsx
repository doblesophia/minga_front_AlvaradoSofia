import './App.css'
import menu from '../public/assets/images/Menu.png'



export default function App() {
  return (
    <>
    
   
     <nav className='flex justify-between'>
      <img className='w-12 h-12' src="../public/assets/images/Menu.png" alt="" />
      <img className="w-12 h-12" src="../public/assets/images/Logo.svg" alt="" />
    </nav>
    <main >
  
        <div className='lg:w-full lg:h-48 lg:mt-8 lg:bg-gradient-to-b from-pink-300 to-pink-400 lg:flex hidden'>
          <img className='w-8' src="../public/assets/images/flechaDerecha.svg" alt="" />
          <img className='lg:w-72 lg:h-72 lg:-mt-20' src="../public/assets/images/NarutoSVG.svg" alt="" />
          <img className='lg:w-52 lg:h-52 lg:-mt-8 ml-12' src="../public/assets/images/posternaruto.svg" alt="" />
          
          <div className='lg:w-56 justify-start ml-28 pt-12'>
          <h3 className='text-white text-2xl text-left'>Shonen</h3>
          <p className='text-white text-xs text-left lg:w-80'>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
          </div>
          <img className='w-8 ml-72' src="../public/assets/images/flechaIzquierda.svg" alt="" />
        </div>
      
        <div className='mt-8 w-full h-screen bg-cover bg-center lg:h-96 lg:text-left justify-center items-center' style={{backgroundImage: "url('./assets/images/FondoNaruto.svg')"}}>
          <h1 className='text-white font-bold pt-52 lg:pt-24 md:text-3xl lg:pl-20 lg:text-6xl'>Live the emotion of the manga</h1>
          <h4 className='text-white text-sm md:text-lg lg:pl-20 lg:text-2xl'>Find the perfect manga for you</h4>
          <h4 className='text-white text-sm md:text-lg lg:pl-20'>#MingaForever 🔥</h4>
          <button className='text-white rounded-md bg-pink-400 w-28 mt-4 lg:ml-20'>Sing in!</button>
        </div>
    </main>
    
   
  </>
  )
}
