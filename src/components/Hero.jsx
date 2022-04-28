import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Hero = () => {
  return (
    <div
      className="min-h-screen w-full bg-black bg-center object-contain bg-no-repeat
      hero-section flex flex-row justify-between px-7 pb-8 items-end"
    >
      <div className="flex flex-col space-y-1 font-semibold text-base-100">
        <p className="text-lg">Hi, I am</p>
        <p className="text-3xl">Rishabh Jain</p>
        <p className="text-sm font-extrabold">Fullstack Developer</p>
      </div>
      <div className="flex flex-col space-y-8 text-base-100">
        <FontAwesomeIcon icon={faAt} className="text-base-100 h-6 w-6" />
        <FontAwesomeIcon icon={faGithub} className="text-base-100 h-6 w-6" />
        <FontAwesomeIcon icon={faLinkedin} className="text-base-100 h-6 w-6" />
      </div>
    </div>
  )
}

export default Hero
