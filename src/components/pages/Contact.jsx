import React ,{useEffect,useState} from 'react'
import * as motion from "motion/react-client"
import { Facebook, Github, Instagram, Linkedin, MailIcon, Phone, Youtube } from "lucide-react"
import ParentComonent from '../ParentComonent'
import Title from '../Title'
const Contact = () => {
  return (
    <ParentComonent>
        <Title id={"Contact"} title={"Contact"} />

<div className='w-[70%] mx-auto '>

      <div className='flex justify-center flex-wrap  p-5 bg-white rounded-lg'>
           
           <div  className='w-full  md:w-1/2  mb-2'>
              <Mail/>
           </div>

           <div  className='w-full  md:w-1/2 mb-2'>
              <Social />
           </div>
      
</div>

</div>
        
    </ParentComonent>
  )
}

export default Contact

const Social = ()=>{
    return(
        <div className='w-[98%]'>
           <Reordering />
        </div>
    )
}

const Mail = ()=>{
    return(
        <div className='w-[98%]  md:w-[60%] lg:w-[50%]'>
            <div className='flex-col justify-between'>
                <div className='p-2 flex items-center gap-3 mb-2 rounded-lg'>
                    <Phone size={20} />
                    <p className='text-gray-500'>01093389354</p>
                </div>
                <div className='p-2  flex items-center gap-3 mb-2'>
                    <MailIcon size={20} />
                    <p className='text-gray-500 text-sm md:text-lg'>omaralihussien55@gmail.com</p>
                </div>
            </div>
        </div>
    )
}




const  Reordering =()=> {
    const [order, setOrder] = useState(initialOrder)

    useEffect(() => {
        const timeout = setTimeout(() => setOrder(shuffle(order)), 2500)
        return () => clearTimeout(timeout)
    }, [order])

    return (
        <ul style={container}>
            {order.map((items,idx) => (
                
                <motion.li
                  
                    key={items.color}
                    layout
                    transition={spring}
                    style={{ ...item,backgroundColor:items.color }}
                    className='flex justify-center items-center cursor-pointer'
                >
                    <a href={items.link} target="_blank" className='w-full h-full flex justify-center items-center'>
                    {items.icon}
                    </a>
                </motion.li>
            ))}
        </ul>
    )
}

const initialOrder = [
    {color:"blue",icon: <Facebook size={25} color='white' />,link:"https://www.facebook.com/profile.php?id=100006160620281"},
    {color:"rgb(29, 120, 184)",icon:<Linkedin size={25} color='white' />,link:"https://www.linkedin.com/in/omar-ali-22a43222a/"},
    {color:"#333",icon:<Github size={25} color='white' />,link:"https://github.com/omaralihussien55"},
    {color:"red",icon:<Youtube size={25} color='white' />,link:""},
]

/**
 * ==============   Utils   ================
 */
function shuffle([...array]) {
    return array.sort(() => Math.random() - 0.5)
}

/**
 * ==============   Styles   ================
 */

const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300,
}

const container = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    width: 150,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
}

const item = {
    width: 50,
    height: 50,
    borderRadius: "7px",
}

