import React from 'react';
import './button.scss';
import { Link } from 'react-router-dom';

function Button({link, target, name, refresh}) {
    target = target ? '_blank' : null;

    return (
        <div>
            <Link style={{ textDecoration: "none" }} to={link} target={target} className='button' refresh={refresh}>{name}</Link>
        </div>
    )
}

export default Button;