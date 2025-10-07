import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
  return (
    <div className="flex flex-row border-t justify-between items-end p-2 text-neutral-500">
      <p>Eoghan Kelly</p>
      <div className="flex flex-col items-end">
        <Link className="hover:underline" href={"/performing"}>Performing</Link>
        <Link className="hover:underline" href={"/performing"}>Teaching</Link>
        <Link className="hover:underline" href={"/performing"}>Contact</Link>
        <a href="https://linkedin.com/">
          <CiLinkedin />
        </a>
      </div>
    </div>
  )
}