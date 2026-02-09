<template>
  <div class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
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
            <p class="text-sm text-zinc-400 group-hover:text-zinc-300 leading-relaxed transition-colors duration-300">
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

const cards = [
{
  icon: '👋',
  title: 'About Me',
  description: 'Who I am and what I do',
  path: '/about'
},
{
  icon: '🛠️',
  title: 'My Projects',
  description: 'What I have built',
  path: '/projects'
},
{
  icon: '✍️',
  title: 'My Thoughts',
  description: 'Life, learning, and lessons',
  path: '/blog'
},
{
  icon: '📄',
  title: 'My Resume',
  description: 'Skills and experience so far',
  path: '/resume'
},
{
  icon: '🌏',
  title: 'Malaysia Essentials',
  description: 'Practical life in Malaysia',
  path: '/guidetomalaysia'
},
{
  icon: '🤝',
  title: 'Get in Touch',
  description: 'Let’s connect and collaborate',
  path: '/contact'
}

]
</script>