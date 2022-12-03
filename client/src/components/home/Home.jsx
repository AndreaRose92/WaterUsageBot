import React from 'react'

import Feed from './feed/Feed'
import Form from './form/Form'

const Home = () => {
  return (
    <div className="bg-green-900 grid gap-4 grid-cols-2 grid-rows-1 h-screen">
      <Feed />
      <div className="container flex flex-col w-11/12 mx-auto bg-blue-200 rounded-xl shadow border-black p-8 m-10 place-items-center">
        <p className="text-3xl text-gray-700 font-bold mb-5">
          Enter New Data
        </p>
        <div>
          <Form />
        </div>
      </div>
      
    </div>
  )
}

export default Home