import {Route, Routes} from "react-router-dom"
import {useRecoilValue} from "recoil"
import {Auth_Status} from "../recoil/index"
import {AUTH} from "../type/index"
import MapPage from "../page/Map"
import Page403 from "renderer/page/Error/403"


type Props = {
  security: AUTH[]
}

const MapRouter = (props: Props) => {

  const role = useRecoilValue(Auth_Status)

  return (
    <Routes>
      <Route path="/map" element={props.security.includes(role) ? <MapPage/> : <Page403/>}></Route>

    </Routes>
  )
}

export default MapRouter
