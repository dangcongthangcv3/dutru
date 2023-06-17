import React, { useEffect } from 'react'
import Carousel from '../Component/Carousel/Carousel'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductApi } from '../redux/reducers/productReducer';
import { NavLink } from 'react-router-dom';

export default function Home() {
    const { arrProduct } = useSelector(state => state.productReducer);
    const dispatch = useDispatch();


    console.log(arrProduct);
    const getInProductApi = () => {
        const action = getAllProductApi();
        dispatch(action);
    }

    useEffect(() => {
        //Sau lần render đầu tiên thì useEffect sẽ chạy 
        //Gọi api = cách dispatch action async (action thunk)
        getInProductApi();
    }, []);
    return (

        <div>
            <Carousel />
            <div className="product">
                <div className="a-container">
                    <h2 style={{ textAlign: 'center' }}>List product</h2>
                    <div className="row" style={{ padding: '50px 100px' }}>
                        {arrProduct?.map((shoe) => {
                            return <div className='col-3 pt-30' key={shoe.id} >

                                <div className='card card__border'>
                                    <NavLink to={`/detail/id=${shoe.id}`} >
                                        <img src={shoe.image} alt="..." height={300} />
                                    </NavLink>

                                    <div className='card__body'>
                                        <h3 >{shoe.name}</h3>
                                        <div className='card__com'>
                                            <div>{shoe.price}</div>
                                            <button >Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div >
    )
}
