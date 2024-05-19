<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
defineProps<{
  quote: string;
  name: string;
}>();
</script>

<template>
  <div>
    <blockquote>"{{ quote }}"</blockquote>
    <p>— {{ name }}</p>
  </div>
</template>

<style scoped>
blockquote {
  @apply mb-2 italic text-black;
}

p {
  @apply font-medium italic text-black;
}
</style>
