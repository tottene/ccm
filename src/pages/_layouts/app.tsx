import { Sidebar } from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

export function AppLayout() {
    return (
        <div className="min-h-screen lg:grid lg:grid-cols-app dark:bg-zinc-900">
            <Sidebar />
            <div className="lg:col-start-2 flex flex-col p-4">
                <header className='flex flex-col w-full gap-6 pt-4 justify-between items-start'>
                    <h1 className='text-sas-blue text-4xl font-semibold'>CCM Center</h1>
                    <div className="h-px w-full bg-zinc-200 dark:bg-zinc-700"></div>
                </header>
                <main className='flex-1 flex flex-col items-center justify-start'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}