import axios from "axios"
import { history } from '../index';

//Cấu trúc hệ thống
export const DOMAIN = 'https://shop.cyberlearn.vn';
export const USER_LOGIN = 'userLogin';
export const TOKEN = 'accessToken';

const tokenCybersoft = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0MyIsIkhldEhhblN0cmluZyI6IjA0LzExLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5OTA1NjAwMDAwMCIsIm5iZiI6MTY2OTQ4MjAwMCwiZXhwIjoxNjk5MjAzNjAwfQ.7A1g8RqPPK_ttr9NYitsWT7Cbe11nz4qye-QxZ_b8fk`;


export const httpProduct = axios.create({
    baseURL: 'https://shop.cyberlearn.vn',
    timeout: 30000
});
httpProduct.interceptors.request.use((config) => {

    //headers: (dev định nghĩa)
    //data (body): (lấy từ các input hoặc tham số từ phía client)
    config = { ...config }
    config.headers['TokenCybersoft'] = tokenCybersoft


    return config;
}, err => {
    return Promise.reject(err);
})
//cấu hình api gửi đi
// Tạo ra 1 đối tượng
export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000
});


export const { saveStorageJSON, getStorageJSON, clearStorage } = {
    saveStorageJSON: (name, data) => {
        const string = JSON.stringify(data);
        localStorage.setItem(name, string);
    },
    getStorageJSON: (name) => {
        if (localStorage.getItem(name)) {
            const data = JSON.parse(localStorage.getItem(name));
            return data;
        }
        return undefined;
    },
    clearStorage: (name) => {
        localStorage.removeItem(name)
    }
}

//Cấu hình dùng chung cho tất cả request (yêu cầu gửi lên api)
http.interceptors.request.use((config) => {

    //headers: (dev định nghĩa)
    //data (body): (lấy từ các input hoặc tham số từ phía client)
    config.headers = { ...config.headers }
    let token = getStorageJSON(USER_LOGIN)?.accessToken;
    config.headers.Authorization = `Bearer ${token}`;


    return config;
}, (err) => {
    return Promise.reject(err);
})



//Cấu hình cho response (kết quả trả về từ api)
http.interceptors.response.use((res) => {
    return res;
}, (err) => {
    //Xử lý lỗi cho api bị lỗi theo status code 
    console.log(err);
    if (err.response?.status === 401) {
        alert('Đăng nhập để vào trang này !');
        history.push('/login');
    }
    return Promise.reject(err);
});

