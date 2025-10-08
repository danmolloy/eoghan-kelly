'use client'

import { useState } from "react"
import MenuIcon from "./menuIcon"
import Link from "next/link"
import { CiLinkedin } from "react-icons/ci"


export default function MenuContainer() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center ">
      <MenuIcon showMenu={showMenu} setShowMenu={() => setShowMenu(!showMenu)}/>
      
      {showMenu && <div className={"flex flex-col justify-center items-center absolute left-0 top-12 bg-gray-50 z-10 w-screen outline   bottom-0"}>
        <Link className="p-4 text-2xl font-medium hover:underline" href={"/performing"} onClick={() => setTimeout(setShowMenu, 200)}>Performing</Link>
        <Link className="p-4 text-2xl font-medium hover:underline" href={"/teaching"} onClick={() => setTimeout(setShowMenu, 200)}>Teaching</Link>
        <Link className="p-4 text-2xl font-medium hover:underline" href={"/contact"} onClick={() => setTimeout(setShowMenu, 200)}>Contact</Link>
      </div>}
    </div>
  )
}