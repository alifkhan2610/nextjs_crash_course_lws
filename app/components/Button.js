"use client"
import React from 'react'

const Button = () => {
  return (
    <div>
      <button className="mt-5 bg-blue-400 rounded-sm px-2 py-1" onClick={()=> console.log('I have clicked here')}>Click Here</button>
    </div>
  )
}

export default Button
