<script setup lang="ts">
const { locale, setLocale } = useI18n();

definePageMeta({
  title: 'nav.home',
});
</script>

<template>
  <div class="flex h-screen w-full flex-col lg:flex-row">
    <div
      class="flex h-1/2 flex-col items-center justify-center bg-magenta text-white lg:h-full lg:w-1/2"
    >
      <div class="flex flex-row items-center justify-start gap-4 py-24">
        <NuxtImg src="/logo_white.svg" class="h-24" />
        <div>
          <h2>{{ $t('name') }}</h2>
          <h2 class="!font-light">{{ $t('coaching') }}</h2>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col-reverse items-start justify-between p-12 text-magenta lg:w-1/2 lg:flex-col"
    >
      <div class="space-y-10 lg:mb-0">
        <Testimonial
          :quote="$t('home.testimonial1.quote')"
          :name="$t('home.testimonial1.name')"
        />
        <Testimonial
          :quote="$t('home.testimonial2.quote')"
          :name="$t('home.testimonial2.name')"
        />
      </div>
      <div class="mb-24 flex flex-col gap-6 lg:mb-0">
        <LangSwitcher />
        <NuxtLinkLocale to="why-coaching" class="!text-magenta">
          <h1>{{ $t('nav.whyCoaching') }}</h1>
        </NuxtLinkLocale>
        <NuxtLinkLocale to="about" class="!text-magenta">
          <h1>{{ $t('nav.about') }}</h1>
        </NuxtLinkLocale>
        <NuxtLinkLocale to="prices" class="!text-magenta">
          <h1>{{ $t('nav.prices') }}</h1>
        </NuxtLinkLocale>
        <NuxtLinkLocale to="contact" class="!text-magenta">
          <h1>{{ $t('nav.contact') }}</h1>
        </NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  @apply text-4xl font-bold;
}

h2 {
  @apply text-2xl font-bold;
}
</style>
