import React from 'react';

import './Button.css';

const Button = ({children, onClicke}) => {

    return ( 
        <button onClick={onClicke} className="button">
            {children}
        </button>
    );
};

export default Button;