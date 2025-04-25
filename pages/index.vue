<template>
  <main
    class="flex flex-col items-center justify-center min-h-[600px] px-6 space-y-8 text-center text-gray-800 dark:text-white"
  >
    <!-- Profile Image -->
    <NuxtImg
      src="/projects/gamer.png"
      alt="Davide Baldi"
      class="rounded-full w-32 h-32 object-cover mt-12"
    />

    <!-- Introduction Text -->
    <div class="flex flex-col space-y-4 max-w-2xl">
      <p class="text-xl font-semibold text-black">
        Hello! It’s a me, Davide 👋
      </p>
      <p class="text-lg text-black">Software engineer based in Stockholm</p>
      <p class="bg-slate-400 text-white px-4 py-2 rounded-md">
        I love to find solutions to complex IT problems!
      </p>
      <p class="text-lg text-black font-semibold">My expertise</p>
      <p class="text-base leading-relaxed text-black">
        Frontend engineering and web optimization, cloud development and data
        analytics.
      </p>
    </div>

    <!-- Buttons -->
    <div class="button-wrapper">
      <!-- JS-triggered download button -->
      <button
        class="custom-button"
        aria-label="check my resume"
        @click="downloadPDF()"
      >
      Download CV
      <img
          src="/down.svg"
          alt="resume icon"
          width="20"
          height="20"
          class="icon"
        />
      </button>

      <!-- Direct link to PDF -->
      <a
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="custom-button link-button"
        aria-label="download my resume"
      >
      Check my resume 
        
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

<style scoped>
.button-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

@media (min-width: 640px) {
  .button-wrapper {
    flex-direction: row;
  }
}

.custom-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  min-width: 190px;
  border: 2px solid black;
  border-radius: 9999px; /* Full rounded */
  background-color: white;
  color: black;
  text-align: center;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
  text-decoration: none; /* For anchor tags */
}

.custom-button:hover {
  background-color: #f5f5f5; /* Light gray */
}

@media (prefers-color-scheme: dark) {
  .custom-button {
    border-color: white;
    color: black;
    background-color: white;
  }

  .custom-button:hover {
    background-color: #1f2937; /* Dark gray */
    color: white;
  }
}

.icon {
  width: 1rem;
}

@media (prefers-color-scheme: dark) {
  .link-button:hover .icon {
    filter: brightness(0) invert(1);
  }
}
</style>
