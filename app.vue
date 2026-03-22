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
  title: 'Davide Baldi - Analytics & Data Platform Engineer',
  ogTitle: 'Davide Baldi - Analytics & Data Platform Engineer',
  description:
    'GCP-certified fullstack and cloud engineer building web platforms, cloud infrastructure, and data pipelines. Based in Stockholm.',
  ogDescription:
    'GCP-certified fullstack and cloud engineer building web platforms, cloud infrastructure, and data pipelines. Based in Stockholm.',
  ogImage: 'https://yourdomain.com/og-image.png',
  twitterCard: 'summary_large_image',
})
</script>
