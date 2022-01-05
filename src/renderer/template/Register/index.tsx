import React from "react"
import Button from "renderer/component/Button"
import TextBox from "renderer/component/TextBox"
import { BUTTON, TEXTBOX } from "renderer/type"
import Title from "../../component/Title"
import {Wrapper} from "./style"

type Props = {
  idRef: React.MutableRefObject<null>
  pwRef: React.MutableRefObject<null>
  rePwRef: React.MutableRefObject<null>
  nameRef: React.MutableRefObject<null>
  birthRef: React.MutableRefObject<null>

  onRegisterClick: ()=>void
  onGoBackClick: ()=>void
}

const RegisterTemplate = (props: Props) => {


  return (
    <Wrapper>
      <Title style={{marginBottom: "23px"}}>회원가입</Title>
      <TextBox placeholder={"아이디"} ref={props.idRef} style={{marginBottom: "22px"}}/>
      <TextBox types={TEXTBOX.PASSWORD} ref={props.pwRef} placeholder={"패스워드"} style={{marginBottom: "22px"}}/>
      <TextBox types={TEXTBOX.PASSWORD} ref={props.rePwRef} placeholder={"패스워드 확인"} style={{marginBottom: "22px"}}/>
      <TextBox placeholder={"이름"} ref={props.nameRef} style={{marginBottom: "22px"}}/>
      <TextBox placeholder={"생년월일"} ref={props.birthRef} style={{marginBottom: "22px"}}/>
      <Button text={"회원가입"} onClick={props.onRegisterClick} types={BUTTON.COLOR} style={{marginBottom: "11px"}}></Button>
      <Button text={"뒤로가기"} onClick={props.onGoBackClick} types={BUTTON.OUTLINE}></Button>
    </Wrapper>
  )
}

export default RegisterTemplate
