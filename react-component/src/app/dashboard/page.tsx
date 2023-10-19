import Link from "next/link"

function message(): string {
  return 'Esta é a página de Dashboard'
}

export default function dashboard() {
  return(
    <main>  
      <Link href="/"><button type="button">Home</button></Link>
      <br />
      <br />
      <h1>{message()}</h1>
    </main>
  )
}
