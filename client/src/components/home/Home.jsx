import React from 'react'

import Feed from './feed/Feed'
import Form from './form/Form'

const Home = () => {
  return (
    <div className="bg-lime-600 gap-4 grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 h-min md:h-full">
      <Feed />
      <Form />
    </div>
  )
}

export default Home