import {Route, Routes} from "react-router-dom"
import {useRecoilValue} from "recoil"
import {Auth_Status} from "../recoil/index"
import {AUTH} from "../type/index"
import InfoPage from "../page/Info"
import Page403 from "renderer/page/Error/403"


type Props = {
  security: AUTH[]
}

const InfoRouter = (props: Props) => {

  const role = useRecoilValue(Auth_Status)

  return (
    <Routes>
      <Route path="/info" element={props.security.includes(role) ? <InfoPage/> : <Page403/>}></Route>

    </Routes>
  )
}

export default InfoRouter
