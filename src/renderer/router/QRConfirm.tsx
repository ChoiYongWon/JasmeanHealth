import {Route, Routes} from "react-router-dom"
import {useRecoilValue} from "recoil"
import {Auth_Status} from "../recoil/index"
import {AUTH} from "../type/index"
import Page403 from "renderer/page/Error/403"
import QRConfirmPage from "../page/QRConfirm"


type Props = {
  security: AUTH[]
}

const QRConfirmRouter = (props: Props) => {

  const role = useRecoilValue(Auth_Status)

  return (
    <Routes>
      <Route path="/qrConfirm" element={props.security.includes(role) ? <QRConfirmPage/> : <Page403/>}></Route>

    </Routes>
  )
}

export default QRConfirmRouter
