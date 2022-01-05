import {Route, Routes} from "react-router-dom"
import AuthPage from "../page/Auth"
import {useRecoilValue} from "recoil"
import {Auth_Status} from "../recoil/index"
import {AUTH} from "../type/index"
import RecordPage from "../page/Record"


type Props = {
  security: AUTH[]
}

const RecordRouter = (props: Props) => {

  const role = useRecoilValue(Auth_Status)

  return (
    <Routes>
      <Route path="/record" element={props.security.includes(role) ? <RecordPage/> : <AuthPage/>}></Route>

    </Routes>
  )
}

export default RecordRouter
