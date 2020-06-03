import Danhmuc from "./components/Danhmuc/Danhmuc";
import Home from "./components/Home";
import Chitietbaiviet from "./components/Baiviet/Chitietbaiviet";

export default [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: 'Nested - About Page - Example App'
        }
    },
    {
        path: '/danh-muc/:danhMucID',
        name: 'Danhmuc',
        component: Danhmuc,
        meta: {
            title: 'Login'
        }
    },
    {
        path: '/chi-tiet-bai-viet/:baiVietID',
        name: 'chiTietBaiViet',
        component: Chitietbaiviet
    },
    {
        path: '/facebook',
        redirect: 'https://www.facebook.com/ldc.longnd'
    },
]