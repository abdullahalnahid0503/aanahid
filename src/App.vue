<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import BackgroundEffect from './components/BackgroundEffect.vue'
import { Analytics } from '@vercel/analytics/vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-black transition-colors duration-500">
    <BackgroundEffect />
    <Navbar />
    <main class="flex-1 relative z-10">
      <router-view />
    </main>
    <Footer />
    <Analytics />
  </div>
</template>
