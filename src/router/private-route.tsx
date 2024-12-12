import React from 'react'
import { Navigate, Outlet, RouteProps } from 'react-router-dom'
import { useAuth } from '../hooks/auth'
import { toast } from 'sonner'
import { AppLayout } from '@/pages/_layouts/app'

const PrivateRoute: React.FC<RouteProps> = () => {
    const { user } = useAuth()
    console.log(user)

    if (!user) {
        console.log(123)
        toast.warning('faça login para acessar esse recurso')
        return <Navigate to="/login" />
    }

    return <AppLayout />
}

export default PrivateRoute