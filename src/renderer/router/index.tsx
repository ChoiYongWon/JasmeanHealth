import {HashRouter as Router} from "react-router-dom"
import HomeRouter from "./Home"
import {AUTH} from "../type/index"
import RegisterRouter from "./Register"
import InfoRouter from "./Info"
import RecordRouter from "./Record"
import RecommendRouter from "./Recommend"
import ReservationSuccessRouter from "./ReservationSuccess"
import QRConfirmRouter from "./QRConfirm"
import QRCodeRouter from "./QRCode"
import MapRouter from "./Map"

const Routers = () => {
  return (
    <Router>
        <MapRouter security={[AUTH.USER]}/>
        <QRConfirmRouter security={[AUTH.USER]}/>
        <QRCodeRouter security={[AUTH.USER]}/>
        <ReservationSuccessRouter security={[AUTH.USER]}/>
        <RecommendRouter security={[AUTH.USER]}/>
        <RecordRouter security={[AUTH.USER]}/>
        <InfoRouter security={[AUTH.USER]}/>
        <RegisterRouter security={[AUTH.GUEST]}/>
        <HomeRouter security={[AUTH.USER]}/>
    </Router>
  )
}

export default Routers
