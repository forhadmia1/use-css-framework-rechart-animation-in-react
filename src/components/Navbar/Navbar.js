import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'Shop', link: '/shop' },
        { id: 3, name: 'about', link: '/about' },
        { id: 4, name: 'Contact', link: '/contact' }
    ]
    return (
        <nav className='bg-sky-800'>
            <div onClick={() => setOpen(!open)} className='w-8 h-8 md:hidden ml-3 bg-sky-800'>
                {open ? <XIcon></XIcon> : <MenuIcon ></MenuIcon>}

            </div>
            <ul className={`md:flex justify-center text-center absolute md:static duration-300 ease-in bg-sky-800 p-4 w-full ${open ? 'top-8' : 'top-[-300px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;