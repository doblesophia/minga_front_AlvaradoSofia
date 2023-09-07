import React from 'react'

const Footer = () => {
  return (
    <>
     <footer className='mt-12'>
      <div>
      <div className='hidden md:flex md:w-full md:h-48 md:bg-cover' style={{backgroundImage: "url('../../public/assets/images/imageFooterEstaSi.png')"}}></div>
      <div className='md:flex md:gap-8 md:justify-center'>
        <div className=' hidden md:flex md:gap-4 md:items-center md:text-left'>
        <p>Home</p>
        <p>Mangas</p>
        </div>
        <img className='hidden md:flex mt-6 ml-32' src="../../public/assets/images/Logo.svg" alt="" />
        <div className='flex flex-col ml-32'>
        <div className='hidden md:flex gap-8 mt-6 text-right'>
          <img src="../../public/assets/images/facebook-black.png" alt="" />
          <img src="../../public/assets/images/twitter-black.svg" alt="" />
          <img src="../../public/assets/images/vimeo-black.png" alt="" />
          <img src="../../public/assets/images/youtube-black.svg" alt="" />
          
        </div>
        <button className='hidden md:text-white md:flex justify-center items-center md:h-10 md:w-48 mt-4 md:bg-pink-400 rounded'>Donate <img src="../.../public/assets/images/heart.svg" alt="" /></button>
        </div>
      </div>
      </div>
      </footer>
    <footer>
    <div className="md:hidden bg-white w-full h-48 flex flex-col items-center justify-center mt-6 gap-2">
        
        <img className='w-12 h-12 ' src="../../public/assets/images/Logo.svg" alt="" />
        <p>Home</p>
        <p>Mangas</p>
        <div className=' flex gap-4'>
          <img src="../../public/assets/images/facebook-black.png" alt="" />
          <img src="../../public/assets/images/twitter-black.svg" alt="" />
          <img src="../../public/assets/images/vimeo-black.png" alt="" />
          <img src="../../public/assets/images/youtube-black.svg" alt="" />
        </div>
        <button className='h-10 w-20 text-white bg-pink-400 rounded'>Donate <img src="../.../public/assets/images/heart.svg" alt="" /></button>
      </div>
    </footer>
    </>
  )
}

export default Footer
