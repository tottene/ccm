import { ElementType } from "react"
import { useNavigate } from "react-router-dom"

type ItemIconProps = {
    icon: ElementType
    title: string
    link?: string
}

export function ItemIcon({ icon: Icon, title, link }: ItemIconProps) {
    const navigate = useNavigate()
    return (
        <div className="border-1 border-zinc-500 border rounded-md p-8 shadow-md w-36 flex flex-col items-center justify-center hover:bg-zinc-100 cursor-pointer"
            onClick={() => navigate(`/${link}`)}
        >
            <Icon className="w-8 h-12" />
            <span>{title}</span>
        </div>
    )
}