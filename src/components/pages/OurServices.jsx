import React from 'react'
import Title from '../Title'
import { AlignEndHorizontal, TabletSmartphone } from 'lucide-react'
import ParentComonent from '../ParentComonent'


const ArrayServices = [
    {titleAr:"",infoAr:"",
    titleEn:"Responsive Site",infoEn:"A site that supports all screen sizes from mobile phones to computers,"
        ,icon:<TabletSmartphone color='orange' size={70} />},
    {titleAr:"",infoAr:"",
    titleEn:"Flexible Site",infoEn:"Flexible and streamlined website design with ease for the user",
        icon:<AlignEndHorizontal color="green" size={70} />},
]
const OurServices = () => {
  return (
    <ParentComonent>
      <Title id="OurServices" title={"Our Services"} />

      <div className='flex justify-center items-center flex-wrap p-3'>
            {ArrayServices.map((item,idx)=>{

                return(
                    <div key={idx} className='w-full sm:w-1/2 md:w-1/3'>
                        <div className='w-[98%] bg-white h-full flex-col p-2 shadow-lg border'>
                              <div className='flex justify-center items-center min-h-10 mb-2'>
                                {item.icon}
                              </div>
                              <h2 className='mb-1 p-1 text-gray-600  text-lg md:text-2xl font-bold'>{item.titleEn}</h2>
                              <p className='mb-1 p-1 text-gray-500'>{item.infoEn}</p>
                        </div>
                    </div>
                )
            })

            }
      </div>
      </ParentComonent>
  )
}

export default OurServices
