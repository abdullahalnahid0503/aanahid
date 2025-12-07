<template>
  <nav class="sticky top-0 z-50 bg-zinc-900/50 backdrop-blur-md border-b border-zinc-800/50 transition-all duration-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <router-link
          to="/"
          class="group text-xl font-bold text-zinc-100 hover:text-white transition-all duration-300"
        >
          <span class="relative">
            Abdullah Al Nahid
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></span>
          </span>
        </router-link>

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

        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="group relative text-zinc-400 hover:text-white transition-all duration-300 font-medium"
            active-class="text-white"
          >
            <span class="relative z-10">{{ link.name }}</span>
            <span class="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/30 to-blue-600/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </router-link>
        </div>
      </div>

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
          <span class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>
