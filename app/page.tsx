import Image from 'next/image'
import {Cli1} from "@/app/cli1";
import {Cli2} from "@/app/cli2";
export const dynamic = 'force-dynamic';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {Math.random() > 0.5 ? <Cli1/> : <Cli2/>}
    </main>
  )
}
