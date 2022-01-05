import {useRef} from "react"
import { useSetRecoilState } from "recoil"
import { Auth_Status, User_Info } from "renderer/recoil"
import AuthTemplate from "renderer/template/Auth"
import {AUTH} from "../../type/index"



const AuthContainer = () => {

  const idRef = useRef(null)
  const pwRef = useRef(null)
  const setAuthStatus = useSetRecoilState(Auth_Status)
  const setUserInfo = useSetRecoilState(User_Info)

  const onLoginClick = () => {
    //개발자용
    setAuthStatus(AUTH.USER)
    setUserInfo({
      id: "yongwon0824",
      name: "최용원",
      birth: "2001-08-24"
    })
  }

  return (
    <AuthTemplate
      idRef={idRef}
      pwRef={pwRef}
      onLoginClick={onLoginClick}
    />
  )
}

export default AuthContainer
