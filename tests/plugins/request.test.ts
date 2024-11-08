import { beforeAll, describe, expect, it } from 'vitest'
import { registerEndpoint } from '@nuxt/test-utils/runtime'

describe('nuxt request plugin test', () => {
  beforeAll(() => {
    registerEndpoint('/api/test', () => ({ test: 'success' }))
  })

  it('should start with /api', async () => {
    const { $request } = useNuxtApp()
    const res = await $request<{ test: string }>('/test')
    expect(res.test).toBe('success')
  })
})
