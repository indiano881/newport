<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const isSubmitting = ref(false)
const isSuccess = ref(false)
const isError = ref(false)

const handleSubmit = async e => {
  e.preventDefault()
  isSubmitting.value = true
  isSuccess.value = false
  isError.value = false

  try {
    const response = await fetch('https://formspree.io/f/meokovly', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    })

    if (response.ok) {
      isSuccess.value = true
      name.value = ''
      email.value = ''
      message.value = ''
    } else {
      isError.value = true
    }
  } catch (err) {
    isError.value = true
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-[#eacbd1]"
  >
    <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
      Contact me
    </h1>

    <div
      class="bg-[#AEE4FD] border-2 border-black w-full max-w-lg shadow-xl rounded-2xl p-8"
    >
      <form @submit="handleSubmit" class="space-y-6">
        <div>
          <label class="block text-gray-700 font-medium mb-1">Your Name</label>
          <input
            v-model="name"
            type="text"
            name="name"
            required
            class="w-full px-4 py-2 border-2 border-black rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label class="block text-gray-700 font-medium mb-1">Your Email</label>
          <input
            v-model="email"
            type="email"
            name="email"
            required
            class="w-full px-4 py-2 border-2 border-black rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label class="block text-gray-700 font-medium mb-1"
            >Your Message</label
          >
          <textarea
            v-model="message"
            name="message"
            required
            rows="5"
            class="w-full px-4 py-2 border-2 border-black rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 flex justify-center items-center border-2 border-black"
        >
          <span v-if="isSubmitting">Sending...</span>
          <span v-else>Send Message</span>
        </button>

        <p v-if="isSuccess" class="text-green-600 mt-4">
          Message sent successfully!
        </p>
        <p v-if="isError" class="text-red-600 mt-4">
          Something went wrong. Try again.
        </p>
      </form>
    </div>
  </div>
</template>
