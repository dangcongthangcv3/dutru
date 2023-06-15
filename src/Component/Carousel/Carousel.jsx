import React from 'react'

export default function Carousel() {
    return (
        <div className='carousel'>
            <div className="carousel__container">
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div style={{ width: '70%' }}>
                                <img src="./img/image 4.png" style={{ float: 'right' }} className="d-block w-100" alt="..." />
                                <span style={{ clear: 'both' }}></span>
                            </div>
                            <div style={{ width: '30%' }}>
                                <h2>Product name</h2>
                                <p>Product description</p>
                                <button >Buy now</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div style={{ width: '70%' }}>
                                <img src="./img/image 4.png" style={{ float: 'right' }} className="d-block w-100" alt="..." />
                                <span style={{ clear: 'both' }}></span>
                            </div>
                            <div style={{ width: '30%' }}>
                                <h2>Product name</h2>
                                <p>Product description</p>
                                <button >Buy now</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div style={{ width: '70%' }}>
                                <img src="./img/image 4.png" style={{ float: 'right' }} className="d-block w-100" alt="..." />
                                <span style={{ clear: 'both' }}></span>
                            </div>
                            <div style={{ width: '30%' }}>
                                <h2>Product name</h2>
                                <p>Product description</p>
                                <button >Buy now</button>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
        </div >

    )
}
