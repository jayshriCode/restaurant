import React from 'react'

const MenuCard = (props) => {
    const { menuData } = props;
    return (
        <>
            <section className="main-card--cointainer">
                {
                    menuData.map((elem) => {
                        return (

                            <div className="card-container" key={elem.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{elem.id}</span>
                                        <span className="card-author subtle">{elem.category}</span>
                                        <h2 className='card-title'> {elem.name} </h2>
                                        <span className="card-description subtle">
                                        {elem.description}
                                        </span>
                                        <div className="card-read">Read</div>
                                    </div>
                                    <img src={elem.image} alt="images" className="card-media" />

                                    <span className="card-tag  subtle">Order Now</span>
                                </div>
                            </div>

                        )
                    })
                }
            </section>
        </>

    )
}

export default MenuCard
