import React, { useState } from "react"
import appLogo from "../../assets/portfolio_icon.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <div className="absolute w-full">
      <div className="h-14 bg-black w-full flex flex-row px-7 items-center justify-between">
        <img src={appLogo} alt="logo" className="h-12 w-12" />
        <FontAwesomeIcon
          icon={!isNavOpen ? faBars : faXmark}
          className="text-base-100 h-7 w-7"
          onClick={(e) => {
            setIsNavOpen((prev) => !prev)
          }}
        />
      </div>
      <div
        className={`relative bg-opacity-80 bg-gray-700 flex-col items-center ${
          isNavOpen ? "flex" : "hidden"
        }`}
      >
        <div className="h-14 flex flex-row items-center justify-center text-base-100 font-semibold  hover:bg-gray-900 hover:bg-opacity-30 w-full border-2 border-transparent hover:border-red-300">
          About me
        </div>
        <div className="h-14 flex flex-row items-center justify-center  text-base-100  font-semibold  hover:bg-gray-900 hover:bg-opacity-30 w-full  border-2 border-transparent hover:border-red-300">
          Skills
        </div>
        <div className="h-14 flex flex-row items-center justify-center  text-base-100  font-semibold hover:bg-gray-900 hover:bg-opacity-30 w-full  border-2 border-transparent hover:border-red-300">
          Portfolio
        </div>
        <div className="h-14 flex flex-row items-center justify-center  font-semibold bg-base-100 hover:bg-base-300 w-full  border-2 border-transparent hover:border-red-300">
          CONTACT ME
        </div>
      </div>
    </div>
  )
}

export default Navbar
