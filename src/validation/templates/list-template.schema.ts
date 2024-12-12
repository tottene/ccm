import { InferType, number, object, string } from 'yup';

export const templateListSchema = object({
    id: string(),
    sasJourneyCode: string(),
    htmlTemplateName: string(),
    supplierName: string()
})

export const templateListFilterSchema = object({
    page: number().optional(),
    limit: number().optional(),
    terms: string().optional(),
    direction: string().optional(),
});

export type TemplateListType = InferType<typeof templateListSchema>;
export type TemplateListFilterType = InferType<typeof templateListFilterSchema>;
