import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";


export default function Header() {
  return (
    <div className="border-b w-screen flex flex-row justify-between items-center px-2 h-12">
      <Link href={"/"} className="font-medium text-lg">EOGHAN KELLY</Link>
      <div className="flex flex-row items-center">
        <Link className="mr-2 hover:underline" href={"/performing"}>Performing</Link>
        <Link className="mr-2 hover:underline" href={"/teaching"}>Teaching</Link>
        <Link className="mr-2 hover:underline" href={"/contact"}>Contact</Link>
        <a className=""  href="https://linkedin.com/">
          <CiLinkedin size={20}/>
        </a>
      </div>
    </div>
  )
}