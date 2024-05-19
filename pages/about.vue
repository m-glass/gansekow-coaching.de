<script setup lang="ts">
definePageMeta({
  title: 'nav.about',
});
</script>

<template>
  <div class="page-container">
    <Navigation />
    <ImageFrame src="catherine-kay-greenup-2.jpg" copyright="Catherine Kay Greenup" />
    <div class="text">
      <h2>{{ $t('about.h1') }}</h2>
      <p>{{ $t('about.h1p1') }}</p>
      <p>{{ $t('about.h1p2') }}</p>
      <p>{{ $t('about.h1p3') }}</p>
      <p>{{ $t('about.h1p4') }}</p>
    </div>
  </div>
</template>
