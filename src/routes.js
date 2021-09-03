import Auth from './pages/Auth'
import Shop from './pages/Shop'
import { SHOP_ROUTE, LOGIN_ROUTE } from './utils/consts'

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