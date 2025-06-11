<template>
  <section class="slide" data-background="#eacbd1 ">
    <main
      class="flex flex-col items-center justify-center min-h-screen h-full px-6 space-y-8 text-center text-gray-800 dark:text-white"
    >
      <!-- Profile Image -->
      <div
        class="relative mt-12 w-32 h-32 md:w-72 md:h-72"
        :style="{ transform: `rotate(${-eyeOffsetX * 2}deg)` }"
      >
        <!-- Face image -->
        <NuxtImg
          src="/hero/face.svg"
          alt="Davide Baldi"
          class="rounded-full w-full h-full object-cover"
        />

        <!-- Iris 1 (left eye) -->
        <NuxtImg
          src="/hero/iris.svg"
          alt="Left Iris"
          class="absolute w-1 h-1 md:w-2 md:h-2 top-[40%] left-[42%]"
          :style="{ transform: `translate(${eyeOffsetX}px, ${eyeOffsetY}px)` }"
        />

        <!-- Iris 2 (right eye) -->
        <NuxtImg
          src="/hero/iris.svg"
          alt="Right Iris"
          class="absolute w-1 h-1 md:w-2 md:h-2 top-[40%] right-[42%]"
          :style="{ transform: `translate(${eyeOffsetX}px, ${eyeOffsetY}px)` }"
        />

        <!-- Eyebrow 1 (left) -->
        <NuxtImg
          src="/hero/eyebrow.svg"
          alt="Left Eyebrow"
          class="absolute w-1 h-1 md:w-5 md:h-5 top-[32%] left-[40%]"
          :style="{ transform: `translate(${eyeOffsetX}px, ${eyeOffsetY}px)` }"
        />

        <!-- Eyebrow 2 (right) -->
        <NuxtImg
          src="/hero/eyebrow.svg"
          alt="Right Eyebrow"
          class="absolute w-1 h-1 md:w-5 md:h-5 top-[32%] right-[40%]"
          :style="{ transform: `translate(${eyeOffsetX}px, ${eyeOffsetY}px)` }"
        />
      </div>

      <!-- Introduction Text -->
      <div class="flex flex-col space-y-4 max-w-2xl">
        <p class="text-2xl font-semibold text-black">
          Hello! It’s a me, Davide 👋
        </p>
        <p class="text-lg text-black">Fullstack developer based in Stockholm</p>
        <p
          class="bg-[#05A7F2] text-white px-4 py-2 rounded-md text-2xl border-black border-2"
        >
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

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="custom-button link-button"
          aria-label="download my resume"
        >
          Check my resume
        </a>
      </div>
    </main>
  </section>
  <!-- Scroll Sections -->
  <section class="slide" data-background="#FCD9AE">
    <ProjectsDisplay />
  </section>
  <section class="slide" data-background="#94bde3" data-text="white">
    <MyStory />
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const eyeOffsetX = ref(0)
const eyeOffsetY = ref(0)

const MAX_EYE_X = 2
const MAX_EYE_Y = 5

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const handleMouseMove = e => {
  const centerX = window.innerWidth / 2
  const centerY = window.innerHeight / 2
  const offsetX = e.clientX - centerX
  const offsetY = e.clientY - centerY
  const ratio = 0.015

  eyeOffsetX.value = clamp(offsetX * ratio, -MAX_EYE_X, MAX_EYE_X)
  eyeOffsetY.value = clamp(offsetY * ratio, -MAX_EYE_Y, MAX_EYE_Y)
}

const handleScroll = () => {
  const sections = document.querySelectorAll('.slide')
  const offset = 50
  const scrollY = window.scrollY

  sections.forEach(section => {
    const rect = section.getBoundingClientRect()
    const top = rect.top + scrollY
    const bottom = top + rect.height

    if (scrollY + offset >= top && scrollY + offset <= bottom) {
      const bgColor = section.dataset.background
      const textColor = section.dataset.text || 'black'

      // Set background
      if (bgColor) {
        document.body.style.transition = 'background-color 0.5s ease'
        document.body.style.backgroundColor = bgColor
      }

      // Toggle text color class
      if (textColor === 'white') {
        document.body.classList.add('text-white')
        document.body.classList.remove('text-black')
      } else {
        document.body.classList.add('text-black')
        document.body.classList.remove('text-white')
      }
    }
  })
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('scroll', handleScroll)
})

const downloadPDF = () => {
  const link = document.createElement('a')
  link.href = '/resume.pdf'
  link.download = 'resume.pdf'
  link.click()
}

onBeforeRouteLeave(() => {
  document.body.style.backgroundColor = ''
  document.body.classList.remove('text-white')
  document.body.classList.remove('text-black')
})
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
  border-radius: 9999px;
  background-color: #aee4fd;
  color: black;
  text-align: center;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
  text-decoration: none;
}

.custom-button:hover {
  background-color: #73c7ef;
}

@media (prefers-color-scheme: dark) {
  .custom-button {
    border-color: white;
    color: black;
    background-color: white;
  }

  .custom-button:hover {
    background-color: #1f2937;
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
