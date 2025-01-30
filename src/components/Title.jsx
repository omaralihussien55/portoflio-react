import React from 'react'

const Title = ({title,id}) => {
  return (
    <div id={id} className='mb-9 p-2'>
      <h1  className='p-1 text-center text-3xl font-extrabold text-purple-900'>{title}</h1>
    </div>
  )
}

export default Title
