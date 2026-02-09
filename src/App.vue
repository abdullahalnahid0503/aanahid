<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import BackgroundEffect from './components/BackgroundEffect.vue'
import EmergencyCallButton from './components/EmergencyCallButton.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="min-h-screen flex flex-col bg-black transition-colors duration-500 relative z-0">
    <BackgroundEffect />
    <Navbar />

    <main class="flex-1 relative z-10">
      <router-view />
    </main>

    <Footer />
  </div>

  <!-- Only show on Guide to Malaysia pages -->
  <EmergencyCallButton v-if="route.path.startsWith('/guidetomalaysia')" />
</template>