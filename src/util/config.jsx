import axios from "axios"
//Cấu trúc hệ thống
export const DOMAIN = 'https://shop.cyberlearn.vn'

//cấu hình api gửi đi
// Tạo ra 1 đối tượng
export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000
});