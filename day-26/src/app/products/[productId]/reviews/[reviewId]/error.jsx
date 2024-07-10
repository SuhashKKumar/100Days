"use client";

import React from 'react'

const ErrorHandle = ({error, reset}) => {
  return (
    <div>
      we got error in reviewId - {error.message}
      <button className="btn" onClick={reset} >Reset</button>
    </div>
  )
}

export default ErrorHandle
