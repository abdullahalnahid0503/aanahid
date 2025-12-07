<template>
  <div class="min-h-screen bg-transparent transition-colors duration-500 flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-9xl font-bold text-primary mb-4 animate-float">404</h1>
      <h2 class="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
        Page Not Found
      </h2>
      <p class="text-lg text-zinc-400 mb-8 max-w-md mx-auto">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <router-link
        to="/"
        class="inline-flex items-center px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Back to Home
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
