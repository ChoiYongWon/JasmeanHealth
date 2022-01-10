import QRCodeTemplate from "renderer/template/QRCode"
import {useNavigate} from "react-router-dom"
import { useRecoilValue } from "recoil"
import { User_Info } from "renderer/recoil"

const QRCodeContainer = () => {

  const navigate = useNavigate()
  const userInfo = useRecoilValue(User_Info)

  //개발자용


  const onOkClick = () => {
    navigate("/")
  }

  const onCancelClick = () => {
    navigate("/")
  }

  return (
    <QRCodeTemplate
      // hospital={hospital}
      qrInfo={userInfo}
      onOkClick={onOkClick}
      onCancelClick={onCancelClick}
    />
  )
}

export default QRCodeContainer
