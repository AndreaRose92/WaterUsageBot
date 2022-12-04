import React from 'react'

const Feed = () => {
  return (
    <div className="container bg-blue-200 p-16">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Bot Feed
      </p>
      <iframe allowfullscreen sandbox="allow-top-navigation allow-scripts" width="400" height="800" src="https://www.mastofeed.com/apiv2/feed?userurl=https%3A%2F%2Fbotsin.space%2Fusers%2Fteedoff&theme=dark&size=100&header=true&replies=false&boosts=false"></iframe>
    </div>
  )
}

export default Feed