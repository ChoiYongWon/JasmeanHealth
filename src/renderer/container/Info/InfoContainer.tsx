import {useRef} from "react"
import {useNavigate} from "react-router-dom"
import InfoTemplate from "renderer/template/Info"

const InfoContainer = () => {

  const idRef = useRef(null)
  const pwRef = useRef(null)
  const rePwRef = useRef(null)
  const nameRef = useRef(null)
  const birthRef = useRef(null)
  const navigate = useNavigate()

  const onEditClick = () => {

  }

  const onGoBackClick = () => {
    navigate("/")
  }

  return (
    <InfoTemplate
      idRef={idRef}
      pwRef={pwRef}
      rePwRef={rePwRef}
      nameRef={nameRef}
      birthRef={birthRef}

      onEditClick={onEditClick}
      onGoBackClick={onGoBackClick}
    />
  )
}

export default InfoContainer
