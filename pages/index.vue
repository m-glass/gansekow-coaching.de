<script setup lang="ts">
import ImageFrame from '~/components/ImageFrame.vue';

definePageMeta({
  title: 'nav.whyCoaching',
});
</script>

<template>
  <div class="page-container">
    <Navigation />
    <ImageFrame src="annie_spratt.jpg" copyright="Annie Spratt" />
    <div class="text pt-10">
      <h1>{{ $t('home.welcome') }}</h1>
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
      <h2>{{ $t('home.whatClientsSay') }}</h2>
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
