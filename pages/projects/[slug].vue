<template>
  <div v-if="project" class="p-6 max-w-4xl mx-auto space-y-6">
    <h1 class="text-5xl font-extrabold text-center text-black uppercase">Page Under Construction</h1>
    
    <div class="text-center">
      <h2 class="text-4xl font-bold mb-2">{{ project.title }}</h2>
      <p class="text-lg text-gray-600 italic">{{ project.subtitle }}</p>
    </div>

    <img
      :src="project.image"
      :alt="project.title"
      class="w-full rounded-lg shadow-lg object-cover"
    />

    <div class="space-y-4">
      <h3 class="text-2xl font-semibold">Description</h3>
      <p class="text-gray-700">{{ project.description }}</p>

      <h3 class="text-2xl font-semibold">Content</h3>
      <p class="text-gray-700">{{ project.content }}</p>

      <h3 class="text-2xl font-semibold">Tech Stack</h3>
      <p class="text-gray-800">
        <span class="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2" v-for="tech in project.tech.split(', ')" :key="tech">
          {{ tech }}
        </span>
      </p>

      <div class="flex space-x-6 pt-4">
        <a :href="project.siteLink" target="_blank" class="text-blue-600 underline hover:text-blue-800">
          Live Site
        </a>
        <a :href="project.githubLink" target="_blank" class="text-blue-600 underline hover:text-blue-800">
          GitHub
        </a>
      </div>
    </div>
  </div>

  <div v-else class="text-center text-red-500 mt-20">
    <h2 class="text-2xl font-bold">Project not found</h2>
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
