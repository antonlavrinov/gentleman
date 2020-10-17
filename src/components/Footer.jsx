import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Container from 'react-bootstrap/Container';
// import {ReactComponent as FirebaseIcon} from '../assets/firebase-icon.svg';
import {ReactComponent as ReduxIcon} from '../assets/redux-icon.svg';


const Footer = () => {
    return (
        <footer translate="no" className="footer notranslate">
            <Container>
                <div className="footer__block">
                        <div className="creator">
                            <a className="creator__link" target="_blank" rel="noopener noreferrer" href='https://github.com/antonlavrinov/Memory-Game'>
                                <FontAwesomeIcon icon={faGithub} size="2x"/>
                                <div className="creator__name">
                                    <span className="creator__small-font">Created by</span> <br/>Anton Lavrinov
                                </div>
                            </a>
                        </div>
                        <div className="react-icon">
                            <a className="react-icon__link" target="_blank" rel="noopener noreferrer" href='https://reactjs.org/' >
                                <FontAwesomeIcon icon={faReact} color="red" size="2x"/>
                                React
                            </a>
                        </div>
                        <div className="redux-icon">
                            <a className="redux-icon__link" target="_blank" rel="noopener noreferrer" href='https://redux.js.org/' >
                                <ReduxIcon/>
                                Redux
                            </a>
                        </div>



                    </div>
            </Container>

        </footer>
    )
}


export default Footer;


                        // {/* <div className="firebase">
                        //     <a className="firebase__link" target="_blank" rel="noopener noreferrer" href='https://firebase.google.com/'>
                        //         {/* <FirebaseIcon className="firebase__icon"/> */}
                        //         {/* <ReduxIcon className="redux__icon"/>

                        //     </a>
                        // </div>  */}