import React, { useState } from "react"
import appLogo from "../../assets/portfolio_icon.png"
import appLogoGray from "../../assets/portfolio_icon_gray.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <div className="absolute w-full">
      <div className="h-14 bg-transparent w-full flex flex-row px-7 items-center justify-between lg:hidden">
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
        } lg:hidden`}
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
      <div className="hidden lg:flex h-24 xl:h-32 bg-transparent px-24 xl:px-56 flex-row justify-between items-center">
        <img src={appLogoGray} alt="logo" className="h-16 w-16" />
        <div className="flex flex-row justify-between lg:space-x-4 xl:space-x-12">
          <div className="px-4 py-2 text-base-100 font-semibold  hover:bg-gray-900 hover:bg-opacity-30 border-2 border-transparent hover:border-red-300">
            About me
          </div>
          <div className="px-4 py-2 text-base-100  font-semibold  hover:bg-gray-900 hover:bg-opacity-30 border-2 border-transparent hover:border-red-300">
            Skills
          </div>
          <div className="px-4 py-2 text-base-100  font-semibold hover:bg-gray-900 hover:bg-opacity-30 border-2 border-transparent hover:border-red-300">
            Portfolio
          </div>
          <div className="px-4 py-2 font-semibold bg-base-100 hover:bg-base-300 border-2 border-transparent rounded-lg">
            CONTACT ME
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
