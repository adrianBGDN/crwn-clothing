import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}> {/* Conditional interpolation: if isGoogleSignIn property is true the google-sign-in className will be rendered
                                                                                                    otherwise the custom-button className will always be rendered*/}
        {children}
    </button>
);

export default CustomButton;