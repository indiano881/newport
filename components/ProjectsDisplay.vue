<template>
  <section class="py-16 px-4 max-w-7xl mx-auto">
    <!-- Section Title -->
    <div class="text-center mb-12">
      <h2 class="text-5xl font-bold text-gray-900 mb-2">Projects</h2>
      <p class="text-gray-900 text-xl">A showcase of my latest work</p>
    </div>

    <!-- Responsive Card Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectC
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :image="`/projects/${project.image}`"
        :slug="project.slug"
      />
    </div>
  </section>
</template>

<script setup></script>
