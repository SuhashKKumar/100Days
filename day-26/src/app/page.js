import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      Home Page!!
      <Link href="/blog" ><button className="btn" >Blog Page</button></Link>
      <Link href="/products" ><button className="btn" >Products Page</button></Link>
    </div>
  )
}

export default Home
