<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value);
});
</script>

<template>
  <template v-for="(localeItem, index) in availableLocales" :key="localeItem.code">
    <span v-if="index"> | </span>
    <NuxtLink :to="switchLocalePath(localeItem.code)">
      {{ localeItem.name ?? localeItem.code }}
    </NuxtLink>
  </template>
</template>
