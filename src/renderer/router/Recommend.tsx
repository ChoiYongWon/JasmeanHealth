import {Route, Routes} from "react-router-dom"
import {useRecoilValue} from "recoil"
import {Auth_Status} from "../recoil/index"
import {AUTH} from "../type/index"
import Page403 from "renderer/page/Error/403"
import RecommendPage from "../page/Recommend"


type Props = {
  security: AUTH[]
}

const RecommendRouter = (props: Props) => {

  const role = useRecoilValue(Auth_Status)

  return (
    <Routes>
      <Route path="/recommend" element={props.security.includes(role) ? <RecommendPage/> : <Page403/>}></Route>

    </Routes>
  )
}

export default RecommendRouter
