import { InferType, boolean, object, string } from 'yup'

export const templateSchema = object({
    id: string().optional(),
    sasJourneyCode: string().optional(),
    supplierJourneyCode: string().optional(),
    journeyName: string().optional(),
    htmlTemplateName: string().optional(),
    variables: string().optional(),
    recipientName: string().optional(),
    recipientEmail: string().optional(),
    supplierName: string().optional(),
    stamp: boolean().default(false),
    active: boolean().default(false),
    whatsapp: boolean().default(false),
    printed: boolean().default(false),
})

export type TemplateType = InferType<typeof templateSchema>
