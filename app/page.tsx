import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center font-title">
      <div className="flex flex-row items-center">
        <Link href="/performing" className="px-2 py-1 my-2 text-3xl font-bold border-r-3 hover:underline">Performer</Link>
        <Link href="/teaching" className="px-2 my-2 text-3xl font-bold hover:underline">Teacher</Link>
      </div>
      <Image alt="Eoghan Kelly" width={300} height={400} src={"https://fillmurray.lucidinternets.com/300/400"}/>
    </div>
  );
}
