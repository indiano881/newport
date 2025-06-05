// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss', '@nuxt/icon'],
  css: ['@/assets/css/main.css'],
  app: {
    head: {
      title: "Hi! I am Davide",
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-V2ZKF6F00E',
          async: true
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V2ZKF6F00E');
          `,
          type: 'text/javascript'
        }
      ]
    }
  }
})

