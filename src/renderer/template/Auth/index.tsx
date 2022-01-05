import Button from "renderer/component/Button"
import TextBox from "renderer/component/TextBox"
import { BUTTON } from "renderer/type"
import Title from "../../component/Title"
import {Wrapper, TextWrapper, Text, LinkButton} from "./style"


type Props = {
  idRef: React.MutableRefObject<null>
  pwRef: React.MutableRefObject<null>
  onLoginClick: ()=>void
}

const AuthTemplate = (props: Props) => {

  return (
    <Wrapper>
      <Title style={{marginBottom: "23px"}}>로그인</Title>
      <TextBox placeholder={"아이디"} ref={props.idRef} style={{marginBottom: "22px"}}/>
      <TextBox placeholder={"패스워드"} ref={props.pwRef} style={{marginBottom: "22px"}}/>
      <Button text={"로그인"} onClick={props.onLoginClick} types={BUTTON.COLOR} style={{marginBottom: "92px"}}></Button>
      <TextWrapper>
        <Text>아직 회원이 아니신가요?</Text>
        <LinkButton to={"/register"}>회원가입</LinkButton>
      </TextWrapper>
    </Wrapper>
  )
}

export default AuthTemplate
