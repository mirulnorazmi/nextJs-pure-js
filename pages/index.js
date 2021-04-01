import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState , useEffect, useRef } from 'react'

// function countInitial(){
//   console.log("Render function Count");
//   const count = 4;
//   const theme = "blue";
// }

export default function Home() {

  /**useState Hook */
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

  /** useEffect Hook */
  const [resourceType, setResourceType] = useState('posts');

  useEffect(() => {
    console.log("resource changed");

    return () => {
      console.log("return from resource changed"); //for cleanup
    }
  },[resourceType])

  /** useRef Hook */
  const [name, setName] = useState('');
  const renderCount = useRef(1);
  const prevName = useRef('');
  const inputRef = useRef('')

  useEffect(() => {
    renderCount.current = renderCount.current +1
    prevName.current = name
  },[name])

  function focus(){
    inputRef.current.focus()
    inputRef.current.value = 'amirul'
  }

  if (typeof window !== "undefined") {
    var winWidth = window.innerWidth;
    // browser code
  }

  const [windowWidth, setWindowWidth] = useState(winWidth)

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth)
    return () => {
      window.removeEventListener('resize', updateWindowWidth)
    }
  }, [])
  
  return (
    <>
    <h2>useState Hook</h2>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
      <br />
    <h2>useEffect Hook</h2>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h3>{resourceType}</h3>
      <br />
      <h2>useRef Hook</h2>
      <div>
        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
        <div>My name is {name} and it used to be {prevName.current}</div>
        <div>i render {renderCount.current} times</div>
        <div>{inputRef.current.value}</div>
        <button onClick={focus}>Focus</button>
      </div>
      <br />
      <h3>Window width</h3>
      <div>Window Width: {windowWidth}</div>
    </>
  )
}
