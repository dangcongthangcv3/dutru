import axios from "axios"
//Cấu trúc hệ thống
export const DOMAIN = 'https://shop.cyberlearn.vn';
export const USER_LOGIN = 'userLogin';
export const TOKEN = 'accessToken';

//cấu hình api gửi đi
// Tạo ra 1 đối tượng
export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000
});

export const {saveStorageJSON,getStorageJSON,clearStorage} = {
    saveStorageJSON: (name,data) => {
        const string = JSON.stringify(data);
        localStorage.setItem(name,string);
    },
    getStorageJSON: (name) => {
        if(localStorage.getItem(name)) {
            const data = JSON.parse(localStorage.getItem(name));
            return data;
        }
        return undefined;
    },
    clearStorage:(name) => {
        localStorage.removeItem(name)
    }
}
