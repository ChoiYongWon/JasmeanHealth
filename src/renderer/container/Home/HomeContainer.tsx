import { useRecoilValue } from "recoil"
import { User_Info } from "renderer/recoil"
import HomeTemplate from "renderer/template/Home"
import {useNavigate} from "react-router-dom"

const HomeContainer = () => {

  const { name } = useRecoilValue(User_Info)
  const navigate = useNavigate()

  const onRecordClick = () => {
    navigate("/record")
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
      onRecordClick={onRecordClick}
      onQRClick={onQRClick}
      onUserClick={onUserClick}
    />
  )
}

export default HomeContainer
