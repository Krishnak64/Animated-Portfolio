import React from 'react'
import Card from '../Card/Card'
import "./Project.css"
import vybe from "../../assets/vybe.png"
import snap from "../../assets/snap.png"
import gym from "../../assets/gym.png"
import exam from "../../assets/exam.png"
import meet from "../../assets/meet.png"
import hotal from "../../assets/hotal.png";
import flappy from "../../assets/flappy.png"
import {useGSAP} from "@gsap/react"
import { ScrollTrigger } from 'gsap/all'
import gsap from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

function Project() {
  useGSAP(()=> {
    gsap.from("#para", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger:1,
      scrollTrigger: {
        trigger: "#para",
        scroll: "body",
        scrub:2,
        start: "top 80%",
        end: "top 30%"
      }
    })

    gsap.from(".slider", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger:1,
      scrollTrigger: {
        trigger: ".slider",
        scroll: "body",
        scrub:2,
        start: "top 80%",
        end: "top 30%"
      }
    })


  })
  return (
    <div id='projects'>
      <h1 id="para">1+ YEARS LEARNING FULL-STACK DEVELOPMENT &nbsp;  & &nbsp; 2+ AI/ML APPLICATIONS DEVELOPED</h1>
      <div className="slider">
          <Card title="VYBE-SOCIAL MEDIA APP" image={vybe} link="https://vybe-s6ib.onrender.com/signin"/>
          <Card title="SNAPCLASS AI ATTENDANCE" image={snap} link="https://snapclass-ai-attendance-landing-pag.vercel.app/"/>
          <Card title="AI REALTIME GYM COACH" image={gym} link="https://ai-gym-coach-live.netlify.app/"/>
          <Card title="EXAM NOTES AI" image={exam} link="https://examnotesaiclient-vl8k.onrender.com/auth"/>
          <Card title="MEETHUB VIDEO CALL" image={meet} link="https://meethubvideocallfrontend.onrender.com/"/>
          <Card title="WANDERLUST-AIRBNB" image={hotal} link="https://airbnb-clone-working-major-project.onrender.com/"/>
          <Card title="FLAPPY BIRD" image={flappy} link="https://github.com/Krishnak64/FlappyBird_RL"/>
      </div>
    </div>
  )
}

export default Project
