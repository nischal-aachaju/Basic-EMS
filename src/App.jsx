import React, { useState } from 'react'

const App = () => {
  const [val, setVal] = useState("")
  return (

    <div className=' h-screen w-full flex justify-center items-center'>
      <div >
        <input value={val} onChange={(e) => {
          setVal(e.target.value);

        }}
          className=' h-10 border-2' type="text" name="" id="" />
        <button className=' border rounded-2xl px-6 py-1 bg-blue-500'>Submit</button>
        <button
          onClick={(e) => {
            console.log("geef");
            setVal("")
          }} className=' border rounded-2xl px-6 py-1 bg-blue-500'>reset</button>
      </div>
    </div>
  )
}

export default App
