import Routers from "./router/index"
import {createGlobalStyle} from "styled-components"
import normalize from "styled-normalize"
import { useEffect, useState } from "react"
import Splash from "./splash/index"

export default function App() {

  const GlobalStyle = createGlobalStyle`
    ${normalize}
    html, body{
      height: 100%;
      width: 100%;
    }

    #root{
      height: 100%;
      width: 100%;
    }

  `

  const [splash, setSplash] = useState(true)

  useEffect(()=>{
    if(splash){
      setTimeout(()=>{
        setSplash(false)
      }, 6000)
    }
  }, [splash])

  return (
    <>
      <GlobalStyle/>
      {
      splash ? <Splash/> : <Routers/>
      }
    </>
  );
}
