import React from 'react'

const Feed = () => {
  return (
    <div className="container flex flex-col w-11/12 mx-auto bg-sky-400 rounded-xl shadow border-black md:py-12 m-12 place-items-center p-4 h-full md:h-5/6">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Bot Feed
        </p>
      <iframe allowfullscreen title="water-use-bot" sandbox="allow-top-navigation allow-scripts" width="95%" height="80%" src="https://www.mastofeed.com/apiv2/feed?userurl=https%3A%2F%2Fbotsin.space%2Fusers%2Fteedoff&theme=dark&size=100&header=true&replies=false&boosts=false"></iframe>
    </div>
    
  )
}

export default Feed