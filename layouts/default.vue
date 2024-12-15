<script setup lang="ts">
const route = useRoute();
const { t } = useI18n();

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
});

const title = computed(() => t('title', { pageTitle: t(route.meta.title) }));
</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Head>
        <Title>{{ title }}</Title>
        <template v-for="link in head.link" :key="link.id">
          <Link
            :id="link.id"
            :rel="link.rel"
            :href="link.href"
            :hreflang="link.hreflang"
          />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
        </template>
      </Head>
      <Body>
        <div class="flex flex-row">
          <aside
            class="sticky top-0 hidden h-screen flex-col items-start justify-between bg-magenta p-10 text-white lg:flex"
          >
            <NuxtLinkLocale to="/" class="flex flex-row items-center justify-start gap-4">
              <NuxtImg src="/logo_white.svg" class="h-24" />
              <div>
                <h2>{{ $t('name') }}</h2>
                <h2 class="!font-light">{{ $t('coaching') }}</h2>
              </div>
            </NuxtLinkLocale>
            <div class="flex flex-col items-start gap-6 lg:mb-0">
              <LangSwitcher class="!text-white" />
              <NuxtLinkLocale to="/" class="!text-white">
                <h1 class="!font-light">{{ $t('nav.whyCoaching') }}</h1>
              </NuxtLinkLocale>
              <NuxtLinkLocale to="about" class="align-right !text-white">
                <h1 class="!font-light">{{ $t('nav.about') }}</h1>
              </NuxtLinkLocale>
              <NuxtLinkLocale to="prices" class="!text-white">
                <h1 class="!font-light">{{ $t('nav.prices') }}</h1>
              </NuxtLinkLocale>
              <NuxtLinkLocale to="contact" class="!text-white">
                <h1 class="!font-light">{{ $t('nav.contact') }}</h1>
              </NuxtLinkLocale>
            </div>
          </aside>
          <main>
            <slot />
            <div class="page-container flex flex-row gap-6">
              <NuxtLinkLocale to="imprint" class="!text-white">
                <p class="text-sm !font-light">{{ $t('nav.imprint') }}</p>
              </NuxtLinkLocale>
              <NuxtLinkLocale to="privacy" class="!text-white">
                <p class="text-sm !font-light">{{ $t('nav.privacy') }}</p>
              </NuxtLinkLocale>
            </div>
          </main>
        </div>
      </Body>
    </Html>
  </div>
</template>

<style>
:root {
  font-family: 'Noto Sans', sans-serif;
}

h1 {
  @apply text-4xl font-bold;
}

h2 {
  @apply text-2xl font-bold;
}

p {
  @apply text-lg leading-snug text-black;
}

a {
  @apply cursor-pointer hover:opacity-90;
}

.page-container {
  @apply m-auto px-10 py-4 md:px-20 lg:p-10 xl:px-40;
}

.text {
  @apply prose max-w-4xl;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
