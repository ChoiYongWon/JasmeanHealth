import MapTemplate from "renderer/template/Map"
import {useNavigate} from "react-router-dom"
import {useEffect, useState} from "react"

const MapContainer = () => {

  const navigate = useNavigate()
  const [input, setInput] = useState("")

  //개발자용
  useEffect(()=>{
    setInput("내과")
  }, [])


  const onReservationClick = () => {
    navigate("/reservationSuccess")
  }

  const onCancelClick = () => {
    navigate("/")
  }

  return (
    <MapTemplate
      input={input}
      onReservationClick={onReservationClick}
      onCancelClick={onCancelClick}
    />
  )
}

export default MapContainer
