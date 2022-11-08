import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

const Intro = () => {
  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Web Development', 'TypeScript', 'React', 'JavaScript']
    })
  }, [])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/avatar-svgrepo-com.svg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, my name is</h2>
          <h1>Pascal</h1>
          <h3>I am enthusiastic about <span ref={textRef}></span></h3>
        </div>
        <a href="#works">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro