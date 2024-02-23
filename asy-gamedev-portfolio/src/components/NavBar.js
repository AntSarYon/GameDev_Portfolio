import { useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/TwitchLogo_White.png'
import linkedinIcon from '../assets/img/nav-icon1.svg'
import itchioIcon from '../assets/img/itchio.png'
import GitHubIcon from '../assets/img/GitHub.png'

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
                    <a href="https://www.linkedin.com/in/antonio-sarmiento-yon-5a44b01a5/" target='_blank'><img src={linkedinIcon} alt="LinkedinIcon"/></a>
                    <a href="https://github.com/AntSarYon" target='_blank'><img src={GitHubIcon} alt="GitHubIcon"/></a>
                    <a href="https://larraondo.itch.io" target='_blank'><img src={itchioIcon} alt="ItchioIcon"/></a>
                </div>
                <button className='vvd' onClick={() => onUpdateActiveLink('connect')}><a href="#connect">Contáctame</a></button>
            </span>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}