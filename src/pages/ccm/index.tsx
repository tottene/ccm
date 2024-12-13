import { ItemIcon } from "@/components/item-icon"
import { Book } from "lucide-react"

export function Ccm() {
    return (
        <div className="flex">
            <ItemIcon icon={Book} title="Templates" link="ccm/templates" />
        </div>
    )
}