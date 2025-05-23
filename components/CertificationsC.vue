<template>
  <div class="max-w-6xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold mb-8 text-center text-black">
      My Certifications
    </h1>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(cert, index) in certifications"
        :key="index"
        class="rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center relative group bg-blue-200"
      >
        <img
          :src="`/certifications/${cert.image}`"
          :alt="cert.title"
          class="w-24 h-24 mx-auto mb-4 object-contain"
        />
        <h2 class="text-xl font-semibold text-black">{{ cert.title }}</h2>

        <!-- Hover effect -->
        <div
          class="absolute inset-0 bg-black bg-opacity-40 text-white flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div class="flex flex-col items center space-y-2">
            <span class="text-sm font-semibold">{{ cert.number }}</span>
            <span class="text-xl font-semibold"
              >Valid till: {{ cert.expiration }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { certifications } from '@/utils/certification.js'
</script>
