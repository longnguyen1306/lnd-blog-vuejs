import Danhmuc from "./components/Danhmuc/Danhmuc";
import Home from "./components/Home";

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
]