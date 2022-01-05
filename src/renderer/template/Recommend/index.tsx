import Button from "../../component/Button"
import {BUTTON} from "../../type/index"
import {Wrapper, HeaderMessage, ResultMessage, Decorate} from "./style"


type Props = {
  result: string[]
  effects: string
  onHospitalClick: ()=>void
  onCancelClick: ()=>void
}

const RecommendTemplate = (props: Props) => {

  return (
    <Wrapper>
      <HeaderMessage>다음 진료과에서 보면 좋아요</HeaderMessage>
      <Button text={props.result[0]} onClick={()=>{}} types={BUTTON.OUTLINE} style={{marginTop: "19px"}}></Button>
      <HeaderMessage style={{marginTop: "47px"}}>여기서도 볼 수 있어요</HeaderMessage>
      <Button text={props.result[1]} onClick={()=>{}} types={BUTTON.OUTLINE} style={{marginTop: "19px"}}></Button>
      <ResultMessage style={{marginTop: "80px"}}>
        만약 {props.effects} 등의 증세가 있다면 즉시 <Decorate>응급실</Decorate>에 방문해 보세요
      </ResultMessage>
      <Button text={"내 주변 병원 찾기"} onClick={props.onHospitalClick} types={BUTTON.COLOR} style={{marginTop: "32px"}}></Button>
      <Button text={"취소"} onClick={props.onCancelClick} types={BUTTON.OUTLINE} style={{marginTop: "14px"}}></Button>

    </Wrapper>
  )
}

export default RecommendTemplate
