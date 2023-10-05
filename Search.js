import React, { useState } from "react";
import { Form, Button, FormControl, Container } from "react-bootstrap";
import { post } from "./blogdata";
import BlogPost from "./BlogPost";

export default function Search() {
  const [data, setData] = useState("");
  const [showBlogPost, setShowBlogPost] = useState(false); 

  const handleChange = function (event) {
    setData(event.target.value);
  };

  const handleClick = function () {
    setShowBlogPost(true); 
  };

  return (
    <>
    <Container>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={handleChange}
        />
        <Button variant="outline-success" onClick={handleClick}>
          Search
        </Button>
      </Form>
      {showBlogPost && <BlogPost data={post.filter(p => p.title === data)} />}
      </Container>
    </>
  );
}
