export default defineNuxtPlugin(() => {
  const request = $fetch.create({
    baseURL: '/api',
    credentials: 'include',
    timeout: 5000,
  })

  // Expose to useNuxtApp().$request
  return {
    provide: {
      request,
    },
  }
})
