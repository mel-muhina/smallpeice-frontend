import Image from "next/image";
import { HomePage } from './components'

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-6 pb-0 gap-0 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-blue-950 to-blue-1000">
      {/* <h1>Test</h1> */}
      <HomePage />
    </div>
  );
}
