import { useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.svg'
import linkedinIcon from '../assets/img/nav-icon1.svg'
import itchioIcon from '../assets/img/itchio.png'

// ------------------------------------------------------------

export const NavBar = () => {
    
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - 

    useEffect(() => {

        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            } else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - 

    return(
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Habilidades</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Proyectos</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/antonio-sarmiento-yon-5a44b01a5/" target='_blank'><img src={linkedinIcon} alt="navIcon1"/></a>
                    <a href="https://larraondo.itch.io" target='_blank'><img src={itchioIcon} alt="navIcon3"/></a>
                </div>
                <button className='vvd' onClick={() => console.log('connect')}><span>Conectémos</span></button>
            </span>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}