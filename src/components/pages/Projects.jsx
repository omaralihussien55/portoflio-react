import React from 'react'
import ParentComonent from '../ParentComonent'
import Title from '../Title'
import { ArrayProject } from '../db'
import Button from '../Button'
const Projects = () => {
  return (
    <ParentComonent>
       <Title id="Projects" title={"Projects"} />

       <div className='flex flex-wrap'>
           {
            ArrayProject.map((item,idx)=>{
                return(
                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-2.5'>
                        <div className='w-[98.5%] shadow border h-full bg-white'>
                            <div className='flex-col justify-between h-full p-2.5 '>
                               <div className='h-14 mb-2 flex justify-center items-center'>
                                    <div className='size-12 rounded-full overflow-hidden'>
                                        <img src={item.photo}  className='w-full h-full' alt={item.title} />
                                    </div>
                               </div>
                               <div className='mb-1.5  grow '>
                                    <h3 className='mb-1 p-1 text-gray-800 text-lg'>{item.title}</h3>
                                    <p className='p-1 text-gray-500 text-sm'>{item.info}</p>
                               </div>
                               <div className=''>
                                 <a href={item.link} target="_blank"   className={"block p-1 w-full text-blue-800 text-lg bg-blue-50"} >visit</a>
                               </div>
                            </div>
                        </div>
                    </div>
                )
            })
           }
       </div>
      
    </ParentComonent>
  )
}

export default Projects
