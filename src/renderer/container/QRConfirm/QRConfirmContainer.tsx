import QRConfirmTemplate from "renderer/template/QRConfirm"
import {useNavigate} from "react-router-dom"
import {useEffect, useState} from "react"

const QRConfirmContainer = () => {

  const navigate = useNavigate()
  const [hospital, setHospital] = useState("")

  //개발자용
  useEffect(()=>{
    setHospital("한마음 병원")
  }, [])


  const onOkClick = () => {
    navigate("/qrCode")
  }

  const onCancelClick = () => {
    navigate("/")
  }

  return (
    <QRConfirmTemplate
      hospital={hospital}
      onOkClick={onOkClick}
      onCancelClick={onCancelClick}
    />
  )
}

export default QRConfirmContainer
