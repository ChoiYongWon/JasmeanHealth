import success from '../../../../assets/reservationComplete.svg'
import Button from "../../component/Button"
import {BUTTON} from "../../type/index"
import {Wrapper, SuccessMessage, SuccessIcon, TipMessage, HospitalMessage} from "./style"


type Props = {
  // hospital: string
  onOkClick: ()=>void
  onCancelClick: ()=>void
}

const ReservationCompleteTemplate = (props: Props) => {

  return (
    <Wrapper>
      <SuccessIcon onClick={()=>{}} src={success} alt={"icon"}/>
      <SuccessMessage style={{marginTop: "37px"}}>예약 대기 완료!</SuccessMessage>
      {/* <HospitalMessage  style={{marginTop: "10px"}}>{props.hospital}</HospitalMessage> */}
      <TipMessage  style={{marginTop: "74px"}}>QR코드를 제시해 빠른 접수를 이용해보세요</TipMessage>

      <Button text={"확인"} onClick={props.onOkClick} types={BUTTON.COLOR} style={{marginTop: "35px"}}></Button>
      <Button text={"취소하기"} onClick={props.onCancelClick} types={BUTTON.OUTLINE} style={{marginTop: "14px"}}></Button>

    </Wrapper>
  )
}

export default ReservationCompleteTemplate
