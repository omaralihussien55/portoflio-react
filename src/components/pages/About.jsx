import React from 'react'
import Title from '../Title'
import { AlignEndHorizontal, TabletSmartphone } from 'lucide-react'
import ParentComonent from '../ParentComonent'

import ph from "../imgs/Development-pana.png"

const ObjAbout= {
title1En:"I am Omar Ali,",title1ar:"",
info1En:"front-end developer interested in information technology and responsible for designing the visual appearance and usability of the website",
info1Ar:"",
title2En:"I have some skills",title2Ar:"",
info2En:"I have good knowledge of design and programming languages s​​uch as html, css, javascript, bootstrap, jquery, react ,redux-toolkit,typeScript,matrial ui, matrial table, react-query"
,info2Ar:"",
li1En:"I can design a responsive website for all screens",li1Ar:"",
li2En:"Ability to work on closed deadlines",li2Ar:"",
li3En:"Strong creative skills in web design",li3Ar:"",
li4En:"I have some work you can look at",li4Ar:"",
}
const About = () => {
  return (
    <ParentComonent>
      <Title id="About" title={"About"} />

      <div className='flex justify-center  p-3 flex-wrap'>
           
                    <div  className='w-full   md:w-1/2  lg:w-1/3 '>
                        <div className='w-[98%] bg-white border shadow-md  rounded-lg'>
                        <img src={ph} className='w-full ' />
                        </div>
                    </div>

                    <div  className='w-full  md:w-1/2 lg:w-1/3'>
                    <Info />
                    </div>
               
      </div>
      </ParentComonent>
  )
}

export default About

const Info = ()=>{

    return(
        <div className='w-[98%] bg-white h-full flex-col p-4 shadow-lg border justify-between text-start'>
            <div className='mb-2.5 '>
                  
             <h2 className='mb-1.5 text-lg md:text-2xl font-medium text-gray-700'>{ObjAbout.title1En}</h2>
             <p className='mb-2 text-gray-500'>{ObjAbout.info1En}</p>
            </div>
            <div className='mb-2.5 '>
                 
             <h4 className='mb-1.5 text-lg md:text-2xl font-medium text-gray-700'>{ObjAbout.title2En}</h4>
             <p className='mb-2 text-gray-500'>{ObjAbout.info2En}</p>
            </div>

             <ul className=''>
                <li className='mb-1.5 text-gray-400 text-md md:text-lg'>{ObjAbout.li1En}</li>
             </ul>

             <a href='#Projects' className='block w-20 p-2 bg-orange-600 text-white rounded-lg text-center'>view</a>
         </div>
    )
  }