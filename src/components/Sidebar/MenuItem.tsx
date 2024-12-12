import React, { ReactNode } from 'react'
import { ElementType } from "react"
import { twMerge } from "tailwind-merge"
import * as Accordion from "@radix-ui/react-accordion"
import { useNavigate } from 'react-router-dom'

export interface NavItemProps {
    children?: ReactNode
    title: string
    value: string
    link?: string
    icon: ElementType
}

export function MenuItem({ children, title, value, link, icon: Icon }: NavItemProps) {
    const navigate = useNavigate()

    return (
        <Accordion.Item value={value}>
            <Accordion.Trigger className={twMerge(
                'group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50',
                'dark:hover:bg-zinc-800 w-full'
            )}>
                <Icon className="h5 w-5 text-zinc-500" />
                <span className={twMerge(
                    'font-medium text-zinc-700 group-hover:text-violet-500',
                    'dark:text-zinc-100 dark:group-hover:text-violet-500'
                )}>
                    {link ? (<a onClick={() => navigate(link)}>{title}</a>) : title}
                </span>
            </Accordion.Trigger>
            {children}
        </Accordion.Item>
    )
}