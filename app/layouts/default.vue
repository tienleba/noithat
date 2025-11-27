<template>
  <div>
    <Header />

    <main>
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: 'https://theme.hstatic.net/200000065946/1001264503/14/logo.png?v=1347' }
  ]
})
</script>
