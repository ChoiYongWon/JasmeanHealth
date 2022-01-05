import React from "react"
import {Route, Routes} from "react-router-dom"
import AuthPage from "../page/Auth"
import {useRecoilValue} from "recoil"
import {Auth_Status} from "../recoil/index"
import {AUTH} from "../type/index"
import HomePage from "../page/Home"


type Props = {
  security: AUTH[]
}

const HomeRouter = (props: Props) => {

  const role = useRecoilValue(Auth_Status)

  return (
    <Routes>
      <Route path="/" element={props.security.includes(role) ? <HomePage/> : <AuthPage/>}></Route>

    </Routes>
  )
}

export default HomeRouter
