import React from "react";
import './Button.css';

export default function Button({onclick, children, type = 'button'}) {
    return (
        <button classname="custom-button" onclick={onclick} type={type}>
            {children}
        </button>

    )
}