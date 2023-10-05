import { useState } from "react";
import { Container, Form, FormControl, FormGroup, FormLabel ,Row} from "react-bootstrap";
import { post } from "./blogdata";

export default function FormaddPost(){
    const[title,setTitile]=useState(0);
    const[content,setContent]=useState(0);
    const[author,setAuthor]=useState(0);

    let handleSubmit=function(event){
        event.preventDefault();
let obj={"title":" ",
"content":" ",
"author":" ",
};
        obj.title=title;
        obj.content=content;
        obj.author=author;
       post.push(obj);
        };
    


    return(
        <>
        <Container className=" text-uppercase  fs-4 text-white text-center p-2 m-3 bg-danger col-3 position-absolute top-50 start-50 translate-middle align-items-center">
            <Row>
        <Form onSubmit={handleSubmit}>
         <FormGroup>
          <FormLabel>TITLE</FormLabel>
          <FormControl type="text" placeholder="enter your title" name="title" onChange={e=>setTitile(e.target.value)}></FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel className="text-white text-upper">content</FormLabel>
            <FormControl
          as="textarea"
          name="content"
          placeholder="Present your content"
          style={{ height: '100px' }}
          onChange={e=>setContent(e.target.value)}
        />
          </FormGroup>
          <FormGroup>
          <FormLabel>AUTHOR</FormLabel>
          <FormControl type="text" name="author" placeholder="enter yor author"
          onChange={e=>setAuthor(e.target.value)}></FormControl>
          </FormGroup>
        <input className="btn btn-danger text-uppercase fs-4" type="submit"></input>
        </Form>
        </Row>
        </Container>
        </>
    );
}