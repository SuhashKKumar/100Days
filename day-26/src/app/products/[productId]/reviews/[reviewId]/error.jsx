"use client";

import React from 'react'

const ErrorHandle = ({error, reset}) => {
  return (
    <div>
    <h1>
    we got error in reviewId - {error.message}
    </h1>
      <button className="btn" onClick={reset} >Reset</button>
      <code className="bg-red-50 px-5 py-1" >Error from Poroducts/reviews error.jsx</code>
    </div>
  )
}

export default ErrorHandle
