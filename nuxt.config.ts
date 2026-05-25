export default defineNuxtConfig({
  imports: {
    dirs: ['auth']
  },
  compatibilityDate: '2026-05-21',
  app: {
    head: {
      title: 'Exclusive E-Commerce',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
      ]
    }
  },
  css: ['@fortawesome/fontawesome-free/css/all.min.css',
    '~/assets/css/main.css',
    '~/assets/css/index.css',
    '~/assets/css/footer.css']
})