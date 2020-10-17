import React from 'react';

const CustomButton = ({children, additionalClass, ...otherProps}) => {
    return (
        <button {...otherProps} className={`button ${additionalClass}`}>{children}</button>
    )
}

export default CustomButton;