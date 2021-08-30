import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Shop from './pages/Shop'
import { ADMIN_ROUTE, SHOP_ROUTE, LOGIN_ROUTE } from './utils/consts'

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },

    {
        path: SHOP_ROUTE,
        Component: Shop
    },


]