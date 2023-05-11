import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [
    ...new Set(
    Menu.map((curElem) => {
        return curElem.category;
    })
    ),
    "All",
]



const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItems = (category) => {
        if(category === "All"){
            setMenuData(Menu);
            return;
        }
        const updatedMenu = Menu.filter((CurrentElem) => {
            return CurrentElem.category === category
        })
        setMenuData(updatedMenu);
    }
    return (
        <>
            <Navbar filterItems={filterItems} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Restaurant
