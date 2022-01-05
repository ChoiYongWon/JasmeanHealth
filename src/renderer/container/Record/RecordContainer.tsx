import RecordTemplate from "renderer/template/Record"
import {useNavigate} from "react-router-dom"
import {useEffect, useState} from "react"

const HomeContainer = () => {

  const navigate = useNavigate()
  const [output, setOutput] = useState("")
  const [input, setInput] = useState("")

  //개발자용
  useEffect(()=>{
    setInput("오늘 아침부터 머리가 아프고 속이 울렁거려요")
    setOutput("머리가 아파요")
  }, [])


  const onOkClick = () => {
    navigate("/recommend")
  }

  const onRedoClick = () => {
    navigate("/")
  }

  return (
    <RecordTemplate
      statusMessage={input}
      result={output}
      onOkClick={onOkClick}
      onRedoClick={onRedoClick}
    />
  )
}

export default HomeContainer
