import { createBrowserRouter } from 'react-router-dom'
import { App } from '../App'
import { CheckCode, Dashboard, ForgotPassword, Home, Login, Profile, Register } from '../pages'
import { Protected, ProtectedCheckChildren } from '../components'

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
                element:(
                    <Protected>
                        <Profile />
                    </Protected>),
            },
            {
                path:'/dashboard',
                element:(
                <Protected>
                    <Dashboard />
                </Protected>),
            },
            {
                path:'/forgotPassword',
                element:<ForgotPassword />,
            },
            {
                path:'/verifyCode',
                element:(
                    <ProtectedCheckChildren>
                        <CheckCode />
                    </ProtectedCheckChildren>
                ),
            },
        ]
    }
])