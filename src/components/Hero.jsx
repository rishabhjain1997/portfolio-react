import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Hero = () => {
  return (
    <div
      className="min-h-screen w-full bg-black bg-center object-contain bg-no-repeat
      hero-section flex flex-row justify-between px-7 md:px-10 pb-8 md:pb-12 items-end lg:items-start lg:flex-col lg:justify-center lg:px-24 xl:px-56"
    >
      <div className="flex flex-col space-y-1 md:space-y-3 font-semibold text-base-100 lg:text-black  lg:space-y-2">
        <p className="text-lg md:text-2xl lg:text-4xl lg:font-bold lg:mb-10 xl:mb-14">
          Hi, I am
        </p>
        <p className="text-3xl  md:text-5xl lg:text-6xl xl:text-7xl lg:font-bold lg:mb-8">
          Rishabh Jain
        </p>
        <p className="text-sm  md:text-lg lg:text-2xl font-extrabold lg:text-gray-400">
          Fullstack Developer
        </p>
      </div>
      <div className="flex flex-col  space-y-8 text-base-100  lg:flex-row lg:space-y-0 lg:space-x-8 lg:text-black lg:mt-32">
        <FontAwesomeIcon
          icon={faAt}
          className="text-base-100 h-6  md:h-10 md:w-10 w-6 lg:text-black lg:bg-[#C4C4C4] lg:p-2"
        />
        <FontAwesomeIcon
          icon={faGithub}
          className="text-base-100  md:h-10 md:w-10 h-6 w-6  lg:text-black lg:bg-[#C4C4C4] lg:p-2"
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-base-100 h-6 w-6  md:h-10 md:w-10  lg:text-black lg:bg-[#C4C4C4] lg:p-2"
        />
      </div>
    </div>
  )
}

export default Hero
