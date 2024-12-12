import React from 'react'

import { Logo } from "./Logo"
import { Cross, DollarSign, Home, MailOpen, Menu, Slice, Stethoscope, X } from "lucide-react"
import { Profile } from "./Profile"
import { Button } from "../Form/Button"
import * as Collpasible from "@radix-ui/react-collapsible"
import * as Accordion from "@radix-ui/react-accordion"
import { MenuItem } from './MenuItem'
import { twMerge } from "tailwind-merge"
import { useNavigate } from "react-router-dom"

export function Sidebar() {
    const navigate = useNavigate()

    return (
        <Collpasible.Root
            className="fixed left-0 top-0 data-[state=open]:bottom-0 lg:data-[state=closed]:bottom-0 right-0 z-20 bg-white flex flex-col gap-6 p-4 border-b border-zinc-200 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 dark:bg-zinc-900 dark:border-zinc-800"
        >
            <div className="flex items-center justify-between">
                <div className='flex flex-col w-full gap-6 justify-between items-center'>
                    <Logo />
                    <div className="h-px w-full bg-zinc-200 dark:bg-zinc-700"></div>
                </div>

                <Collpasible.CollapsibleTrigger asChild className="data-[state=open]:hidden lg:hidden">
                    <Button variant="ghost">
                        <Menu className="h-6 w-6 data-[state=closed]:hidden" />
                    </Button>
                </Collpasible.CollapsibleTrigger>
                <Collpasible.CollapsibleTrigger asChild className="data-[state=closed]:hidden lg:hidden">
                    <Button variant="ghost">
                        <X className="h-6 w-6 data-[state=closed]:hidden" />
                    </Button>
                </Collpasible.CollapsibleTrigger>
            </div>

            <Collpasible.Content forceMount className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex">
                <nav className="space-y-0.5">
                    <Accordion.Root
                        type="single"
                        defaultValue="item-1"
                        collapsible
                    >
                        <MenuItem title="Home" icon={Home} value='item-1' link='/' />
                        <MenuItem title="CCM" icon={MailOpen} value='item-2'>
                            <Accordion.Content className={twMerge(
                                'cursor-pointer font-medium text-zinc-700 hover:text-violet-500 hover:bg-violet-50 py-2 pl-12',
                                'dark:text-zinc-100 dark:hover:text-violet-500'
                            )}>
                                <a onClick={() => navigate('/template')}>Template</a>
                            </Accordion.Content>
                        </MenuItem>
                        <MenuItem title="Saúde" icon={Stethoscope} value='item-3' link='saude' />
                        <MenuItem title="Odonto" icon={Slice} value='item-4' />
                        <MenuItem title="Vida" icon={Cross} value='item-5' />
                        <MenuItem title="Previdência" icon={DollarSign} value='item-6' />
                    </Accordion.Root>
                </nav>

                <div className="mt-auto flex flex-col gap-6">
                    <div className="h-px bg-zinc-200 dark:bg-zinc-700"></div>

                    <Profile />
                </div>
            </Collpasible.Content>
        </Collpasible.Root>
    )
}