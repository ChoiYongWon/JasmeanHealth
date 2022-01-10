import React from "react"
import Button from "renderer/component/Button"
import TextBox from "renderer/component/TextBox"
import { BUTTON, TEXTBOX } from "renderer/type"
import Title from "../../component/Title"
import {Wrapper} from "./style"

type Props = {
  phoneRef: React.MutableRefObject<null>
  codeRef: React.MutableRefObject<null>
  time: number
  isSend: boolean

  onSendClick: ()=>void
  // onVerifyClick: ()=>void
  onSuccessClick: ()=>void
  onGoBackClick: ()=>void
}

const VerifyTemplate = (props: Props) => {


  return (
    <Wrapper>
      <Title style={{marginBottom: "23px"}}>전화 인증</Title>
      {
        props.isSend ?
          <Title style={{marginBottom: "23px"}}>{props.time}초 남음</Title> : <></>

      }

      <TextBox placeholder={"전화번호"} btn={{
        text: "인증",
        onClick: props.onSendClick
      }} refs={props.phoneRef} style={{marginBottom: "22px"}}/>
      <TextBox placeholder={"인증번호"} refs={props.codeRef} style={{marginBottom: "22px"}}/>
      <Button text={"다음"} onClick={props.onSuccessClick} types={BUTTON.COLOR} style={{marginBottom: "11px"}}></Button>
      <Button text={"뒤로가기"} onClick={props.onGoBackClick} types={BUTTON.OUTLINE}></Button>
    </Wrapper>
  )
}

export default VerifyTemplate
