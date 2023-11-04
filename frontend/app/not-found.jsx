import Link from 'next/link'

// Next.js makes it so that any page not found will default to this component. This not-found.jsx file must always be inside the app directory. 

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}