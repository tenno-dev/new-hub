<script setup>
const links = [{
  label: 'Features',
  to: '#features',
  exactHash: true
}, {
  label: 'Documentation',
  to: 'https://ui.nuxt.com/pro',
  target: '_blank'
}]

useHead({
  title: 'Tenno Hub',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  description: 'Tenno Hub ..is coming back soon.'
})
</script>

<template>
  <UHeader>
    <template #logo>
      Tenno Hub
      <UBadge label="Alpha" color="orange" variant="outline" class="mb-0.5" />
    </template>

    <template #right>
      <UColorModeButton />

    </template>
  </UHeader>

  <UMain>
    <NuxtPage />
  </UMain>

  <UFooter>
    <template #left>
      Copyright © {{ new Date().getFullYear() }}
    </template>
  </UFooter>
</template>
