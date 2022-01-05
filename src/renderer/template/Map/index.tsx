import Button from "../../component/Button"
import {BUTTON} from "../../type/index"
import {Wrapper, HeaderMessage, Decorate} from "./style"


type Props = {
  input: string
  onReservationClick: ()=>void
  onCancelClick: ()=>void
}

const MapTemplate = (props: Props) => {

  return (
    <Wrapper>
      <HeaderMessage>내 주변 <Decorate>{props.input}</Decorate></HeaderMessage>

      <Button text={"예약하기"} onClick={props.onReservationClick} types={BUTTON.COLOR} style={{marginTop: "459px"}}></Button>
      <Button text={"취소"} onClick={props.onCancelClick} types={BUTTON.OUTLINE} style={{marginTop: "14px"}}></Button>

    </Wrapper>
  )
}

export default MapTemplate
