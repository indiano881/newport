<template>
  <ProjectsDisplay :projects="filteredProjects">
    <template #filters>
      <ProjectTabs
        :tabs="tabs"
        :active-tab="activeTab"
        @select="activeTab = $event"
      />
    </template>
  </ProjectsDisplay>
</template>

<script setup>
import { ref, computed } from 'vue'
import { projects } from '@/utils/data.js'

const activeTab = ref('All')

const tabs = computed(() => {
  const tagSet = new Set()
  projects.forEach(p => p.tags?.forEach(t => tagSet.add(t)))
  return ['All', 'Top', ...Array.from(tagSet).sort()]
})

const filteredProjects = computed(() => {
  if (activeTab.value === 'All') return projects
  if (activeTab.value === 'Top') return projects.filter(p => p.featured)
  return projects.filter(p => p.tags?.includes(activeTab.value))
})
</script>
