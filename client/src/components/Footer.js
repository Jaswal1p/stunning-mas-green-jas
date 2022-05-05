import React from 'react';
import { Container } from 'react-bootstrap';

// import { FaGithub, FaLinkedin, FaEnvelope, FaFolder } from "react-icons/fa";

const AppFooter = () => {

    return (
        <>
            <Container fluid className="text-light page-footer d-flex pt-3 bg-dark">
                <Container>
                    <h3 className='pt-4'>Contact Us</h3>
                    <br></br>
                    <div className="d-lg-flex pb-4 justify-content-between">
                        <ul className="no-bullets">
                            <li><h4>Bobby Jaswal</h4></li>
                            <li className='img-link'>
                                <a href="mailto:Jaswal1p@yahoo.com?" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/48/000000/email.png" alt="email" className="icon"/></a>
                                <a href="https://github.com/Jaswal1p" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" className="icon"/></a>
                            </li>
                        </ul>

                        <ul className="no-bullets">    
                            <li><h4>Zack Greenfield</h4></li>
                            <li className='img-link'>
                                <a href="mailto:zjg12317@gmail.com?" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/48/000000/email.png" alt="email" className="icon"/></a>
                                <a href="https://github.com/yks2728" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" className="icon"/></a>
                            </li>
                        </ul>

                        <ul className="no-bullets">    
                            <li><h4>Mamona Masood</h4></li>
                            <li className='img-link'>
                                <a href="mailto:mamamonam4@gmail.com?" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/48/000000/email.png" alt="email" className="icon"/></a>
                                <a href="https://github.com/moon9588" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" className="icon"/></a>
                            </li>
                        </ul>    
                        
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>© May 2022</p>
                        <p>
                            <a className='footer-link' href="https://github.com/Jaswal1p/stunning-mas-green-jas.git">
                                {/* <span className='pr-3'>
                                <img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" className="icon"/> 
                                </span> */}
                                Github Repo Link
                            </a>
                        </p>

                    </div>
                </Container>
            </Container>
        </>


    )
};

export default AppFooter;