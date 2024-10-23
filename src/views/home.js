import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Global Creative Specialist</title>
        <meta property="og:title" content="Global Creative Specialist" />
      </Helmet>
    </div>
  )
}

export default Home
