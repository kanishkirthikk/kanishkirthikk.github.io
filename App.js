
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import Nav from './Nav';
import Search from './Search';
import FormaddPost from './FormaddPost';
import BlogPost from './BlogPost';
import {post} from './blogdata';
function App(){
  return(
    <>
     <header>
     <Nav>
     </Nav>
    </header>
  <body>
    <div>
      <Search/>
    </div>
    <div className='con'>
  <FormaddPost/>
  <BlogPost data={post}/>
    </div>
  </body>
    </>
  );
}


export default App;
