import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import api from "@/services/api"
import { useTemplate } from "@/services/Template"
import { TemplateType } from "@/validation/templates/create-template.schema"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

export function Template() {
    const navigate = useNavigate()
    const { 
        register, handleSubmit, formState: { isSubmitting }
    } = useForm<TemplateType>()

    const { createTemplate } = useTemplate()
    const createTemplateMutate = createTemplate()

    const handleFormSubmit: SubmitHandler<TemplateType> = async(formData) => {
        try {
            await createTemplateMutate.mutateAsync(formData)
            toast.success('Template salvo com sucesso!')
            navigate('/templates')
        } catch (error) {
            console.log(error)
            toast.error('Erro ao cadastrar o template')
        }
    }
    
    return (
        <div className="w-full p-8 lg:w-2/3">
            <form onSubmit={handleSubmit(handleFormSubmit)} id={'templateId'} className="space-y-2">
                <div className="space-y-0.5">
                    <Label htmlFor="sasJourneyCode">Código Jornada CCM</Label>
                    <Input
                        id="sasJourneyCode"
                        type="text"
                        {...register('sasJourneyCode')}
                    />
                </div>
                <div className="space-y-0.5">
                    <Label htmlFor="supplierJourneyCode">Código Jornada Fornecedor</Label>
                    <Input
                        id="supplierJourneyCode"
                        type="text"
                        {...register('supplierJourneyCode')}
                    />
                </div>
                <div className="space-y-0.5">
                    <Label htmlFor="journeyName">Nome da Jornada</Label>
                    <Input
                        id="journeyName"
                        type="text"
                        {...register('journeyName')}
                    />
                </div>
                <div className="space-y-0.5">
                    <Label htmlFor="htmlTemplateName">Nome da Html</Label>
                    <Input
                        id="htmlTemplateName"
                        type="text"
                        {...register('htmlTemplateName')}
                    />
                </div>
                <div className="space-y-0.5">
                    <Label htmlFor="recipientName">Nome do Remetente</Label>
                    <Input
                        id="recipientName"
                        type="text"
                        defaultValue="SulAmérica Seguros"
                        {...register('recipientName')}
                    />
                </div>
                <div className="space-y-0.5">
                    <Label htmlFor="recipientEmail">Email do Remetente</Label>
                    <Input
                        id="recipientEmail"
                        type="text"
                        defaultValue="grp-sousulamerica@sulamerica.com.br"
                        {...register('recipientEmail')}
                    />
                </div>
                <div className="space-y-0.5">
                    <Label htmlFor="supplierName">Nome do Fornecedor</Label>
                    <Input
                        id="supplierName"
                        type="text"
                        {...register('supplierName')}
                    />
                </div>
                <div className="space-y-0.5">
                    <Label htmlFor="stamp">Carimbo do Tempo</Label>
                    <Input
                        id="stamp"
                        type="text"
                        defaultValue={0}
                        {...register('stamp')}
                    />
                </div>
                <div className="space-y-0.5">
                    <Label htmlFor="whatsapp">WhatsApp</Label>
                    <Input
                        id="whatsapp"
                        type="text"
                        defaultValue={0}
                        {...register('whatsapp')}
                    />
                </div>
                <div className="space-y-0.5">
                    <Label htmlFor="printed">Impresso</Label>
                    <Input
                        id="printed"
                        type="text"
                        defaultValue={0}
                        {...register('printed')}
                    />
                </div>
            </form>
        </div>
    )
}