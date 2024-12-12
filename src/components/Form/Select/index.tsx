import React from 'react'

import * as SelectRadix from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export interface SelecProps extends SelectRadix.SelectProps {
    children: ReactNode
    placeholder: string
}

export function Select({ children, placeholder, ...props }: SelecProps) {
    return (
        <SelectRadix.Root {...props}>
            <SelectRadix.Trigger className={twMerge(
                'flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600 outline-none focus:border-violet-300 focus:ring-2 focus:ring-violet-100',
                'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-1 data-[placeholder]:text-zinc-400'    
            )}>
                <SelectRadix.Value
                    placeholder={placeholder}
                    className="text-black"
                />
                <SelectRadix.Icon>
                    <ChevronDown className="h-5 w-5 text-zinc-500" />
                </SelectRadix.Icon>
            </SelectRadix.Trigger>

            <SelectRadix.Portal>
                <SelectRadix.Content
                    side="bottom"
                    position="popper"
                    sideOffset={8}
                    className={twMerge(
                        'z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white animate-slideDownAndFade',
                        'dark:bg-zinc-800 dark:border-zinc-700'
                    )}
                >
                    <SelectRadix.Viewport>
                        {children}
                    </SelectRadix.Viewport>
                </SelectRadix.Content>
            </SelectRadix.Portal>
        </SelectRadix.Root>
    )
}