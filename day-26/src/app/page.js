import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      Home Page!!
      <Link href="/blog" ><button>Blog Page</button></Link>
      <Link href="/products" ><button>Products Page</button></Link>
    </div>
  )
}

export default Home
