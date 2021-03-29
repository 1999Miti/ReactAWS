import React from 'react'
import web from '../src/images/logo.png'

import Common from '../src/Common'

export const Home = () => {
    return (
        <div>
        <Common 
        name = "Grow your business with"
        imgsrc = {web} 
        visit = "/contact"
        btname = "Get Started" />
        </div>
    )
}

export default Home