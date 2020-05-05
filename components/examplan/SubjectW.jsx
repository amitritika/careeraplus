import { Container, Row, Col, Button } from 'reactstrap';

export const SubjectW = (props) => {
  return (
    <React.Fragment>
      <Col xs = "3">
        <div style = {{border: `black solid 1px`, backgroundColor: `${props.bg}`}}>
          {props.subName}        
        </div>
      </Col>
      <Col xs = "6">
        <div style = {{border: `black solid 1px`, backgroundColor: `${props.bg}`}}>
          {props.topicName}        
        </div>
      </Col>
      <Col xs = "2">
        <div style = {{border: `black solid 1px`, backgroundColor: `${props.bg}`}}>
          {props.subMarks}        
        </div>
      </Col>
    </React.Fragment>
  )  
}

export default SubjectW;