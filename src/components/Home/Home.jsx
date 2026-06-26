import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"
import { TypeAnimation } from "react-type-animation";
import {useGSAP} from "@gsap/react"
import gsap from "gsap"


function Home() {

  useGSAP(()=> {
    let tl1 = gsap.timeline();
    tl1.from(".line1", {
      y:80,
      duration:1,
      opacity:0
    })

    tl1.from(".line2", {
      y:80,
      duration:1,
      opacity:0
    })

    tl1.from(".line3", {
      y:80,
      duration:1,
      opacity:0
    })

    gsap.from(".righthome img", {
      x: 200,
      duration: 1,
      opacity: 0
    })
  })
  return (
    <div id="home">
      <div className="lefthome">
          <div className="homedetails">
            <div className="line1">I'M</div>
            <div className="line2">KRISHNA</div>
            <div className="line3">
              <TypeAnimation
                sequence={[
                  500, // typing delay before first text
                  "WEB DEVELOPER",
                  1000, // erase delay
                  "",
                  500,
                  "AI ENGINEER",
                  1000,
                  "",
                  500,
                  "DATA SCIENTIST",
                  1000,
                  "",
                ]}
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </div>

            <button>HIRE ME</button>
            
          </div>
      </div>
      <div className="righthome">
          <img src={man} alt="" />
      </div>
    </div>
  )
}

export default Home
