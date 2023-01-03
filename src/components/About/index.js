import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";

const About =()=>{
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
         }, 4000)
      }, [])
    return (
        <div className="container about-page">
            <div className="text-zone">
        <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','m','e']}
                idx={15}
            />
        </h1>
            <p>I'm very ambitious front-end developer looking for a role in established IT company
            with the opportunity to work with the latest technologies on challenging and diverse projects
            </p>
            <p>I'm quielty confident,naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
            <p>If i need to define mysel in one snetence that would be a family person , married , a sports fanatic</p>
            </div>
        </div>
    )
}
export default About;