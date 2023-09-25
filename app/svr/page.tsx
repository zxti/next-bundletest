import Image from 'next/image'
import {Svr1} from "@/app/svr1";
import {Svr2} from "@/app/svr2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {Math.random() > 0.5 ? <Svr1/> : <Svr2/>}
    </main>
  )
}
