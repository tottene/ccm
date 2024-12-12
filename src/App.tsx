import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { Toaster } from 'sonner'
import { HelmetProvider, Helmet }  from 'react-helmet-async'
import { AuthProvider } from './hooks/auth'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './lib/react-query'

function App() {
    return (
        <HelmetProvider>
            <AuthProvider>
                <Toaster />
                <Helmet titleTemplate='CCM Center | %s' />
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router} />
                </QueryClientProvider>
            </AuthProvider>
        </HelmetProvider>
    )
}

export default App
