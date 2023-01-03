import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logotitle from '../../assets/images/logo.png'
import AnimatedLetters from '../AnimatedLetters'
import "./index.scss"
function Home() {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['I','l', 'y', 'e', 's ',' ','b', 'e','n',' ','a','i','c','h','a']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

   useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
     }, 4000)
  }, [])
  
  return (
    <div className='container home-page'>
    <div className='text-zone'>
    <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <br/>
            <img
              src={logotitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / JavaScript Developer / Back End Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
    </div>
  
     </div>
  )
}

export default Home