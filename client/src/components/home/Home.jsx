import React from 'react'

import Feed from './feed/Feed'
import Form from './form/Form'

const Home = () => {
  return (
    <div className="bg-green-900 grid gap-4 grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 h-screen">
      <Feed />
      <Form />
    </div>
  )
}

export default Home