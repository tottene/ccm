import { SignIn, signInService } from '@/services/sigin-in';
import React, { PropsWithChildren, createContext, useCallback, useContext, useState } from 'react';

interface SignInCredentials {
    username: string;
    password: string;
}

interface AuthState {
    user: SignIn;
}

interface AuthContextData {
    user: SignIn;
    signIn(credentials: SignInCredentials): Promise<SignIn>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
        const user = localStorage.getItem('@ccm-center:user');

        if (user) {
            return { user: JSON.parse(user)};
        }

        return {} as AuthState;
    });

    const signIn = useCallback(async ({ username, password }: SignInCredentials) => {
        
        const user = signInService(username, password)

        if (user) {
            localStorage.setItem('@ccm-center:user', JSON.stringify({ 
                name: user.name, 
                email: user.email,
                avatar: user.avatar
            }));
            setData({ user });
        }

        return data as any
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('@ccm-center:user');

        setData({} as AuthState);
    }, []);

    return (
        <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
};

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };

