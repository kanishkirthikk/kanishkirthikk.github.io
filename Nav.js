import { Container, Navbar, NavbarBrand,NavbarText} from "react-bootstrap";
import ved from './Rose Gold Black Elegant Luxury Circle Beauty Logo (2).mp4'

export default function Nav(){
    return(
        <>
        <Navbar className=" bg-danger-subtle p-1">
            <Container>
            <NavbarBrand href="#"className="text-danger size-50"><video height={'100px'} width={'100px'} controls autoPlay muted> <source src={ved} type="video/mp4"/></video>
                </NavbarBrand>
            </Container>
            <NavbarText style={{marginRight:'50%', marginLeft:"35%"}} className=" text text-center font-monospace fs-1 text-danger text-uppercase">blog</NavbarText>
                
        </Navbar>
        </>
    );
}