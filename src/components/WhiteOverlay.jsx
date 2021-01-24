import React from 'react'
import { selectOverlayVisible } from '../redux/overlay/overlay.selectors';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

const WhiteOverlay = ({ section, overlay }) => {

    return (
        <CSSTransition
            in={section ? true : false}
            timeout={300}
            classNames="white-overlay"
            unmountOnExit>
            <div className="white-overlay" id="overlay"></div>
        </CSSTransition>
    )
}

const mapStateToProps = (state) => ({
    overlay: selectOverlayVisible(state)
})




export default connect(mapStateToProps)(WhiteOverlay)
