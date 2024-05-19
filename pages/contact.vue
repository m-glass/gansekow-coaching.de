<script setup lang="ts">
onMounted(() => {
  (function (C, A, L) {
    const p = function (a, ar) {
      a.q.push(ar);
    };
    const d = C.document;
    C.Cal =
      C.Cal ||
      function () {
        const cal = C.Cal;
        // eslint-disable-next-line prefer-rest-params
        const ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement('script')).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () {
            // eslint-disable-next-line prefer-rest-params
            p(api, arguments);
          };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === 'string') {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ['initNamespace', namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
  })(window, 'https://app.cal.com/embed/embed.js', 'init');
  Cal('init', { origin: 'https://cal.com' });

  Cal('inline', {
    elementOrSelector: '#my-cal-inline',
    calLink: 'gansekow-coaching/get-to-know',
    layout: 'month_view',
  });

  Cal('ui', {
    theme: 'light',
    styles: { branding: { brandColor: '#A64D78' } },
    hideEventTypeDetails: false,
    layout: 'month_view',
  });
});

definePageMeta({
  title: 'nav.contact',
});
</script>

<template>
  <div class="page-container">
    <Navigation />
    <div class="flex flex-col items-start justify-start gap-10 lg:flex-row">
      <div class="text w-full xl:w-1/2">
        <p>{{ $t('name') }}<br />{{ $t('contact.p1') }}</p>
        <p>
          Email: <a :href="`mailto:${$t('email')}`">{{ $t('email') }}</a>
        </p>
        <p>{{ $t('contact.p2') }}</p>
        <div id="my-cal-inline" style="width: 100%; height: 100%; overflow: scroll"></div>
      </div>
      <div class="w-full xl:w-1/2">
        <NuxtImg
          class="m-auto mt-6 max-w-full rounded lg:max-w-md"
          src="astrid_gansekow.jpg"
        />
      </div>
    </div>
  </div>
</template>
