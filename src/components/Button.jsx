import React from 'react'

const Button = ({children,className}) => {
  return (
    <button className={`px-3 py-2 border-0 outline-none rounded-lg  ${className}`}>
      {children}
    </button>
  )
}

export default Button
