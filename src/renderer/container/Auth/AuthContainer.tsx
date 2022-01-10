import {useRef} from "react"
import AuthTemplate from "renderer/template/Auth"
import {useNavigate} from "react-router-dom"
import { UserTemp_Info } from "renderer/recoil"
import {useRecoilState} from "recoil"



const AuthContainer = () => {

  const nameRef = useRef<any>(null)
  const genderRef = useRef<any>(null)
  const birthRef = useRef<any>(null)
  const navigate = useNavigate()
  const [userTempInfo, setUserTempInfo] = useRecoilState(UserTemp_Info)

  const onLoginClick = () => {
    //개발자용
    // console.log(nameRef)

    const name = nameRef.current.value
    const gender = genderRef.current.value
    const birth = birthRef.current.value
    setUserTempInfo({ name, gender, birth })
    navigate("/verify")
  }

  return (
    <AuthTemplate
      nameRef={nameRef}
      genderRef={genderRef}
      birthRef={birthRef}

      onLoginClick={onLoginClick}
    />
  )
}

export default AuthContainer
