import React from "react"
import {Route, Routes} from "react-router-dom"
import AuthPage from "../page/Auth"
import {useRecoilValue} from "recoil"
import {Auth_Status} from "../recoil/index"
import {AUTH} from "../type/index"
import VerifyPage from "../page/Verify"
import HomePage from "renderer/page/Home"


type Props = {
  security: AUTH[]
}

const VerifyRouter = (props: Props) => {

  const role = useRecoilValue(Auth_Status)

  return (
    <Routes>
      <Route path="/verify" element={props.security.includes(role) ? <VerifyPage/> : <HomePage/>}></Route>

    </Routes>
  )
}

export default VerifyRouter
