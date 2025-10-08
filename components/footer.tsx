import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
  return (
    <div className="flex text-sm flex-row border-t justify-between items-end p-4 pt-8 text-gray-500 bg-gray-50 bottom-0 font-custom ">
      <p>Eoghan Kelly</p>
      <div className="flex flex-col items-end ">

        <a href="https://linkedin.com/">
          <CiLinkedin />
        </a>
        <Link className="hover:underline" href={"/performing"}>Contact</Link>
      </div>
    </div>
  )
}