import { createBrowserRouter } from 'react-router-dom'
import { App } from '../App'
import { CheckCode, Dashboard, ForgotPassword, Home, Login, Profile, Register } from '../pages'

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [
            {
                path:'/',
                element:<Home />,
            },
            {
                path:'/register',
                element:<Register />,
            },
            {
                path:'/login',
                element:<Login />,
            },
            {
                path:'/profile',
                element:<Profile />,
            },
            {
                path:'/dashboard',
                element:<Dashboard />,
            },
            {
                path:'/forgotPassword',
                element:<ForgotPassword />,
            },
            {
                path:'/verifyCode',
                element:<CheckCode />,
            },
        ]
    }
])