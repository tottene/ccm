import { LogOut, User } from "lucide-react";
import { Button } from '../Form/Button';
import { useAuth } from "@/hooks/auth";
import { useNavigate } from "react-router-dom";

export function Profile() {
    const { user, signOut } = useAuth()
    const navigate = useNavigate()

    function logOff() {
        signOut()
        navigate('/login')
    }

    return (
        <div className="grid grid-cols-profile items-center gap-3">
            {user.avatar ? <img src={user.avatar} alt="User image" className="h-10 w-10 rounded-full" /> : <User />}
            <div className="flex flex-col truncate">
                <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100 truncate">{user.name}</span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400 truncate">{user.email}</span>
            </div>
            <Button type="button" variant="ghost">
                <LogOut className="w-5 h-5" onClick={logOff} />
            </Button>
        </div>
    )
}