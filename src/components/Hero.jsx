import React from 'react'

const Hero = () => {
  return (
    <div className="w-full h-[90vh] ">
      <img src="https://images.unsplash.com/photo-1462400362591-9ca55235346a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=832&q=80" alt=""
      className="w-full h-full object-cover" />
      <div className="max-w-[1140px] m-auto">
      <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
        <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
        <h2 className="text-4xl py-4 italic ">With Sunway</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt minus animi maxime alias cum in quo accusamus consequuntur ratione!</p>

       </div>
      </div>
      
    </div>
    
  )
}

export default Hero
