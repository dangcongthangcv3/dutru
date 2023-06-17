import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetailApi } from '../redux/reducers/productReducer';
import { NavLink, useParams } from 'react-router-dom';

function Detail() {
    const { productDetail } = useSelector(state => state.productReducer);
    const dispatch = useDispatch();
    const params = useParams()
    // console.log(arrProduct);
    // const getInProductDetailApi = () => {
    //     const action = getProductDetailApi(params.id);
    //     dispatch(action);
    // }


    useEffect(() => {
        const action = getProductDetailApi(params.id);
        dispatch(action);
    }, params.id);
    return (
        <div>
            <div className='infoproduct'>
                <div className="a-container">
                    <div className="row" key={productDetail.id} >
                        <div className="col-md-6 left" style={{ textAlign: 'center', }}>
                            <img src={productDetail.image} alt={productDetail.name} />
                        </div>
                        <div className="col-md-6 right">

                            <h3>{productDetail.name}</h3>
                            <i>{productDetail.description} tiet</i>
                            <p>{productDetail.price}</p>
                            <div className='size pb-3'>
                                <button>38</button>
                                <button>39</button>
                                <button>40</button>
                                <button>41</button> </div>
                            <div className='Quantity pb-3'>
                                <button>+</button>1<button style={{ marginLeft: '20px' }}>-</button>
                            </div>
                            <div className='addtocart'>
                                <button >add to cart</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='realateproduct' style={{ margin: '30px 0' }}>
                <div className='a-container'>
                    <h3 style={{ textAlign: 'center' }}>Realate product</h3>
                    <div className="" style={{ display: 'flex', }}>
                        {productDetail.relatedProducts?.map((rea) => {
                            return <div className='' style={{
                                paddingTop: '30px', width: '25%', marginRight: '25px'
                            }} key={rea.id} >

                                < div className='' style={{ borderRadius: '10px', boxShadow: '0px 0px 0 1px black', textAlign: 'center' }}>
                                    <NavLink to={`/detail/id=${rea.id}`} >
                                        <img src={rea.image} alt="..." height={300} />
                                    </NavLink>

                                    <div className='card__body'>
                                        <h3 style={{ height: '30px', overflow: 'hidden', paddingLeft: '20px' }}>{rea.name}</h3>
                                        <div className='card__com' style={{ display: 'flex', width: '100%' }}>
                                            <div style={{ width: '50%', background: 'white', textAlign: 'center', padding: '12px 0', borderBottomLeftRadius: '10px' }}>{rea.price}</div>
                                            <button style={{ width: '50%', border: 'none', background: 'red', color: 'white', fontWeight: '600', borderBottomRightRadius: '10px' }} >Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Detail