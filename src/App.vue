<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import BackgroundEffect from './components/BackgroundEffect.vue'
<<<<<<< HEAD
=======
import { Analytics } from '@vercel/analytics/vue'
>>>>>>> 8473ad3aa10fa6a40f8753e6a7286ce360cd2428
</script>

<template>
  <div class="min-h-screen flex flex-col bg-black transition-colors duration-500">
    <BackgroundEffect />
    <Navbar />
    <main class="flex-1 relative z-10">
      <router-view />
    </main>
    <Footer />
<<<<<<< HEAD
=======
    <Analytics />
>>>>>>> 8473ad3aa10fa6a40f8753e6a7286ce360cd2428
  </div>
</template>
