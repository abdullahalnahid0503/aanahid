<template>
  <div class="min-h-screen bg-transparent transition-colors duration-500 flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-9xl font-bold text-primary mb-4 animate-float">🚧</h1>
      <h2 class="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
        Resume Work in Progress
      </h2>
      <p class="text-lg text-zinc-400 mb-8 max-w-md mx-auto">
        I’m currently refining my resume.  
        It’ll be available soon, so stay tuned!
      </p>
      <div class="flex justify-center mt-8">
  <div class="flex justify-center mt-8">
  <router-link to="/" class="group relative">
    <!-- FRONT -->
    <div class="w-full flex justify-center mt-8">
  <router-link to="/" class="group relative inline-block">
    <!-- Card -->
    <div
      class="relative rounded-xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-md overflow-hidden px-6 py-3 flex items-center justify-center transition-all duration-500 group-hover:border-blue-500/50"
      style="min-width: 220px;"
    >
      <!-- Glow -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/5 group-hover:to-pink-600/10 transition-all duration-500"
      ></div>

      <!-- Border lines -->
      <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        <div class="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
        <div class="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
      </div>

      <!-- Text -->
      <span class="relative z-10 text-white font-medium flex items-center space-x-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span>Back to Home</span>
      </span>
    </div>
  </router-link>
</div>

  </router-link>
</div>

</div>

    </div>
  </div>
</template>

<script setup lang="ts">
// Nothing needed here for now
</script>