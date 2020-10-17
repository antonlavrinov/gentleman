import React from 'react';
import {Link} from 'react-router-dom';

const Logo = ({additionalClass}) => {
    return (
        <div className={`logo ${additionalClass}`}>
            <Link to="/" className="logo__title">
                Gentleman.
            </Link>
        </div>
    )
}

export default Logo;