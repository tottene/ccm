import { Outlet } from "react-router-dom";

export function AuthLayout() {
    return (
        <div className="min-h-screen grid grid-cols-2">
            <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col items-center justify-center">
                <img className="w-1/3" src="logo-sulamerica.png" alt="Logo Gestão Plus" />
            </div>
            <div className="flex flex-col items-center justify-center">
                <Outlet />
            </div>
        </div> 
    )
}