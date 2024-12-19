import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useTemplate } from "@/services/Template"
import { TemplateType } from "@/validation/templates/create-template.schema"
import { ArrowLeft, Save } from "lucide-react"
import { SubmitHandler, Controller, useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "sonner"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { useEffect, useState } from "react"
import { IdParamsProp } from "@/types/routes"

export function Template() {
    const [templateId, setTemplateId] = useState<string | undefined>()
    const { id } = useParams<IdParamsProp>()
    const navigate = useNavigate()
    const {
        register, control, handleSubmit, getValues, setValue, reset, formState: { isSubmitting }
    } = useForm<TemplateType>()

    const { getTemplate, createTemplate, updateTemplate } = useTemplate()
    const createTemplateMutate = createTemplate()
    const updateTemplateMutate = updateTemplate()
    const { data, isLoading } = getTemplate(templateId)

    useEffect(() => {
        setTemplateId(id)
    }, [id])

    useEffect(() => {
        if (data) {
            reset(data)
        }
    }, [data])

    const handleFormSubmit: SubmitHandler<TemplateType> = async (formData) => {
        try {
            console.log(formData)
            if (templateId && templateId !== 'new') {
                // await createTemplateMutate.mutateAsync(formData)
                toast.success('Template salvo com sucesso!')
                // navigate('/templates')
            } else {
                // await updateTemplateMutate.mutateAsync(formData)
                toast.success('Template alterado com sucesso!')
                // navigate('/templates')
            }
        } catch (error) {
            console.log(error)
            toast.error('Erro ao cadastrar o template')
        }
    }

    function handleChangeBooleans(key: 'active' | 'stamp' | 'whatsapp' | 'printed', value: boolean) {
        setValue(key, value);
    }

    useEffect(() => {
        setValue('bu', 'corp')
        setValue('eventType', 'ondemand')
        setValue('supplierName', 'sas')
    }, [])

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full md:w-4/5 flex items-center justify-between">
                <Button variant='link' size='sm' onClick={() => navigate('/ccm/templates')}>
                    <ArrowLeft className="h-3 w-3" />
                    Voltar
                </Button>
                <Button type="submit" variant='default' size='sm' form="templateId">
                    <Save className="h-3 w-3" />
                    Salvar
                </Button>
            </div>
            <form onSubmit={handleSubmit(handleFormSubmit)} id={'templateId'} className="mt-4 w-full md:w-4/5">
                <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-0.5">
                        <Label htmlFor="journeyName">Nome da Jornada</Label>
                        <Input
                            id="journeyName"
                            type="text"
                            {...register('journeyName')}
                        />
                    </div>
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-0.5">
                        <Label htmlFor="htmlTemplateName">Nome do Html</Label>
                        <Input
                            id="htmlTemplateName"
                            type="text"
                            {...register('htmlTemplateName')}
                        />
                    </div>
                    <div className="space-y-0.5">
                        <Label htmlFor="sasJourneyCode">Código Jornada CCM</Label>
                        <Input
                            id="sasJourneyCode"
                            type="text"
                            {...register('sasJourneyCode')}
                        />
                    </div>
                    <div className="space-y-0.5">
                        <Label htmlFor="supplierName">Nome do Fornecedor</Label>
                        <Controller
                            name="supplierName"
                            control={control}
                            render={({ field: { name, onChange, value, disabled } }) => {
                                return (
                                    <Select
                                        defaultValue="sas"
                                        name={name}
                                        onValueChange={onChange}
                                        value={value}
                                        disabled={disabled}
                                    >
                                        <SelectTrigger className="h-8 w-full">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="sas">Sas</SelectItem>
                                            <SelectItem value="zenvia">Zenvia</SelectItem>
                                            <SelectItem value="valid">Valid</SelectItem>
                                        </SelectContent>
                                    </Select>
                                )
                            }}
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
                        <Label htmlFor="bu">BU</Label>
                        <Controller
                            name="bu"
                            control={control}
                            render={({ field: { name, onChange, value, disabled } }) => {
                                return (
                                    <Select
                                        defaultValue="corp"
                                        name={name}
                                        onValueChange={onChange}
                                        value={value}
                                        disabled={disabled}
                                    >
                                        <SelectTrigger className="h-8 w-full">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="corp">Corporativo</SelectItem>
                                            <SelectItem value="saude">Saúde</SelectItem>
                                            <SelectItem value="odonto">Odonto</SelectItem>
                                            <SelectItem value="prev">Previdência</SelectItem>
                                            <SelectItem value="vida">Vida</SelectItem>
                                        </SelectContent>
                                    </Select>
                                )
                            }}
                        />
                    </div>
                    <div className="space-y-0.5">
                        <Label htmlFor="bu">Origem</Label>
                        <Input
                            id="origin"
                            type="text"
                            {...register('origin')}
                        />
                    </div>
                    <div className="space-y-0.5">
                        <Label htmlFor="bu">Nome Evento</Label>
                        <Input
                            id="eventName"
                            type="text"
                            {...register('eventName')}
                        />
                    </div>
                    <div className="space-y-0.5">
                        <Label htmlFor="bu">Tipo Evento</Label>
                        <Controller
                            name="eventType"
                            control={control}
                            render={({ field: { name, onChange, value, disabled } }) => {
                                return (
                                    <Select
                                        defaultValue="ondemand"
                                        name={name}
                                        onValueChange={onChange}
                                        value={value}
                                        disabled={disabled}
                                    >
                                        <SelectTrigger className="h-8 w-full">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="ondemand">OnDemand</SelectItem>
                                            <SelectItem value="batch">Batch</SelectItem>
                                            <SelectItem value="instantaneo">Instantâneo</SelectItem>
                                            <SelectItem value="spot">Spot</SelectItem>
                                        </SelectContent>
                                    </Select>
                                )
                            }}
                        />
                    </div>
                    <div className="space-y-0.5">
                        <Label htmlFor="bu">URL Callback</Label>
                        <Input
                            id="callbackUrl"
                            type="text"
                            {...register('callbackUrl')}
                        />
                    </div>
                    <div className="space-y-0.5">
                        <Label htmlFor="bu">Autorização Callback</Label>
                        <Input
                            id="callbackAuthorization"
                            type="text"
                            {...register('callbackAuthorization')}
                        />
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center justify-start gap-2">
                        <Label htmlFor="stamp">Ativo?</Label>
                        <Switch
                            checked={getValues('active')}
                            defaultChecked={false}
                            onCheckedChange={() => handleChangeBooleans('active', !getValues('active'))}
                        />
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <Label htmlFor="stamp">Tem Carimbo?</Label>
                        <Switch
                            checked={getValues('stamp')}
                            defaultChecked={false}
                            onCheckedChange={() => handleChangeBooleans('stamp', !getValues('stamp'))}
                        />
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <Label htmlFor="whatsapp">Tem WhatsApp?</Label>
                        <Switch
                            checked={getValues('whatsapp')}
                            defaultChecked={false}
                            onCheckedChange={() => handleChangeBooleans('whatsapp', !getValues('whatsapp'))}
                        />
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <Label htmlFor="printed">Tem Impresso?</Label>
                        <Switch
                            checked={getValues('printed')}
                            defaultChecked={false}
                            onCheckedChange={() => handleChangeBooleans('printed', !getValues('printed'))}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}