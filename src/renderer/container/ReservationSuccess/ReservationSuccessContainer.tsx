import ReservationCompleteTemplate from "renderer/template/ReservationComplete"
import {useNavigate} from "react-router-dom"
import {useEffect, useState} from "react"

const ReservationCompleteContainer = () => {

  const navigate = useNavigate()
  // const [hospital, setHospital] = useState("")

  //개발자용
  // useEffect(()=>{
  //   setHospital("한마음 병원")
  // }, [])


  const onOkClick = () => {
    navigate("/")
  }

  const onCancelClick = () => {
    navigate("/")
  }

  return (
    <ReservationCompleteTemplate
      // hospital={hospital}
      onOkClick={onOkClick}
      onCancelClick={onCancelClick}
    />
  )
}

export default ReservationCompleteContainer
