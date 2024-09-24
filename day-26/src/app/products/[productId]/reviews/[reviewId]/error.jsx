"use client";

import React from 'react'

const ErrorHandle = ({error, reset}) => {
  return (
    <div>
    <h1>
    we got error in fetching the data - {error.message}
    </h1>
      <button className="btn" onClick={reset} >Reset</button>
      <code className="bg-red-500 px-5 py-1" >Error from Products/reviews error.jsx</code>
    </div>
  )
}

export default ErrorHandle
