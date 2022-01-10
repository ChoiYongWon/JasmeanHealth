import {useEffect, useRef, useState} from "react"
import {useNavigate} from "react-router-dom"
import VerifyTemplate from "renderer/template/Verify"
import { useSetRecoilState, useRecoilState } from "recoil"
import { Auth_Status, UserTemp_Info, User_Info } from "renderer/recoil"
import {AUTH} from "../../type/index"
import { sendTwilio, confirm } from "renderer/api/API"


const VerifyContainer = () => {

  const phoneRef = useRef<any>(null)
  const codeRef = useRef<any>(null)
  const setAuthStatus = useSetRecoilState(Auth_Status)
  const setUserInfo = useSetRecoilState(User_Info)
  const [userTempInfo, setTempUserInfo] = useRecoilState(UserTemp_Info)
  const navigate = useNavigate()
  const [time, setTime] = useState(60)
  const [send, setSend] = useState(false)

  useEffect(()=>{
    if(send && time > 0){
      setTimeout(()=>{
        setTime(time - 1)
      }, 1000)
    }
  }, [send, time])

  const onSuccessClick = () => {
    const {name, gender, birth} = userTempInfo
    console.log(userTempInfo)
    const authCode = Number(codeRef.current.value)
    confirm(name, gender, birth, authCode).then(res=>{
      if(res.ok){
        return res.json()
      }else {
        throw Error()
      }
    }).then((res)=>{
      const info = res.query
      console.log(info)
      setAuthStatus(AUTH.USER)
      setUserInfo(info)

    })
  }

  const onGoBackClick = () => {
    //개발자용


    navigate("/")
  }

  const onSendClick = () => {
    const {name, gender, birth} = userTempInfo
    console.log(userTempInfo)
    sendTwilio(name, gender, birth).then(res=>{
      if(res.ok){
        return res.json()
      }else {
        throw Error()
      }
    }).then(()=>{
      setSend(true)
    })

  }

  // const onVerifyClick = () => {
  //   alert("인증이 완료되었습니다")
  // }

  return (
    <VerifyTemplate
      time={time}
      isSend={send}
      phoneRef={phoneRef}
      codeRef={codeRef}
      onSuccessClick={onSuccessClick}
      onSendClick={onSendClick}
      // onVerifyClick={onVerifyClick}
      onGoBackClick={onGoBackClick}
    />
  )
}

export default VerifyContainer
