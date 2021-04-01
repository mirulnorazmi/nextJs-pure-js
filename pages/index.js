import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react'

function countInitial(){
  console.log("Render function Count");
    return 4
}

export default function Home() {

  /*const [count, setCount] = useState(countInitial()); //render on every run */
  const [count, setCount] = useState(() => countInitial()); //render on first run

  function decrementCount(){
    setCount(prevCount => prevCount - 1)
  }
  function incrementCount(){
    setCount(prevCount => prevCount + 1)
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}
