import Routers from "./router/index"
import {createGlobalStyle} from "styled-components"
import normalize from "styled-normalize"

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

  return (
    <>
      <GlobalStyle/>
      <Routers/>
    </>
  );
}
