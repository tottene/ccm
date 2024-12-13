import { Helmet } from "react-helmet-async"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Input } from "@/components/ui/input"
import { TemplateListFilterType } from "@/validation/templates/list-template.schema"
import { TemplateListFilter, useTemplate } from "@/services/Template"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Pencil, Plus } from "lucide-react"
import { useNavigate } from "react-router-dom"

export function Templates() {
    const [templateListFilter, setTemplateListFilter] =
        useState<TemplateListFilterType>(new TemplateListFilter())
    const { getTemplateList } = useTemplate()
    const { data: templates } = getTemplateList(templateListFilter)
    const navigate = useNavigate()

    const handleFilterInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target

        if (value.length > 0 && value.length < 3) return

        setTemplateListFilter((oldState) => {
            return { ...oldState, terms: value }
        })
    }

    return (
        <>
            <Helmet title="Templates" />

            <div className="flex flex-col gap-4">
                <h1 className="text-lg font-bold tracking-tight">Lista de Templates</h1>
                <div className="space-y-2.5 flex flex-col items-start gap-2">
                    
                    <div className="flex items-center justify-start gap-6">
                        <Button variant='outline' size='sm' onClick={() => navigate('/ccm/templates/new')}>
                            <Plus className="h-3 w-3" />
                            Criar novo
                        </Button>
                        <span className="text-sm font-semibold flex items-center">
                            Filtros:
                            <Input
                                placeholder="Codigo da Jornada"
                                className="h-8 w-auto ml-2"
                                onChange={handleFilterInput}
                            />
                        </span>
                    </div>

                    <div className="rounded-md border w-full">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Código Jornada</TableHead>
                                    <TableHead>Nome do Html</TableHead>
                                    <TableHead>Fornecedor</TableHead>
                                    <TableHead>Editar</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {templates &&
                                    templates.map((template) => {
                                        return (
                                            <TableRow key={template.id}>
                                                <TableCell className="font-mono text-xs font-medium">
                                                    {template.sasJourneyCode}
                                                </TableCell>
                                                <TableCell className="font-mono text-xs font-medium">
                                                    {template.htmlTemplateName}
                                                </TableCell>
                                                <TableCell className="font-mono text-xs font-medium">
                                                    {template.supplierName}
                                                </TableCell>
                                                <TableCell>
                                                    <Button
                                                        variant='ghost'
                                                        size="sm"
                                                        onClick={() => alert(template.id)}
                                                    >
                                                        <Pencil className="h-3 w-3" />
                                                    </Button>
                                                </TableCell>
                                                <TableCell>
                                                    {
                                                        template.active ?
                                                            (
                                                                <Button
                                                                    variant="destructive"
                                                                    size="sm"
                                                                    onClick={() => { }}
                                                                >
                                                                    <ArrowLeft className="mr-2 h-3 w-3" />
                                                                    Inativar
                                                                </Button>
                                                            ) : (
                                                                <Button
                                                                    variant="default"
                                                                    size="sm"
                                                                    onClick={() => { }}
                                                                >
                                                                    <ArrowRight className="mr-2 h-3 w-3" />
                                                                    Ativar
                                                                </Button>
                                                            )}
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })}
                            </TableBody>
                        </Table>
                    </div>
                    {/* {isLoading && <TemplateTableSkeleton />} */}
                </div>
            </div>
        </>
    )
}