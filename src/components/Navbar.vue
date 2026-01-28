<template>
  <nav class="sticky top-0 z-50 bg-zinc-900/50 backdrop-blur-md border-b border-zinc-800/50 transition-all duration-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">

        <!-- LOGO / NAME -->
        <router-link
          to="/"
          class="group text-xl font-bold text-zinc-100 hover:text-white transition-all duration-300"
        >
          <span class="relative">
            Abdullah Al Nahid
          </span>
        </router-link>

        <!-- MOBILE BUTTON -->
        <button
          @click="toggleMenu"
          class="md:hidden text-zinc-300 hover:text-white focus:outline-none hover:scale-110 transition-all duration-200"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- DESKTOP MENU -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="group relative text-zinc-400 hover:text-white transition-all duration-300 font-medium"
            active-class="text-white"
          >
            <!-- GUIDE TO MALAYSIA SPECIAL -->
            <span
              v-if="link.name === 'Guide to Malaysia'"
              class="relative z-10 inline-flex gap-0 items-center"
            >
              <!-- G -->
              <span class="relative">
                G
                <span
                  v-if="sparkle"
                  class="absolute -top-2 left-1/2 -translate-x-1/2 text-xs sparkle"
                >
                  ✦
                </span>
              </span>

              <span>uide to Malaysi</span>

              <!-- a -->
              <span class="relative">
                a
                <span
                  v-if="sparkle"
                  class="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs sparkle delay"
                >
                  ✦
                </span>
              </span>
            </span>

            <!-- OTHER LINKS -->
            <span v-else class="relative z-10">
              {{ link.name }}
            </span>

            <!-- hover underline -->
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </router-link>
        </div>
      </div>

      <!-- MOBILE MENU -->
      <div
        v-if="isMenuOpen"
        class="md:hidden py-4 border-t border-zinc-800/50 transition-all duration-300"
      >
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          @click="closeMenu"
          class="group block py-3 text-zinc-400 hover:text-white transition-all duration-300 font-medium relative"
          active-class="text-white"
        >
          <span class="relative z-10 inline-block group-hover:translate-x-2 transition-transform duration-300">
            {{ link.name }}
          </span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isMenuOpen = ref(false)
const sparkle = ref(false)

onMounted(() => {
  sparkle.value = true

  // sparkle stays for 20 seconds
  setTimeout(() => {
    sparkle.value = false
  }, 20000)
})

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Guide to Malaysia', path: '/guidetomalaysia' },
  { name: 'Contact', path: '/contact' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.sparkle {
  animation: sparkleBlink 1.5s infinite ease-in-out;
}

.sparkle.delay {
  animation-delay: 0.7s;
}

@keyframes sparkleBlink {
  0%, 100% {
    opacity: 0;
    transform: scale(0.6);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
