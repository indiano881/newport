<template>
  <div>
    <NuxtLayout>
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'Davide – Fullstack Developer',
  ogTitle: 'Davide – Fullstack Developer',
  description:
    'Hi, I’m Davide. I build modern web and mobile apps using React, Vue, and Node.js. Passionate about clean code, design systems, and cloud technologies.',
  ogDescription:
    'Discover Davide’s portfolio – showcasing modern web development projects using React, Vue, Node.js, and more.',
  ogImage: 'https://yourdomain.com/og-image.png', // Replace with your actual OG image URL
  twitterCard: 'summary_large_image',
})
</script>
