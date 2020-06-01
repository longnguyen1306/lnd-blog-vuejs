import Danhmuc from "./components/Danhmuc/Danhmuc";
import Home from "./components/Home";
import Chitietbaiviet from "./components/Baiviet/Chitietbaiviet";

export default [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/danh-muc/:danhMucID',
        name: 'Danhmuc',
        component: Danhmuc
    },
    {
        path: '/chi-tiet-bai-viet/:baiVietID',
        name: 'chiTietBaiViet',
        component: Chitietbaiviet
    },
]