import React from "react"
import {Route, Routes} from "react-router-dom"
import AuthPage from "../page/Auth"
import {useRecoilValue} from "recoil"
import {Auth_Status} from "../recoil/index"
import {AUTH} from "../type/index"
import RegisterPage from "../page/Register"
import Page403 from "renderer/page/Error/403"


type Props = {
  security: AUTH[]
}

const RegisterRouter = (props: Props) => {

  const role = useRecoilValue(Auth_Status)

  return (
    <Routes>
      <Route path="/register" element={props.security.includes(role) ? <RegisterPage/> : <Page403/>}></Route>

    </Routes>
  )
}

export default RegisterRouter
