import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row mt-16 ">
        <Link href="/performing" className="m-2 text-lg font-medium">Performer</Link>
        <Link href="/teaching" className="m-2 text-lg font-medium">Teacher</Link>
      </div>
      <Image alt="Eoghan Kelly" width={200} height={300} src={"https://fillmurray.lucidinternets.com/g/200/300"}/>
    </div>
  );
}
