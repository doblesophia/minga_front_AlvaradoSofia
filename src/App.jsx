import './App.css'
import menu from '../public/assets/images/Menu.png'



export default function App() {
  return (
    <>
    <div className="w-full h-screen bg-cover lg:hidden" style={{backgroundImage: "url('./assets/images/FondoMobile.svg')"}}>
      <nav className='flex justify-between'>
        <img className='w-12 h-12 mt-4 lg:hidden' src="../public/assets/images/Menu.png" alt="" />
        <img className="w-12 h-12 mt-4 lg:hidden" src="../public/assets/images/Logo.svg" alt="" />
      </nav>
      <div className='flex flex-col h-96 justify-center items-center lg:hidden'>
        <h1 className='text-white text-3xl font-bold flex lg:hidden'>Live the emotion of the manga</h1>
        <p className='text-white flex lg:hidden'>Find the perfect manga for you</p>
        <button className='text-white h-8 w-52 bg-gradient-to-b from-pink-300 to-pink-400 mt-4 rounded-xl lg:hidden'>Explore</button>
      </div>
    </div>
    <nav className='lg:flex justify-between hidden '>
      <img className='w-12 h-12' src="../public/assets/images/Menu.png" alt="" />
      <img className="w-12 h-12" src="../public/assets/images/Logo.svg" alt="" />
    </nav>
    <main >
  
        <div className='lg:w-full lg:h-48 lg:mt-8 lg:bg-gradient-to-b from-pink-300 to-pink-400 lg:flex hidden'>
          <img className='w-8' src="../public/assets/images/flechaDerecha.svg" alt="" />
          <img className='lg:w-72 lg:h-72 lg:-mt-20' src="../public/assets/images/NarutoSVG.svg" alt="" />
          <img className='lg:w-52 lg:h-52 lg:-mt-8 ml-12' src="../public/assets/images/posternaruto.svg" alt="" />
          
          <div className='lg:w-56 text-left ml-28 pt-12 '>
          <h3 className='text-white text-2xl text-left'>Shonen</h3>
          <p className='text-white text-xs text-left lg:w-80'>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
          </div>
          <img className='w-8 ml-72' src="../public/assets/images/flechaIzquierda.svg" alt="" />
        </div>
      
        <div className='mt-8 w-full h-screen bg-cover bg-center lg:h-96 lg:text-left lg:justify-center hidden lg:flex lg:flex-col' style={{backgroundImage: "url('./assets/images/FondoNaruto.svg')"}}>
          <h1 className='text-white font-bold pt-52 lg:pt-24  lg:pl-20 lg:text-6xl'>Live the emotion of the manga</h1>
          <h4 className='text-white text-sm md:text-lg  lg:pl-20 lg:text-2xl'>Find the perfect manga for you</h4>
          <h4 className='text-white text-sm md:text-lg  lg:pl-20 '>#MingaForever 🔥</h4>
          <button className='text-white rounded-md bg-pink-400 w-28 mt-4 lg:ml-20'>Sing in!</button>
        </div>
    </main>
    <footer className='mt-12'>
      <div>
      <div className='hidden md:flex md:w-full md:h-48 md:bg-cover' style={{backgroundImage: "url('./assets/images/imageFooterEstaSi.png')"}}></div>
      <div className='md:flex md:gap-8 md:justify-center'>
        <div className=' hidden md:flex md:gap-4 md:items-center md:text-left'>
        <p>Home</p>
        <p>Mangas</p>
        </div>
        <img className='hidden md:flex mt-6 ml-32' src="./assets/images/Logo.svg" alt="" />
        <div className='flex flex-col ml-32'>
        <div className='hidden md:flex gap-8 mt-6 text-right'>
          <img src="../public/assets/images/facebook-black.png" alt="" />
          <img src="../public/assets/images/twitter-black.svg" alt="" />
          <img src="../public/assets/images/vimeo-black.png" alt="" />
          <img src="../public/assets/images/youtube-black.svg" alt="" />
        </div>
        <button className='hidden md:text-white md:flex justify-center items-center md:h-10 md:w-48 mt-4 md:bg-pink-400 rounded'>Donate <img src="./assets/images/heart.svg" alt="" /></button>
        </div>
      </div>
      </div>
      </footer>
    <footer>
    <div className="md:hidden bg-white w-full h-48 flex flex-col items-center justify-center mt-6 gap-2">
        
        <img className='w-12 h-12 ' src="./assets/images/Logo.svg" alt="" />
        <p>Home</p>
        <p>Mangas</p>
        <div className=' flex gap-4'>
          <img src="../public/assets/images/facebook-black.png" alt="" />
          <img src="../public/assets/images/twitter-black.svg" alt="" />
          <img src="../public/assets/images/vimeo-black.png" alt="" />
          <img src="../public/assets/images/youtube-black.svg" alt="" />
        </div>
        <button className='h-10 w-20 bg-pink-400 rounded'>Donate</button>
      </div>
    </footer>
   
    
  </>
  )
}

    
   