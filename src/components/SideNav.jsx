import { Image, PenLine, Shield } from 'lucide-react'
import React, { useState } from 'react'

function SideNav({selectedIndex}) {
    const menuList = [
        {
            id:1,
            name:'Icon',
            icon:PenLine
        },
        {
            id:2,
            name:'Background',
            icon:Image
        },
        {
            id:1,
            name:'Upgrade',
            icon:Shield
        },
    ]

    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className='border shadow-md h-screen'>
            <div>
                {menuList.map((menu,index)=>(
                    <h2 onClick={()=>{setActiveIndex(index); selectedIndex(index)}}
                    className={`p-3 text-lg px-7 text-gray-500 my-2 cursor-pointer flex items-center 
                                    gap-2 hover:bg-primary hover:text-white ${activeIndex==index&& 'bg-primary text-white'}`} key={index}>
                        <menu.icon/>
                        {menu.name}
                    </h2>
                ))}
            </div>
        </div>
    )
}

export default SideNav