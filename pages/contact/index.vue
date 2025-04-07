<template>
  <div
    class="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-12"
  >
    <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Contact</h1>
    <h2 class="text-xl text-gray-600 mb-8">
      This page is under construction 🚧
    </h2>

    <div class="bg-white w-full max-w-lg shadow-xl rounded-2xl p-8">
      <form
        action="https://formspree.io/f/your_form_id"
        method="POST"
        class="space-y-6"
      >
        <div>
          <label class="block text-gray-700 font-medium mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label class="block text-gray-700 font-medium mb-1">Your Email</label>
          <input
            type="email"
            name="email"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label class="block text-gray-700 font-medium mb-1"
            >Your Message</label
          >
          <textarea
            name="message"
            required
            rows="5"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>
