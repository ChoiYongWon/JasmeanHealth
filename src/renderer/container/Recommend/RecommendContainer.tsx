import RecommendTemplate from "renderer/template/Recommend"
import {useNavigate} from "react-router-dom"
import {useEffect, useState} from "react"

const RecommendContainer = () => {

  const navigate = useNavigate()
  const [hospitalResult, setHospitalResult] = useState<string[]>([])
  const [effects, setEffects] = useState("")

  //개발자용
  useEffect(()=>{
    setHospitalResult(["내과", "신경과"])
    setEffects("어지러움, 두근거림, 호흡곤란")
  }, [])


  const onHospitalClick = () => {
    navigate("/map")
  }

  const onCancelClick = () => {
    navigate("/")
  }

  return (
    <RecommendTemplate
      result={hospitalResult}
      effects={effects}
      onHospitalClick={onHospitalClick}
      onCancelClick={onCancelClick}
    />
  )
}

export default RecommendContainer
