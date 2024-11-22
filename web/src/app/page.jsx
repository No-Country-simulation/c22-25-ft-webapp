import Link from "next/link";
export default function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <nav>
        <ul className="flex gap-4 underline">
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
          <li>
            <Link href={"/register"}>Register</Link>
          </li>
          <li>
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
