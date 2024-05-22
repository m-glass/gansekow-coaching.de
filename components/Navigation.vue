<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import LangSwitcher from './LangSwitcher.vue';

const menuOpen = ref(false);

const toggleMenu = () => (menuOpen.value = !menuOpen.value);
</script>

<template>
  <div
    class="sticky top-0 z-50 flex w-full flex-row items-center justify-between bg-white pb-4 !text-magenta lg:hidden"
  >
    <NuxtLinkLocale to="/" class="flex flex-row items-center gap-4 !text-magenta">
      <NuxtImg src="/logo.svg" class="h-14" />
      <div>
        <h3>{{ $t('name') }}</h3>
        <h3 class="-mt-1 !font-normal">{{ $t('coaching') }}</h3>
      </div>
    </NuxtLinkLocale>
    <p class="cursor-pointer text-magenta" @click="toggleMenu">Menu</p>
    <Transition>
      <nav
        v-if="menuOpen"
        class="absolute inset-0 z-50 flex h-screen w-full flex-col items-start justify-start gap-4 bg-white/90 py-8 backdrop-blur lg:hidden"
      >
        <p class="mb-10 cursor-pointer place-self-end text-magenta" @click="toggleMenu">
          {{ $t('nav.close') }}
        </p>
        <LangSwitcher />
        <NuxtLinkLocale to="about" class="!text-magenta">
          <h1>{{ $t('nav.about') }}</h1>
        </NuxtLinkLocale>
        <NuxtLinkLocale to="prices" class="!text-magenta">
          <h1>{{ $t('nav.prices') }}</h1>
        </NuxtLinkLocale>
        <NuxtLinkLocale to="contact" class="!text-magenta">
          <h1>{{ $t('nav.contact') }}</h1>
        </NuxtLinkLocale>
      </nav>
    </Transition>
  </div>
</template>

<style scoped>
h1 {
  @apply text-3xl;
}

h3 {
  @apply font-bold;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
