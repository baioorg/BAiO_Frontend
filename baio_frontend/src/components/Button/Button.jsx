import React from "react";
import './Button.css';

export default function Button({onClick, children, type = 'button'}) {
    return (
        <button classname="custom-button" onClick={onClick} type={type}>
            {children}
        </button>

    )
}