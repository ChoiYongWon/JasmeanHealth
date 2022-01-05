import QRCodeTemplate from "renderer/template/QRCode"
import {useNavigate} from "react-router-dom"
import {useEffect, useState} from "react"

const QRCodeContainer = () => {

  const navigate = useNavigate()
  const [hospital, setHospital] = useState("")

  //개발자용
  useEffect(()=>{
    setHospital("한마음 병원")
  }, [])


  const onOkClick = () => {
    navigate("/")
  }

  const onCancelClick = () => {
    navigate("/")
  }

  return (
    <QRCodeTemplate
      hospital={hospital}
      onOkClick={onOkClick}
      onCancelClick={onCancelClick}
    />
  )
}

export default QRCodeContainer
