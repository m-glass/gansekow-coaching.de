<script setup lang="ts">
import ImageFrame from '~/components/ImageFrame.vue';

definePageMeta({
  title: 'nav.whyCoaching',
});
</script>

<template>
  <div class="page-container">
    <Navigation />
    <ImageFrame src="catherine-kay-greenup-1.jpg" copyright="Catherine Kay Greenup" />
    <div class="text">
      <h2>{{ $t('whyCoaching.h1') }}</h2>
      <p>
        {{ $t('whyCoaching.h1p1') }}
      </p>
      <p>
        {{ $t('whyCoaching.h1p2') }}
      </p>
      <p>
        {{ $t('whyCoaching.h1p3') }}
        <NuxtLinkLocale to="contact">{{ $t('whyCoaching.h1p3LinkText') }}</NuxtLinkLocale
        >.
      </p>
      <h2>{{ $t('whyCoaching.h2') }}</h2>
      <p>
        {{ $t('whyCoaching.h2p1') }}
      </p>
      <p>
        {{ $t('whyCoaching.h2p2') }}
      </p>
      <Testimonial
        :quote="$t('home.testimonial1.quote')"
        :name="$t('home.testimonial1.name')"
      />
      <Testimonial
        :quote="$t('home.testimonial2.quote')"
        :name="$t('home.testimonial2.name')"
      />
    </div>
  </div>
</template>
