import Home from './views/Home/Home';
import Travel from './views/Travel/Travel'
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
    // {
    //     path: '/goods',
    //     component: Goods
    // },
    // {
    //     path: '/admin',
    //     component: Admin,
    // },
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