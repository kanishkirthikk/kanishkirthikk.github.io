import { useState } from "react";
import { Container, Form, FormControl, FormGroup, FormLabel ,Row} from "react-bootstrap";
import { post } from "./blogdata";
import BlogPost from "./BlogPost";
import Footer from "./Footer";
import './Form.css';
export default function FormaddPost(){
    const[title,setTitile]=useState(0);
    const[content,setContent]=useState(0);
    const[author,setAuthor]=useState(0);
    const[issumbit,setSubmit]=useState(false);
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
       setSubmit(true);
        };
    


    return(
        <>
        <Container className=" con text-uppercase  fs-4 text-white text-center p-2 m-3 bg-danger col-3 position-absolute  top-50 start-50 translate-middle">
            <Row>
        <Form onSubmit={handleSubmit}>
         <FormGroup>
          <FormLabel>TITLE</FormLabel>
          <FormControl type="text" placeholder="enter your title" name="title" required onChange={e=>setTitile(e.target.value)}></FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel className="text-white text-upper">content</FormLabel>
            <FormControl
          as="textarea"
          name="content"
          placeholder="Present your content" required
          style={{ height: '100px' }}
          onChange={e=>setContent(e.target.value)}
        />
          </FormGroup>
          <FormGroup>
          <FormLabel>AUTHOR</FormLabel>
          <FormControl type="text" name="author" placeholder="enter yor author" required
          onChange={e=>setAuthor(e.target.value)}></FormControl>
          </FormGroup>
        <input className="btn btn-danger text-uppercase fs-4" type="submit"></input>
        </Form>
        </Row>
        </Container>
        {issumbit && <BlogPost data={post}/>}
        {issumbit && <Footer/>}
        </>
    );
}