<template>
  <div v-if="project" class="p-6 max-w-4xl mx-auto space-y-6">
    <div class="text-center">
      <h2 class="text-4xl font-bold mb-2">{{ project.title }}</h2>
      <p class="text-lg text-gray-600 italic">{{ project.subtitle }}</p>
    </div>

    <!-- Images -->
    <div v-if="project.images && project.images.length > 1" class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <img
        v-for="(img, i) in project.images"
        :key="img"
        :src="`/projects/${img}`"
        :alt="project.title"
        class="w-full rounded-lg shadow-lg object-cover border-black border-2"
        :class="{ 'md:col-span-2': project.images.length % 2 !== 0 && i === project.images.length - 1 }"
      />
    </div>
    <img
      v-else
      :src="`/projects/${project.image}`"
      :alt="project.title"
      class="w-full rounded-lg shadow-lg object-cover border-black border-2"
    />

    <!-- Video -->
    <div v-if="project.video" class="aspect-video w-full">
      <video
        v-if="project.video.endsWith('.mp4')"
        :src="project.video"
        controls
        class="w-full h-full rounded-lg shadow-lg border-black border-2"
      ></video>
      <iframe
        v-else
        :src="project.video"
        class="w-full h-full rounded-lg shadow-lg border-black border-2"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    </div>

    <div class="space-y-4">
      <h3 class="text-2xl font-semibold text-black">Description</h3>
      <p class="text-gray-700">{{ project.description }}</p>

      <h3 class="text-2xl font-semibold text-black">Content</h3>
      <p class="text-gray-700">{{ project.content }}</p>

      <div v-if="project.role">
        <h3 class="text-2xl font-semibold text-black">My Role</h3>
        <p class="text-gray-700">{{ project.role }}</p>
      </div>

      <h3 class="text-2xl font-semibold text-black">Tech Stack</h3>
      <p class="text-gray-800">
        <span
          class="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2"
          v-for="tech in project.tech.split(', ')"
          :key="tech"
        >
          {{ tech }}
        </span>
      </p>

      <div class="flex space-x-6 pt-4">
        <a
          v-if="project.siteLink"
          :href="project.siteLink"
          target="_blank"
          class="text-blue-600 underline hover:text-blue-800"
        >
          Live Site
        </a>
        <a
          v-if="project.githubLink"
          :href="project.githubLink"
          target="_blank"
          class="text-blue-600 underline hover:text-blue-800"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>

  <div v-else class="text-center text-red-500 mt-20">
    <h2 class="text-2xl font-bold">Project not found</h2>
  </div>
  <div class="pt-6">
    <button
      @click="$router.push('/projects')"
      class="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      aria-label="Back to Projects"
    >
      ← Back to Projects
    </button>
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
