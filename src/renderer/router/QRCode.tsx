import {Route, Routes} from "react-router-dom"
import {useRecoilValue} from "recoil"
import {Auth_Status} from "../recoil/index"
import {AUTH} from "../type/index"
import Page403 from "renderer/page/Error/403"
import QRCodePage from "../page/QRCode"


type Props = {
  security: AUTH[]
}

const QRCodeRouter = (props: Props) => {

  const role = useRecoilValue(Auth_Status)

  return (
    <Routes>
      <Route path="/qrCode" element={props.security.includes(role) ? <QRCodePage/> : <Page403/>}></Route>

    </Routes>
  )
}

export default QRCodeRouter
