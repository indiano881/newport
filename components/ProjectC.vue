<template>
  <div
    class="relative w-[90%] md:w-full h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group mx-4"
  >
    <!-- Hackathon Badge -->
    <div
      v-if="hackathon"
      class="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm text-xs font-semibold px-2 py-1 rounded-full border border-black/20 shadow-sm"
    >
      {{ hackathon.place === 1 ? '🥇' : hackathon.place === 2 ? '🥈' : '🥉' }}
      {{ hackathon.place === 1 ? '1st' : hackathon.place === 2 ? '2nd' : '3rd' }} Place
    </div>

    <!-- Background Image -->
    <img
      :src="image"
      alt="Project image"
      class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
    />

    <!-- Fading Overlay -->
    <div
      class="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-500"
    ></div>

    <!-- Bottom Panel with Text -->
    <div
      class="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm transition-all duration-500 p-4 text-white"
    >
      <!-- Title -->
      <h2
        class="text-xl font-semibold mb-1 transform transition-all duration-500 group-hover:translate-y-[-0.5rem]"
      >
        {{ title }}
      </h2>

      <!-- Description & Button -->
      <div
        class="opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-40"
      >
        <p class="text-sm mb-2">
          {{ description }}
        </p>
        <button
          @click="goToProject(slug)"
          class="bg-white text-black px-3 py-1 rounded-lg text-sm hover:bg-gray-200 transition"
        >
          Go to Project
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: 'This is a short project description.',
  },
  slug: {
    type: String,
    required: true,
  },
  hackathon: {
    type: Object,
    default: null,
  },
})

const goToProject = slug => {
  router.push(`/projects/${slug}`)
}
</script>
