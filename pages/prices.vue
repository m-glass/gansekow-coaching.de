<script setup lang="ts">
definePageMeta({
  title: 'nav.prices',
});
</script>

<template>
  <div class="page-container">
    <Navigation />
    <ImageFrame src="erol_ahmed.jpg" copyright="Erol Ahmed" />
    <div class="text">
      <h2>{{ $t('prices.h1') }}</h2>
      <p>{{ $t('prices.h1p1') }}</p>
      <p>
        {{ $t('prices.h1p2') }}
        <br />
        {{ $t('prices.h1p3') }}
        <br />
        {{ $t('prices.h1p4') }}
      </p>
      <p>{{ $t('prices.h1p5') }}</p>
      <p>
        {{ $t('prices.h1p6') }}
        <br />
        {{ $t('prices.h1p7') }}
        <br />
        {{ $t('prices.h1p8') }}
      </p>
      <p>{{ $t('prices.h1p9') }}</p>
      <p>
        {{ $t('prices.h1p10') }}
        <br />
        {{ $t('prices.h1p11') }}
        <br />
        {{ $t('prices.h1p12') }}
      </p>
    </div>
    <div class="text">
      <h2>{{ $t('prices.h2') }}</h2>
      <p>
        {{ $t('prices.h2p1pre') }}
        <NuxtLinkLocale to="contact">{{ $t('prices.h2p1LinkText') }}</NuxtLinkLocale>
        {{ $t('prices.h2p1post') }}
      </p>
    </div>
  </div>
</template>
