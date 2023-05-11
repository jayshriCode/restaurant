import React from 'react'

const Navbar = (props) => {
    const {filterItems, menuList} = props;
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {
                        menuList.map((curElem,index)=>{
                            return(
                                <button key={index} className="btn-group__item" onClick={() => filterItems(curElem)}>{curElem}</button>
                            );
                        })
                    }
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar
