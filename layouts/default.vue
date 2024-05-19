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
      <Body class="min-h-screen w-full">
        <slot />
      </Body>
    </Html>
  </div>
</template>

<style>
:root {
  font-family: 'Noto Sans', sans-serif;
}

p {
  @apply text-lg font-semibold leading-tight text-black;
}

a {
  @apply cursor-pointer !font-semibold !text-black hover:opacity-90;
}

.page-container {
  @apply m-auto px-10 pb-20 md:px-20 xl:px-40;
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
