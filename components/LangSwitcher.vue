<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value);
});
</script>

<template>
  <template v-for="localeItem in availableLocales" :key="localeItem.code">
    <NuxtLink :to="switchLocalePath(localeItem.code)">
      {{ localeItem.name ?? localeItem.code }}
    </NuxtLink>
  </template>
</template>
