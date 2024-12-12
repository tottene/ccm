import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { loginSchema, LoginType } from '../../validation/login/login'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { Helmet } from 'react-helmet-async'
import { useAuth } from '@/hooks/auth'

export function Login() {
    const { handleSubmit, register, formState: { isSubmitted, isValid } } = useForm<LoginType>()
    const navigate = useNavigate();
    const { signIn } = useAuth()

    const handleLogin: SubmitHandler<LoginType> = async ({ username, password }) => {
        const loggedUser = await signIn({ username, password })
        
        if (loggedUser) {
            toast.success(`Seja bem vindo ${loggedUser.name}`)
            navigate("/")
        } else {
            toast.error('Usuário ou senha não conferem')
        }
    }

    return (
        <div className='p-8'>
            <Helmet title='Login' />
            <div className="w-80 flex flex-col justify-center gap-6">
                <div className="flex flex-col text-center">
                    <h1 className='text-2xl font-semibold'>Acessar o sistema</h1>
                </div>

                <form onSubmit={handleSubmit(handleLogin)} 
                    className="space-y-4"
                >
                    <div className='space-y-2'>
                        <Label htmlFor='username' />
                        <Input type='text' placeholder='Digite seu usuário' id='username' {...register("username")} />
                    </div>

                    <div className='space-y-2'>
                        <Label htmlFor='password' />
                        <Input type='password' placeholder='Digite sua senha' id='password' {...register("password")} />
                    </div>

                    <Button type='submit' className="w-full">Login</Button>
                </form>
            </div>
        </div>
    );
}
