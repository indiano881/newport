<template>
    <main class="flex flex-col items-center justify-center min-h-[1000px] px-6 py-12 space-y-10 text-center text-gray-800 dark:text-white">
    
    <!-- Profile Image -->
    <NuxtImg
      src="/davide.png"
      alt="Davide Baldi"
      class="rounded-full w-32 h-32 object-cover mt-12"
    />

    <!-- Introduction Text -->
    <div class="flex flex-col space-y-4 max-w-2xl">
      <p class="text-xl font-semibold">Hello! It’s-a me, Davide 👋</p>
      <p class="text-lg">Software engineer based in Stockholm</p>
      <p class="bg-slate-400 text-white px-4 py-2 rounded-md">
        I love to find solutions to complex IT problems!
      </p>
      <p class="text-lg">My expertise</p>
      <p class="text-base leading-relaxed">
        Web development, frontend engineering and optimization, cloud integrations, and strong knowledge of SQL and data analytics.
      </p>
    </div>

    <!-- Buttons -->
    <div class="flex flex-col sm:flex-row gap-4 mt-8">
      <!-- JS-triggered download button -->
      <button
        @click="downloadPDF"
        class="px-8 py-3 border rounded-full text-gray-700 border-gray-500 flex items-center gap-2 hover:bg-gray-100 transition duration-300 dark:text-black dark:border-white dark:hover:bg-gray-800 dark:hover:text-white bg-white"
      >
        Download CV
      </button>

      <!-- Direct link to PDF -->
      <a
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="px-8 py-3 border rounded-full text-gray-700 border-gray-500 flex items-center gap-2 hover:bg-gray-100 transition duration-300 dark:text-black dark:border-white dark:hover:bg-gray-800 dark:hover:text-white bg-white group"
      >
        My Resume
        <img
          src="/davide.png"
          alt="resume icon"
          width="20"
          height="20"
          class="w-4 dark:group-hover:filter dark:group-hover:brightness-0 dark:group-hover:invert"
        />
      </a>
    </div>

  </main>
    <ProjectsDisplay />
    <MyStory />
    
</template>
<script setup>
const downloadPDF = () => {
  const link = document.createElement('a')
  link.href = '/cv.pdf' 
  link.download = 'cv.pdf' 
  link.click()
}
</script>