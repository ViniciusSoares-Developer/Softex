import Link from "next/link"

function message(): string {
  return 'Esta é a página Home'
}

export default function Home() {
  return(
    <main>
      <Link href="/dashboard"><button type="button">Dashboard</button></Link>
      <br />
      <h1>{message()}</h1>
    </main>
  )
}
