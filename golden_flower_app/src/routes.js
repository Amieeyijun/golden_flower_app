import Home from './views/Home/Home';
import Travel from './views/Travel/Travel';
import Goods from './views/Goods/Goods';
import Goodsinfo from './views/Goods/Goodsinfo';
import Search from './views/Search/Search';
import Admin from './views/Admin/Admin';
const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/travel',
        component: Travel
    },
    {
        path: '/goods',
        component: Goods
    },
    {
        path: '/goodsinfo',
        component: Goodsinfo
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/admin',
        component: Admin
    }
    // {
    //     path: '/login',
    //     component: Login
    // },
    // {
    //     path: '/registered',
    //     component: Registered
    // },
    // {
    //     path: '/travelsdetail',
    //     component: TravelsDetail
    // },
    // {
    //     path: '/admininfo',
    //     component: AdminInfo
    // },
    // {
    //     path: '/goodsDetail',
    //     component: GoodsDetail
    // }
]



export default routes;