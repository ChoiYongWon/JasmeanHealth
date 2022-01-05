import {Route, Routes} from "react-router-dom"
import {useRecoilValue} from "recoil"
import {Auth_Status} from "../recoil/index"
import {AUTH} from "../type/index"
import ReservationSuccessPage from "../page/ReservationSuccess"
import Page403 from "renderer/page/Error/403"


type Props = {
  security: AUTH[]
}

const ReservationSuccessRouter = (props: Props) => {

  const role = useRecoilValue(Auth_Status)

  return (
    <Routes>
      <Route path="/reservationSuccess" element={props.security.includes(role) ? <ReservationSuccessPage/> : <Page403/>}></Route>

    </Routes>
  )
}

export default ReservationSuccessRouter
