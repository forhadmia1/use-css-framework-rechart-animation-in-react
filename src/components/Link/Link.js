import React from 'react';

const Link = (props) => {
    const {name,link}=props.route;
    return (
        <li className='mr-12 text-gray-50 font-bold'>
            <a href={link}>{name}</a>
        </li>
    );
};

export default Link;