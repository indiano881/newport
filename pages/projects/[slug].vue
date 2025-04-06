<template>
    <div v-if="project" class="p-6 max-w-xl mx-auto">
      <h1 class="text-6xl text-black">PAGE UNDER COSTRUCTION</h1>
      <h1 class="text-3xl font-bold mb-4">{{ project.title }}</h1>
      <img :src="project.image" :alt="project.title" class="rounded-lg shadow-md mb-4" />
      <p class="text-gray-700">{{ project.description }}</p>
    </div>
    <div v-else class="text-center text-red-500 mt-20">
      <h2>Project not found</h2>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import { computed } from 'vue'
  import { projects } from '@/utils/data.js' 
  
  const route = useRoute()
  
  const project = computed(() => {
    const slug = route.params.slug
    return projects.find(p => p.slug === slug)
  })
  </script>
  
  <style scoped>
  img {
    max-width: 100%;
  }
  </style>
  