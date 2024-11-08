import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',

  /*   browser: {
      provider: 'playwright',
      enabled: false,
      name: 'chromium',
    }, */
  },
})
