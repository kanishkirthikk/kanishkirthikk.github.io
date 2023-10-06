
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import Nav from './Nav';
import Search from './Search';
import FormaddPost from './FormaddPost';
import BlogPost from './BlogPost';
import {post} from './blogdata';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Footer from './Footer';
function App(){
  const[isclick,setClick]=useState(false);
  const[isCreated,setCreated]=useState(true);
  let handleClick =function(){
    setClick(true);
    setCreated(false);
  }
  return(
    <>
     <header>
     <Nav>
     </Nav>
    </header>
  <body>
    <div className='h-auto'>
      <Search/>
    </div>
    <div className='con'>
      <Button className='btn btn-danger position-absolute  top-50 start-50 translate-middle align-items-center' onClick={handleClick}>CREATE SOMETHING</Button>
    {isclick && <FormaddPost/>}
   {isCreated && <BlogPost data={post}/>}
    </div>
  </body>
  {isCreated && <Footer/>}
    </>
  );
}


export default App;
