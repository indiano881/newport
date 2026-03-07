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
        <p class="text-3xl font-bold text-black">Davide Baldi</p>
        <p class="text-xl text-black">
          Cloud-Native Fullstack & Analytics Engineer
        </p>
        <p
          class="bg-white text-black px-4 py-2 rounded-md text-2xl border-black border-2"
        >
          I architect scalable platforms, automate data workflows, and build
          fullstack products that drive real impact.
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
          href="/cv2.pdf"
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
  <section class="slide" data-background="#eacbd1">
    <ProjectsDisplay />
  </section>

  <!-- Core Pillars -->
  <section class="slide" data-background="#FCD9AE">
    <div class="max-w-6xl mx-auto px-6 py-20">
      <h2 class="text-4xl font-bold text-center text-black mb-4">
        Core Pillars
      </h2>
      <p class="text-center text-base leading-relaxed text-black mb-14">
        GCP-certified data engineer with hands-on experience across fullstack
        development, cloud architecture, DevOps automation, and analytics.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Web Platforms -->
        <div class="text-center">
          <div class="text-5xl mb-4">
            <Icon name="mdi:web" size="48" class="text-black" />
          </div>
          <h3 class="text-xl font-semibold text-black mb-3">Web Platforms</h3>
          <p class="text-base leading-relaxed text-black">
            Modern fullstack applications with Vue, React, Nuxt, and Next.js.
            Server-side rendering, static generation, and API design — built for
            performance and maintainability.
          </p>
        </div>
        <!-- Cloud & Infrastructure -->
        <div class="text-center">
          <div class="text-5xl mb-4">
            <Icon name="mdi:cloud-outline" size="48" class="text-black" />
          </div>
          <h3 class="text-xl font-semibold text-black mb-3">
            Cloud & Infrastructure
          </h3>
          <p class="text-base leading-relaxed text-black">
            GCP and AWS architecture — compute, storage, networking, and
            serverless. Infrastructure as Code with Terraform, container
            orchestration with Kubernetes and Docker.
          </p>
        </div>
        <!-- Analytics & Automation -->
        <div class="text-center">
          <div class="text-5xl mb-4">
            <Icon name="mdi:chart-bar-stacked" size="48" class="text-black" />
          </div>
          <h3 class="text-xl font-semibold text-black mb-3">
            Analytics & Automation
          </h3>
          <p class="text-base leading-relaxed text-black">
            Data pipelines with BigQuery, Dataflow, and Pub/Sub. CI/CD
            automation with GitHub Actions. ETL workflows, monitoring, and
            observability built into every system.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="slide" data-background="#FCD9AE">
    <div class="max-w-6xl mx-auto px-6 py-20">
      <h2 class="text-4xl font-bold text-center text-black mb-14">
        What People Say
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div
          v-for="(t, index) in testimonials"
          :key="index"
          class="bg-white rounded-xl shadow-md p-6 text-center"
        >
          <p class="text-base leading-relaxed text-gray-700 italic mb-4">
            "{{ t.short }}"
          </p>
          <p class="text-sm font-semibold text-black">{{ t.name }}</p>
          <p class="text-sm text-gray-500">{{ t.role }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Services -->
  <section class="slide" data-background="#94bde3">
    <div class="max-w-6xl mx-auto px-6 py-20">
      <h2 class="text-4xl font-bold text-center text-black mb-14">
        Services
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        <div
          v-for="service in visibleServices"
          :key="service.title"
          class="bg-white border-2 border-black rounded-2xl p-8 flex flex-col items-center text-center"
        >
          <Icon :name="service.icon" size="48" class="mb-4 text-black" />
          <h3 class="text-xl font-semibold text-black mb-3">
            {{ service.title }}
          </h3>
          <p class="text-base leading-relaxed text-gray-700">
            {{ service.description }}
          </p>
          <p v-if="service.pricing" class="text-black font-semibold mt-4">
            {{ service.pricing }}
          </p>
        </div>
      </div>
      <div class="flex flex-col items-center gap-4">
        <a
          href="https://calendly.com/d-baldi88/30min"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 border-2 border-black text-lg"
        >
          <Icon name="mdi:calendar-clock" size="24" />
          Book a Call
        </a>
        <NuxtLink
          to="/services"
          class="text-black underline hover:no-underline"
        >
          View all services
        </NuxtLink>
      </div>
    </div>
  </section>

  <section class="slide" data-background="#94bde3">
    <MyStory />
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { testimonials } from '@/utils/testimonials.js'
import { services } from '@/utils/services.js'

const visibleServices = services.slice(0, 3)

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
  const isMobile = window.innerWidth < 768

  if (!isMobile) {
    window.addEventListener('mousemove', handleMouseMove)
  }

  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('scroll', handleScroll)
})

const downloadPDF = () => {
  const link = document.createElement('a')
  link.href = '/cv2.pdf'
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
  background-color: white;
  color: black;
  text-align: center;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
  text-decoration: none;
}

.custom-button:hover {
  background-color: #f0f0f0;
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
