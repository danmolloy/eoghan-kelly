import Link from "next/link";
import MenuContainer from "./menuContainer";


export default function Header() {
  return (
    <div className="border-b z-20 w-screen flex flex-row justify-between items-center px-4 h-12">
      <Link href={"/"} className="font-medium text-lg font-title">Eoghan Kelly</Link>
      <MenuContainer />
    </div>
  )
}