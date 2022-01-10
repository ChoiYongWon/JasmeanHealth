import { useRecoilValue } from "recoil"
import { User_Info } from "renderer/recoil"
import HomeTemplate from "renderer/template/Home"
import {useNavigate} from "react-router-dom"
import {useState} from "react"

const HomeContainer = () => {

  const { name } = useRecoilValue(User_Info)
  const [recording, setRecording] = useState(false)
  const navigate = useNavigate()

  const onRecordClick = () => {
    setRecording(true)
    setTimeout(()=>{
      setRecording(true)
    }, 5000)
    setTimeout(()=>{
      navigate("/record")
    }, 10000)
    //
  }

  const onQRClick = () => {
    navigate("/qrConfirm")
  }

  const onUserClick = () => {
    navigate("/info")
  }

  return (
    <HomeTemplate
      name={name}
      recording={recording}
      onRecordClick={onRecordClick}
      onQRClick={onQRClick}
      onUserClick={onUserClick}
    />
  )
}

export default HomeContainer
