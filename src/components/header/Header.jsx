import React from 'react'
import Button from '../Button'
import UseAnimationFrame from './UseAnimationFrame'
import pdf from "./cv2025.pdf"
const Header = () => {
  return (
    <div className='h-screen w-full bg-gradient-to-b from-blue-500 to-purple-600 '>
      <div className='w-11/12 mx-auto h-full'>
          <div className='flex h-full'>


               <Info/>


               <div className='hidden  h-full grow  md:flex justify-center items-center'>

                <UseAnimationFrame />
               </div>
          </div>
      </div>
    </div>
  )
}

export default Header


const Info = ()=>{
    return(
        <div className='h-full grow flex  '>
        <div className='m-auto text-start'>
            <div className='mb-2'>
            <h5 className='mb-1 p-1 text-gray-300'>welcome</h5>
            <h4 className='mb-1 p-1 text-gray-300'>i'm Omar </h4>
            <h1 className='mb-1 p-1 text-gray-200 text-3xl font-bold'>Front End Developer </h1>
            </div>
            <p className='text-gray-200 mb-4'>Building the front end of website and web applications</p>
            <div className='flex items-center gap-2 p-1'>
            <a href='#About' className='block w-20 p-2 bg-purple-600 shadow-md text-white rounded-lg text-center'>more</a>

            <a href={pdf} target="_blank" id="download" class=" border hover:bg-purple-600 hover:text-white transition-all border-purple-800 bg-white  shadow-md p-2 rounded-lg text-center block min-w-20  " >Download CV </a>
            </div>
        </div>
    </div>

    )
}