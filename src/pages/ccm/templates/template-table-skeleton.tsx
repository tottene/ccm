import { Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

export function TemplateTableSkeleton() {
    return Array.from({ length: 5 }).map((_, i) => {
        return (
            <TableRow key={i}>
                <TableCell>
                    <Skeleton />
                </TableCell>
                <TableCell>
                    <Skeleton />
                </TableCell>
                <TableCell>
                    <Skeleton />
                </TableCell>
                <TableCell>
                    <Skeleton />
                </TableCell>
                <TableCell>
                    <Skeleton />
                </TableCell>
            </TableRow>
        )
    })
}