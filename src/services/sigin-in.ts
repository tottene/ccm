export type SignIn = {
    name: string,
    username: string,
    email: string,
    password: string,
    avatar?: string
}

const users: SignIn[] = [
    {
        name: 'Cleiton',
        username: 'cee0521',
        email: 'cleitontottene.cxfier@sulamerica.com.br',
        password: '123456',
        avatar: 'https://github.com/tottene.png'
    },
    {
        name: 'Nilton',
        username: 'n123456',
        email: 'nilton.castro@sulamerica.com.br',
        password: '123456'
    }
]

export function signInService(username: string, password: string) {
    return users.find(u => u.username === username && u.password === password)
}