import React from 'react'
import { headerRouteLinks } from "../static";
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className='site_header sticky w-full top-0 left-0 z-20 bg-primary-bg border-b border-border'>
            <div className='container mx-auto'>
                <nav className='h-[55px] md:h-[60px] flex items-center justify-center'>
                    <ul className='flex items-center gap-[12px]'>
                        {
                            headerRouteLinks.map((item) => (
                                <li key={item.id}>
                                    <NavLink className="header_link text-xs sm:text-sm pb-[4px] border-b-[.8px] border-b-transparent hover:border-b-[#98a1ae] duration-150 ease-out" to={`${item.route}`}><span>{item.title}</span></NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default React.memo(Header);