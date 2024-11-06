import Image from "next/image";
import { HomePage } from './components'

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-0  font-[family-name:var(--font-geist-sans)]">
      {/* <h1>Test</h1> */}
      <HomePage />
    </div>
  );
}
