//rxslice
import { createSlice } from '@reduxjs/toolkit'
import { httpProduct } from '../../util/config';

const initialState = {
    arrProduct: [],
    productDetail: {},
    arrproductSearch: []
}

const productReducer = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        getAllProductAction: (state, action) => {
            state.arrProduct = action.payload;
        },
        getProductDeatilAction: (state, action) => {
            state.productDetail = action.payload;
        },
        getProductSearchAction: (state, action) => {
            state.arrproductSearch = action.payload;
        }
    }
});

export const { getAllProductAction, getProductDeatilAction, getProductSearchAction } = productReducer.actions

export default productReducer.reducer

export const getAllProductApi = () => {
    return async (dispatch) => {
        const res = await httpProduct.get(`/api/Product`)

        const action = getAllProductAction(res.data.content);
        dispatch(action)
    }
}

export const getProductSearchApi = (keyword) => {
    return async (dispatch) => {
        const res = await httpProduct.get(`/api/Product?keyword=${keyword}`)
        console.log(res.data.content)
        const action = getProductSearchAction(res.data.content);
        dispatch(action)
    }
}
export const getProductDetailApi = (id) => {
    return async (dispatch) => {
        const res = await httpProduct.get(`/api/Product/getbyid?${id}`)

        const action = getProductDeatilAction(res.data.content);
        dispatch(action)
    }
}