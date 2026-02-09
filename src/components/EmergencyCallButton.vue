<template>
  <a
    href="tel:999"
    class="fixed bottom-31 right-6 z-50 group"
    aria-label="Emergency Call 999"
  >
    <div
      class="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-full shadow-2xl
             transition-all duration-300 animate-pulse hover:animate-none"
    >
      <!-- Phone Icon -->
      <svg
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.27 1.09l-1.27 1.27a16 16 0 006.59 6.59l1.27-1.27a1 1 0 011.09-.27l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"
        />
      </svg>

      <!-- Text -->
      <span class="font-semibold tracking-wide">
        Emergency 999
      </span>
    </div>
  </a>
</template>

<script>
export default {
  name: "EmergencyCallButton"
}
</script>