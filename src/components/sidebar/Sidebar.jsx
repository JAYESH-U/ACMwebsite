import React from 'react'

function Sidebar() {

    const navItems = [
        {
            name: "Home",
            link: '/admin/home',
        },
        {
            name: "About",
            link: '/admin/about',
        },
        {
            name: "Events",
            link: '/admin/events',
        },
        {
            name: "Team",
            link: '/admin/team',
        },
    ]

    return (
        <div className='sidebar'>
            {navItems.map((item) =>
                <span key={item.link} className='navItems' onClick={() => navigate(item.link)}>
                    {item.name}
                </span>
            )}
        </div>
    )
}

export default Sidebar