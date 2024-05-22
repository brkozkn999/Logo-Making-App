import { Image, PenLine, Shield } from 'lucide-react';
import React, { useState } from 'react';

function SideNav({ selectedIndex }) {
    const menuList = [
        {
            id: 0,
            name: 'Icon',
            icon: PenLine
        },
        {
            id: 1,
            name: 'Background',
            icon: Image
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className='border shadow-md h-screen'>
            <div>
                {menuList.map((menu, index) => (
                    <h2 key={index} onClick={() => { setActiveIndex(index); selectedIndex(index); }}
                        className={`p-3 text-lg px-7 text-gray-500 my-2 cursor-pointer flex items-center 
                            gap-2 hover:bg-primary hover:text-white ${activeIndex === index && 'bg-primary text-white'}`}>
                        <menu.icon />
                        {menu.name}
                    </h2>
                ))}
            </div>
        </div>
    );
}

export default SideNav;
