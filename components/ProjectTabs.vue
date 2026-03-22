<template>
  <div class="flex flex-wrap gap-2 justify-center mb-8">
    <button
      v-for="tab in tabs"
      :key="tab"
      class="px-4 py-1.5 text-sm font-medium border-2 border-black rounded-full transition"
      :class="
        tab === activeTab
          ? 'bg-black text-white'
          : 'bg-white text-black hover:bg-gray-100'
      "
      @click="$emit('select', tab)"
    >
      {{ tab }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  activeTab: {
    type: String,
    required: true,
  },
})

defineEmits(['select'])
</script>
