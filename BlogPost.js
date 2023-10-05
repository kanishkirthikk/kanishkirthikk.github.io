import PostAuthor from "./PostAuthor";
import PostContent from "./PostContent";
import PostTitle from "./PostTitle";
import './blog.css';

import 'bootstrap/dist/css/bootstrap.css';
import Card  from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import  CardText  from "react-bootstrap/CardText";
import  CardTitle  from "react-bootstrap/CardTitle";

import { Col, Container, Row } from "react-bootstrap";
export default function BlogPost(props){

return(
    <div>
    <Container className="bgcon">
        <Row style={{marginTop:'50%'}}>
    {props.data.map(p=>(
        <Col>
    <Card  className=" bg border-danger-subtle" style={{ width: '18rem', minHeight:'400px'}}>
    <CardBody>
    <CardTitle><PostTitle value={p.title}/></CardTitle>
    <CardText>
    <PostContent value={p.content}/>
    </CardText>
    <PostAuthor value={p.author}/>
    </CardBody>
    </Card>
    </Col>
    ))}
    </Row>
    </Container>
    </div>

);
}



