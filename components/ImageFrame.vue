<script setup lang="ts">
defineProps<{
  src: string;
  copyright: string;
}>();
</script>

<template>
  <div>
    <NuxtImg :src="src" class="h-60 w-full rounded object-cover" />
    <p class="mt-2 text-xs">© {{ copyright }}</p>
  </div>
</template>
