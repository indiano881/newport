<template>
  <main
    class="flex flex-col items-center justify-center min-h-[600px] h-full px-6 space-y-8 text-center text-gray-800 dark:text-white "
  >
    <!-- Profile Image -->
    <div
      class="relative mt-12 w-32 h-32 md:w-72 md:h-72"
      @mousemove="handleMouseMove"
      ref="faceRef"
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
      />

      <!-- Iris 2 (right eye) -->
      <NuxtImg
        src="/hero/iris.svg"
        alt="Right Iris"
        class="absolute w-1 h-1 md:w-2 md:h-2 top-[40%] right-[42%]"
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

const faceRef = ref(null)
const mouseX = ref(0)
const mouseY = ref(0)

const handleMouseMove = e => {
  const rect = faceRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  mouseX.value = x
  mouseY.value = y
}

// Base position for irises (adjust to match eyes)
const eyeOffsetLeft = { x: 0.25, y: 0.3 }
const eyeOffsetRight = { x: 0.75, y: 0.3 }

const irisMovementRange = 10 // pixels

const leftIrisStyle = computed(() => {
  return moveIris(eyeOffsetLeft)
})

const rightIrisStyle = computed(() => {
  return moveIris(eyeOffsetRight)
})

function moveIris(base) {
  const dx = mouseX.value / faceRef.value.clientWidth - base.x
  const dy = mouseY.value / faceRef.value.clientHeight - base.y
  const x = base.x * 100 + dx * irisMovementRange
  const y = base.y * 100 + dy * irisMovementRange

  return {
    transform: `translate(-50%, -50%)`,
    left: `${x}%`,
    top: `${y}%`,
  }
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
  background-color: #aee4fd;
  color: black;
  text-align: center;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
  text-decoration: none; /* For anchor tags */
}

.custom-button:hover {
  background-color: #73c7ef; /* Light gray */
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
