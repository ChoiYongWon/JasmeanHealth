import record from '../../../../assets/record.svg'
import Button from "../../component/Button"
import {BUTTON} from "../../type/index"
import {Wrapper, HeaderMessage, RecordButton, ResultMessage, Result} from "./style"


type Props = {
  statusMessage: string
  result: string
  onOkClick: ()=>void
  onRedoClick: ()=>void
}

const HomeTemplate = (props: Props) => {

  return (
    <Wrapper>
      <HeaderMessage>{props.statusMessage}</HeaderMessage>
      <RecordButton onClick={()=>{}} src={record} alt={"icon"} style={{marginTop: "82px", marginBottom: "81px"}}/>
      <ResultMessage>
        많이 힘드셨겠어요...<br></br>
        그렇다면, 주증상은<br></br>
        <Result>{props.result}</Result><br></br>
        맞나요?
      </ResultMessage>

      <Button text={"확인"} onClick={props.onOkClick} types={BUTTON.COLOR} style={{marginTop: "48px"}}></Button>
      <Button text={"다시하기"} onClick={props.onRedoClick} types={BUTTON.OUTLINE} style={{marginTop: "14px"}}></Button>

    </Wrapper>
  )
}

export default HomeTemplate
