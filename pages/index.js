import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react'

// function countInitial(){
//   console.log("Render function Count");
//   const count = 4;
//   const theme = "blue";
// }

export default function Home() {

  /*const [count, setCount] = useState(countInitial()); //render on every run */
  const [state, setState] = useState({count: 4, theme: "blue"}); //render on first run
  const count = state.count;
  const theme = state.theme;

  function decrementCount(){
    //setCount(prevCount => prevCount - 1)

   setState(prevState => {
     return {...prevState ,count: prevState.count -1, theme: "blue"}
   })
  }
  function incrementCount(){
    //setCount(prevCount => prevCount + 1)
    setState(prevState => {
      return {...prevState ,count: prevState.count +1 , theme: "red"}
    })
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}
