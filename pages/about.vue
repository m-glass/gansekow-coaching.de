<script setup lang="ts">
definePageMeta({
  title: 'nav.about',
});
</script>

<template>
  <div class="page-container">
    <Navigation />
    <ImageFrame src="jene_stephaniuk.jpg" copyright="Jené Stephaniuk" />
    <div class="text">
      <h2>{{ $t('about.h1') }}</h2>
      <p>{{ $t('about.h1p1') }}</p>
      <p>{{ $t('about.h1p2') }}</p>
      <p>{{ $t('about.h1p3') }}</p>
      <p>{{ $t('about.h1p4') }}</p>
    </div>
    <NuxtImg class="mt-6 max-w-full rounded lg:max-w-md" src="astrid_gansekow.jpg" />
  </div>
</template>
