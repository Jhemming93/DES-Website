<script setup lang="ts">
const group = { name: 'Community Resources', items: resources }

const title = 'Resources'
const description = 'Lists of all the resources that we know of to help the Dev Edmonton community.'

useServerSeoMeta({
  title,
  description,
})

defineOgImage({
  component: 'AppOgImageFrame',
  props: {
    icon: 'i-ph-books-duotone',
  },
})
</script>

<template>
  <main>
    <AppSection :group="group" />
  </main>
</template>
