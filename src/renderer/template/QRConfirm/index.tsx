import security from '../../../../assets/security.svg'
import Button from "../../component/Button"
import {BUTTON} from "../../type/index"
import {Wrapper, SecurityIcon, TipMessage, HospitalMessage} from "./style"


type Props = {
  hospital: string
  onOkClick: ()=>void
  onCancelClick: ()=>void
}

const QRConfirmTemplate = (props: Props) => {

  return (
    <Wrapper>
      <SecurityIcon onClick={()=>{}} src={security} alt={"icon"}/>
      <HospitalMessage  style={{marginTop: "97px"}}>{props.hospital}</HospitalMessage>
      <TipMessage  style={{marginTop: "35px"}}>
        블록체인 기반의 보안을 활용하여 안전하게 병원에 정보를 전달합니다.<br></br>
        정보이용에 동의하십니까?
      </TipMessage>

      <Button text={"확인"} onClick={props.onOkClick} types={BUTTON.COLOR} style={{marginTop: "34px"}}></Button>
      <Button text={"취소하기"} onClick={props.onCancelClick} types={BUTTON.OUTLINE} style={{marginTop: "14px"}}></Button>

    </Wrapper>
  )
}

export default QRConfirmTemplate
