import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as GiIcons from 'react-icons/gi'


export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Pools',
        path: '/pools',
        icon: <GiIcons.GiTrade />,
        cName: 'nav-text'
    },
    {
        title: 'My Positions',
        path: '/my-positions',
        icon: <IoIcons.IoIosPerson />,
        cName: 'nav-text'
    },
    {
        title: 'Treasury',
        path: '/treasury',
        icon: <GiIcons.GiChest />,
        cName: 'nav-text'
    }
]