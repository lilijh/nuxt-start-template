import type { UseFetchOptions } from 'nuxt/app'

export function useRequest<T>(
  url: string | (() => string),
  options?: Omit<UseFetchOptions<T>, 'default'>,
) {
  return useFetch(url, {
    server: false,
    lazy: true,
    $fetch: useNuxtApp().$request,
    ...options,
  })
}
