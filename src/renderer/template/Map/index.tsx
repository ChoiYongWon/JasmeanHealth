import Button from "../../component/Button"
import {BUTTON} from "../../type/index"
import {Wrapper, HeaderMessage, Decorate, MapComponent, MapWrapper, IframeWrapper} from "./style"


type Props = {
  input: string
  onReservationClick: ()=>void
  onCancelClick: ()=>void
}

const MapTemplate = (props: Props) => {

  return (
    <Wrapper>
      <HeaderMessage>내 주변 <Decorate>{props.input}</Decorate></HeaderMessage>
      <IframeWrapper style={{marginTop: "16px"}}>
       <MapWrapper>
        <MapComponent src="https://m.map.naver.com/search2/search.naver?query=%EB%82%B4%EA%B3%BC&style=v5&sm=clk&centerCoord=35.8420559:128.7123142#/map/1" ></MapComponent>
       </MapWrapper>
      </IframeWrapper>
      <Button text={"예약하기"} onClick={props.onReservationClick} types={BUTTON.COLOR} style={{marginTop: "14px"}}></Button>
      <Button text={"취소"} onClick={props.onCancelClick} types={BUTTON.OUTLINE} style={{marginTop: "14px"}}></Button>

    </Wrapper>
  )
}

export default MapTemplate
