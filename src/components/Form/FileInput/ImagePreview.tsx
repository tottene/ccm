import React from 'react'

import { User } from "lucide-react";
import { useFileInput } from "./Root";
import { useMemo } from "react";

export function ImagePreview() {
    const { files } = useFileInput()

    const previewURL = useMemo(() => {
        if (files.length === 0) return null

        return URL.createObjectURL(files[0])
    }, [files])

    if (previewURL) {
        return <img src={previewURL} alt="" className="w-16 h-16 rounded-full object-cover" />
    } else {
        return (
            <div className='flex bg-violet-50 h-16 w-16 items-center justify-center rounded-full dark:bg-violet-500/10'>
                <User className='w-8 h-8 text-violet-500' />
            </div>
        )
    }

}