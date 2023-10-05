import { Container, Navbar, NavbarBrand, NavbarText } from "react-bootstrap";
import img  from './wp7348374.jpg';
export default function Nav(){
    return(
        <>
        <Navbar className=" bg-danger-subtle">
            <Container>
                <NavbarBrand className="text-white fs-1"><img src={img} width={'50px'}  height={'50px'}></img></NavbarBrand>
              </Container><Container>
                <NavbarText className=" font-monospace fs-1 text-danger text-uppercase">blog</NavbarText>
                </Container>
        </Navbar>
        </>
    );
}