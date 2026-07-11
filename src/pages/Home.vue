<template>
  <div class="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
    <div class="max-w-4xl w-full text-center">
      <div class="relative mb-8 animate-fade-in">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-blue-600/30 animate-glow blur-3xl"></div>
        <div class="relative inline-block">
          <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
          <img
            src="../assets/profile.png"
            alt="Abdullah Al Nahid"
            class="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-zinc-900 shadow-2xl hover:scale-110 transition-transform duration-500 cursor-pointer"
          />
        </div>
      </div>

      <div class="relative mb-8">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20 animate-glow blur-3xl"></div>
        <h1 class="relative text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gradient animate-title mb-4">
          Abdullah Al Nahid
        </h1>
      </div>

      <p class="text-lg sm:text-xl md:text-2xl text-zinc-300 mb-4 animate-fade-in-delay max-w-2xl mx-auto font-light">
        Software Engineer • Founder of The Lab Thirteen
      </p>

      <p class="text-base sm:text-lg text-zinc-400 mb-12 animate-fade-in-delay-2 max-w-xl mx-auto leading-relaxed">
        Building ethical technology and youth-driven solutions from Kuala Lumpur
      </p>

      <!-- Nahidified Satellite Widget -->
<div 
  class="
    absolute 
    right-6 bottom-28 
    sm:right-12 sm:bottom-32 
    lg:right-20 lg:bottom-40 
    z-30 
    animate-fade-in-delay-3
  "
>

  <div class="relative">


    <!-- Floating Social Pills -->
<transition-group
  name="pill"
  tag="div"
  class="
    absolute
    bottom-36
    right-0
    z-50
    flex
    flex-col
    gap-3
    items-end
  "
>

  <!-- YouTube -->
  <a
    v-if="satelliteOpen"
    key="youtube-1"
    href="https://www.youtube.com/@nahidified"
    target="_blank"
    rel="noopener noreferrer"
    class="
      pill
      relative
      z-10
      w-32
      flex items-center gap-2
      pl-1.5 pr-3.5 py-1.5
      rounded-full

      bg-zinc-900/90
      backdrop-blur-xl

      border border-red-500/30

      shadow-xl
      shadow-red-500/20

      hover:border-red-400/60
      hover:-translate-y-1
      hover:scale-105

      transition-all duration-300
    "
  >

    <span
      class="
        w-7 h-7
        rounded-full
        bg-red-500/20

        flex items-center justify-center
      "
    >

      <svg
        class="w-3.5 h-3.5 text-red-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15.5v-7l6 3.5-6 3.5z"/>
      </svg>

    </span>

    <span class="text-white font-semibold text-xs tracking-wide">
      Nahidified
    </span>

  </a>

  <!-- Facebook -->
  <a
    v-if="satelliteOpen"
    key="facebook-2"
    href="https://www.facebook.com/nahidified"
    target="_blank"
    rel="noopener noreferrer"
    class="
      pill
      relative
      z-10
      w-32
      flex items-center gap-2
      pl-1.5 pr-3.5 py-1.5

      rounded-full

      bg-zinc-900/90
      backdrop-blur-xl

      border border-blue-500/30

      shadow-xl
      shadow-blue-500/20

      hover:border-blue-400/60
      hover:-translate-y-1
      hover:scale-105

      transition-all duration-300
    "
  >

    <span
      class="
        w-7 h-7
        rounded-full
        bg-blue-500/20

        flex items-center justify-center
      "
    >

      <svg
        class="w-3.5 h-3.5 text-blue-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
      </svg>

    </span>

    <span class="text-white font-semibold text-xs tracking-wide">
      Nahidified
    </span>

  </a>

  <!-- Instagram -->
  <a
    v-if="satelliteOpen"
    key="instagram-3"
    href="https://www.instagram.com/nahidified/"
    target="_blank"
    rel="noopener noreferrer"
    class="
      pill
      relative
      z-10
      w-32
      flex items-center gap-2
      pl-1.5 pr-3.5 py-1.5

      rounded-full

      bg-zinc-900/90
      backdrop-blur-xl

      border border-pink-500/30

      shadow-xl
      shadow-pink-500/20

      hover:border-pink-400/60
      hover:-translate-y-1
      hover:scale-105

      transition-all duration-300
    "
  >
    <span
      class="
        w-7 h-7
        rounded-full

        bg-gradient-to-br
        from-yellow-400
        via-pink-500
        to-purple-600

        flex items-center justify-center
      "
    >
      <svg
        class="w-3.5 h-3.5 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.5.01-4.73.07-.96.04-1.48.2-1.83.34-.46.18-.78.39-1.13.73-.34.35-.55.67-.73 1.13-.14.34-.3.87-.34 1.83-.06 1.23-.07 1.58-.07 4.73s.01 3.5.07 4.73c.04.96.2 1.48.34 1.83.18.46.39.78.73 1.13.35.34.67.55 1.13.73.34.14.87.3 1.83.34 1.23.06 1.58.07 4.73.07s3.5-.01 4.73-.07c.96-.04 1.48-.2 1.83-.34.46-.18.78-.39 1.13-.73.34-.35.55-.67.73-1.13.14-.34.3-.87.34-1.83.06-1.23.07-1.58.07-4.73s-.01-3.5-.07-4.73c-.04-.96-.2-1.48-.34-1.83a2.94 2.94 0 0 0-.73-1.13 2.94 2.94 0 0 0-1.13-.73c-.34-.14-.87-.3-1.83-.34-1.23-.06-1.58-.07-4.73-.07zm0 4.38a5.02 5.02 0 1 1 0 10.04 5.02 5.02 0 0 1 0-10.04zm0 1.62a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8zm5.15-1.8a1.17 1.17 0 1 1-2.34 0 1.17 1.17 0 0 1 2.34 0z"/>
      </svg>

    </span>

    <span class="text-white font-semibold text-xs tracking-wide">
      @nahidified
    </span>

  </a>


    </transition-group>



    <!-- Satellite Button -->
    <button
      @click="satelliteOpen = !satelliteOpen"
      class="relative z-10 group"
      aria-label="Toggle social links"
    >

      <!-- Signal Ring -->
      <div
        v-if="satelliteOpen"
        class="
          absolute
          inset-0
          rounded-full
          border
          border-blue-400/40
          animate-ping
        "
      ></div>


      <!-- Glow -->
      <div
  class="
    absolute
    inset-0
    bg-blue-500/40
    blur-3xl
    rounded-full
    pointer-events-none
  "
></div>



      <img
        src="../assets/nahidified-satellite.png"
        alt="Nahidified Satellite"
        class="
          relative
          z-10
          w-32 h-32
          sm:w-40 sm:h-40

          object-contain

          transition-all duration-500
          cursor-pointer
        "

        :class="
          satelliteOpen
          ? 'scale-110 rotate-6'
          : 'hover:scale-110 hover:rotate-6'
        "
      />


    </button>


  </div>

</div>

      <div class="grid sm:grid-cols-3 lg:grid-cols-3 gap-4 animate-fade-in-delay-3">
        <router-link
          v-for="card in cards"
          :key="card.title"
          :to="card.path"
          class="group relative p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-blue-600/5 group-hover:via-purple-600/5 group-hover:to-pink-600/5 transition-all duration-500"></div>
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <div class="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
            <div class="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
          </div>
          <div class="relative z-10">
            <div class="text-4xl mb-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 inline-block">
              {{ card.icon }}
            </div>
            <h3 class="text-lg font-semibold text-zinc-100 mb-2 group-hover:text-white transition-colors duration-300">
              {{ card.title }}
            </h3>
            <p class="text-xs text-zinc-400 group-hover:text-zinc-300 leading-relaxed transition-colors duration-300">
              {{ card.description }}
            </p>
          </div>
          <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl group-hover:bg-blue-600/40 transition-all duration-500"></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const satelliteOpen = ref(false)

const cards = [
  { icon: '👋', title: 'About Me', description: 'Who I am and what I do', path: '/about' },
  { icon: '🛠️', title: 'My Projects', description: 'What I have built', path: '/projects' },
  { icon: '✍️', title: 'My Thoughts', description: 'Life, learning, and lessons', path: '/blog' },
  { icon: '📄', title: 'My Resume', description: 'Skills and experience so far', path: '/resume' },
  { icon: '🌏', title: 'Malaysia Essentials', description: 'Practical life in Malaysia', path: '/guidetomalaysia' },
  { icon: '🤝', title: 'Get in Touch', description: 'Let’s connect and collaborate', path: '/contact' }
]
</script>

<style scoped>
.pill-enter-active {
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.pill-leave-active {
  transition: all 0.2s ease-in;
}
.pill-enter-from,
.pill-leave-to {
  opacity: 0;
  transform: scale(0.3) translate(20px, 20px);
}
</style>