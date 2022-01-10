import qr from '../../../../assets/qr2.svg'
import Button from "../../component/Button"
import {BUTTON} from "../../type/index"
import {Wrapper, QRWrapper, TipMessage, HospitalMessage} from "./style"
import QRCode from "react-qr-code"


type Props = {
  // hospital: string
  qrInfo: any
  onOkClick: ()=>void
  onCancelClick: ()=>void
}

const QRCodeTemplate = (props: Props) => {

  return (
    <Wrapper>
      {/* <QRIcon onClick={()=>{}} src={qr} alt={"icon"}/> */}
      <QRWrapper >
        <QRCode value={props.qrInfo} size={120}/>

      </QRWrapper>
      {/* <HospitalMessage  style={{marginTop: "97px"}}>{props.hospital}</HospitalMessage> */}
      <TipMessage  style={{marginTop: "97px"}}>
        QR 코드를 제시해 빠른 접수를 이용해보세요
      </TipMessage>

      <Button text={"확인"} onClick={props.onOkClick} types={BUTTON.COLOR} style={{marginTop: "34px"}}></Button>
      <Button text={"취소하기"} onClick={props.onCancelClick} types={BUTTON.OUTLINE} style={{marginTop: "14px"}}></Button>

    </Wrapper>
  )
}

export default QRCodeTemplate
