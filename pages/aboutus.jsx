import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout"
import {Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Row, Col } from 'reactstrap';

const Index = () => {
  return (
  <Layout>
      <div className="container1">
        <img src="images/Aboutus.png" className = "about-image"></img>
      </div>
      <Row>
      <Col sm="6">
        <CardImg className = "aboutus-image" src="/images/team/Slide1.PNG" />
        <Card body>
          <CardTitle>Ritika - CEO</CardTitle>
          <CardText>
            A business Enthusiastic very Realistic Person. Know how to deal with people. A standing pillar for Government jobs Section. A beacon of our Vision.
          </CardText>
        </Card>
      </Col>
      <Col sm="6">
        <CardImg className = "aboutus-image" src="/images/team/Slide2.PNG" />
        <Card body>
          <CardTitle>Amit - CTO</CardTitle>
          <CardText>Technical Expert and a Problem Solver. Know how to get things done. An idea Executioner. A pillar for Engineering Section.</CardText>
        </Card>
      </Col>
      <Col sm="6">
        <CardImg className = "aboutus-image" src="/images/team/Slide3.PNG" />
        <Card body>
          <CardTitle>Monika - COO</CardTitle>
          <CardText>Voice of our idea. A quick learner and Early Adapter. Operational Expert and know how to run a system. A pillar for Creative Section.</CardText>
        </Card>
      </Col>
       <Col sm="6">
        <CardImg className = "aboutus-image" src="/images/team/Slide4.PNG" />
        <Card body>
          <CardTitle>Pooja - CAO</CardTitle>
          <CardText>Computer Geek. Fast Learner, very optimistic Person. Creative Idea generator, and know how to guide young students. A pillar for latest Job section.</CardText>
        </Card>
      </Col>
    </Row>
  </Layout>
)
}

export default Index;