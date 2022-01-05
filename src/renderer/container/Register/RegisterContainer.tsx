import {useRef} from "react"
import {useNavigate} from "react-router-dom"
import RegisterTemplate from "renderer/template/Register"

const RegisterContainer = () => {

  const idRef = useRef(null)
  const pwRef = useRef(null)
  const rePwRef = useRef(null)
  const nameRef = useRef(null)
  const birthRef = useRef(null)
  const navigate = useNavigate()

  const onRegisterClick = () => {

  }

  const onGoBackClick = () => {
    navigate("/")
  }

  return (
    <RegisterTemplate
      idRef={idRef}
      pwRef={pwRef}
      rePwRef={rePwRef}
      nameRef={nameRef}
      birthRef={birthRef}

      onRegisterClick={onRegisterClick}
      onGoBackClick={onGoBackClick}
    />
  )
}

export default RegisterContainer
