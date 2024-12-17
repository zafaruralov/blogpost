import {
  useQuery,
  useMutation,
  useInfiniteQuery,
  UseQueryOptions,
  UseInfiniteQueryOptions,
  UseMutationOptions
} from "@tanstack/vue-query";
import { AxiosResponse } from "axios";
import { http } from "@/utils/http";

const getParams = (data: Record<string, any> = {}): Record<string, any> => {
  const params: Record<string, any> = {};

  for (const [key, value] of Object.entries(data)) {
    if ((value && value.value && value.value !== "all") || value.value === 0) {
      params[key] = value.value;
    }
  }

  return params;
};

interface QueryParams {
  link: string;
  params?: Record<string, any>;
  headers?: Record<string, string>;
}

interface MutationParams {
  method?: "get" | "post" | "put" | "delete" | "patch";
  link: string;
  data?: Record<string, any> | null;
  params?: Record<string, any>;
}

export const useGet = <TData = unknown, TError = unknown>({
  link,
  params,
  ...options
}: QueryParams & UseQueryOptions<AxiosResponse<TData>, TError>) => {
  return useQuery<AxiosResponse<TData>, TError>({
    queryKey: [link, params],
    queryFn: () => http.get(link, { params: { ...getParams(params), headers: { ...options.headers } } }),
    retry: 1,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    ...options
  });
};

export const useMoreData = <TData = any, TError = unknown>({
  link,
  params,
  ...options
}: QueryParams & UseInfiniteQueryOptions<AxiosResponse<TData>, TError>) =>
  useInfiniteQuery<AxiosResponse<TData>, TError>({
    queryKey: [link, params],
    queryFn: ({ pageParam }) => http.get(link, { params: { page: pageParam, ...params } }),
    getNextPageParam: (lastPage, pages) => lastPage.data?.nextCursor,
    getPreviousPageParam: (firstPage, allPages) => firstPage.data?.prevCursor,
    ...options
  });

export const useMutate = <TData = any, TVariables = MutationParams, TError = unknown>({
  ...options
}: UseMutationOptions<AxiosResponse<TData>, TError, TVariables>) =>
  useMutation<AxiosResponse<TData>, TError, TVariables>({
    mutationFn: ({ method = "post", link, data = null, params }) => http[method](link, data, { params }),
    retry: 1,
    ...options
  });
