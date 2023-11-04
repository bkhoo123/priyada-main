"use client"
import React, {useState, useEffect} from 'react'

const AnimatedText = ({message, timer}) => {
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleChars((prev) => (prev < message.length ? prev + 1 : prev))
    }, timer)  // enter delay time in milliseconds here

    return () => clearInterval(interval)

  }, [message])



  return (
    <>
      {message.slice(0, visibleChars)}    
    </>
  )
}

export default AnimatedText