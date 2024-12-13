import { AxiosError, AxiosResponse } from 'axios'
import { QueryObserverOptions, useMutation, useQuery, useQueryClient } from 'react-query'
import { TemplateType } from '../validation/templates/create-template.schema'
import { TemplateListFilterType, TemplateListType } from '../validation/templates/list-template.schema'

import api from './api';

export class TemplateListFilter implements TemplateListFilterType {
    name: string = '';
    page: number = 0;
    limit: number = 12;
    direction: 'asc' | 'desc' = 'asc';
}

export function useTemplate() {
    const queryClient = useQueryClient();

    const getTemplate = (id?: string, options?: QueryObserverOptions<TemplateType | undefined, AxiosError>) => {
        return useQuery<TemplateType | undefined, AxiosError>(['get-templates', {id}], async () => {
            if (!id) return undefined;

            const { data } = await api.get(`/templates/id/${id}`);

            return data;
        }, {
            enabled: !!id,
            refetchOnWindowFocus: false,
            ...options
        })
    }

    const getTemplateList = (filter: TemplateListFilterType, options?: QueryObserverOptions<TemplateListType[], AxiosError>) => {
        return useQuery<TemplateListType[], AxiosError>({
            queryKey: ['get-template-list', {filter}],
            queryFn: async () => {

                // const { data } = await api.get('/templates', { params: filter });

                return [
                    {
                        id: '1',
                        sasJourneyCode: '123456',
                        htmlTemplateName: 't.html',
                        supplierName: 'SAS',
                        active: true
                    },
                    {
                        id: '2',
                        sasJourneyCode: '654321',
                        htmlTemplateName: 'z.html',
                        supplierName: 'SAS',
                        active: false
                    },
                    {
                        id: '3',
                        sasJourneyCode: '555555',
                        htmlTemplateName: 'y.html',
                        supplierName: 'SAS',
                        active: false
                    }
                ]
            },
            refetchOnWindowFocus: false,
            ...options
        })
    }

    const createTemplate = () => {
        return useMutation<AxiosResponse<TemplateType>, AxiosError, TemplateType>({
            mutationFn: async (template: TemplateType) => {
                const response = await api.post<TemplateType>(`/templates`, template)

                queryClient.invalidateQueries({ queryKey: ['get-template-list'] })

                return response
            }
        })
    }

    const updateTemplate = () => {
        return useMutation<AxiosResponse<TemplateType>, AxiosError, TemplateType>({
            mutationFn: async (template: TemplateType) => {
                const response = await api.put<TemplateType>(`/templates`, template)

                queryClient.invalidateQueries({ queryKey: ['get-template-list'] })
                
                return response
            }
        })
    }

    const activateTemplate = () => {
        return useMutation<AxiosResponse<undefined>, AxiosError, string>({
            mutationFn: async (id) => {
                const response = await api.patch<undefined>(`/templates/${id}/ativar`, null);

                queryClient.invalidateQueries({ queryKey: ['get-template-list'] })

                return response
            }
        })
    }

    const inactivateTemplate = () => {
        return useMutation<AxiosResponse<undefined>, AxiosError, string>({
            mutationFn: async (id) => {
                const response = await api.patch<undefined>(`/templates/${id}/inativar`, null);

                queryClient.invalidateQueries({ queryKey: ['get-template-list'] })

                return response
            }
        })
    }

    return { getTemplate, getTemplateList, createTemplate, updateTemplate, activateTemplate, inactivateTemplate }
}
