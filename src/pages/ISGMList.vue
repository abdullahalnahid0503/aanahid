<template>
  <div class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
    <div class="max-w-4xl w-full text-center">

      <h1 class="text-3xl sm:text-4xl font-bold text-white mb-6">
        International Students' Guide to Malaysia
      </h1>

      <p class="text-zinc-400 leading-relaxed mb-4 text-justify">
        When I first arrived in Malaysia as an international student, I was excited… but also completely lost. Simple things like getting a SIM card, finding a taxi, or figuring out payments felt overwhelming. I remember wishing someone had just told me the basics. Not the fancy stuff, just the real-life survival information.
      </p>

      <p class="text-zinc-400 leading-relaxed mb-4 text-justify">
        After seeing so many international students struggle with the same problems I once faced, I knew I had to put this together. This guide comes from lived experience, confusion, trial and error, and learning things the hard way so you don't have to.
      </p>

      <p class="text-zinc-400 leading-relaxed mb-4 text-justify">
        This is not a perfect or official handbook, but it is a practical, almost-complete survival guide for international and local students coming to study in Malaysia. Whether you're landing for the first time or already here but still confused, this guide is meant to make your life easier, smoother, and far less stressful.
      </p>

      <p class="text-zinc-400 leading-relaxed mb-4 text-justify">
        Living in Malaysia as a student is truly an adventure rich in culture, friendly people, and amazing food. Being informed is what turns that adventure into an enjoyable one. Keep these tips in your back pocket, and you'll navigate student life in Malaysia with confidence, not confusion.
      </p>

      <p class="text-zinc-400 leading-relaxed mb-4 text-justify">
        <strong>For Your Awareness:</strong> This guide is based on information and personal experience available as of January 2026. While every effort has been made to keep the content accurate and up to date, some details (such as rules, costs, or procedures) may change over time. If any outdated or incorrect information has been shared unintentionally, I sincerely apologize. This was never my intention. If you notice anything that needs correction, updating, or if you'd like to contribute additional insights, please feel free to contact me at any time. Your feedback will help keep this guide useful and relevant for future students.
      </p>

      <!-- Section heading before buttons -->
      <h2 class="text-2xl sm:text-3xl font-semibold text-white mb-6 mt-12">
        Essentials
      </h2>

      <!-- 2x2x2x2 buttons in symmetrical layout -->
      <div class="grid grid-cols-2 gap-6 sm:gap-8 md:gap-10">
        <router-link
          v-for="topic in topics"
          :key="topic.slug"
          :to="`/guidetomalaysia/${topic.slug}`"
          class="group relative p-6 bg-zinc-900/30 backdrop-blur-md border border-zinc-800/50 rounded-xl
                 hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0
                   group-hover:from-blue-600/10 group-hover:via-purple-600/5 group-hover:to-pink-600/10
                   transition-all duration-500">
          </div>
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <div class="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
            <div class="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
          </div>
          <div class="relative z-10">
            <div class="text-4xl mb-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 inline-block">
              {{ topic.icon }}
            </div>
            <h3 class="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors duration-300">
              {{ topic.title }}
            </h3>
          </div>
          <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl
                      group-hover:bg-blue-600/40 transition-all duration-500"></div>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script setup>
const topics = [
  { title: 'SIM Cards', icon: '📱', slug: 'sim-cards' },
  { title: 'Taxis', icon: '🚕', slug: 'taxis' },
  { title: 'Food Delivery', icon: '🍔', slug: 'food-delivery' },
  { title: 'Online Shopping', icon: '🛒', slug: 'online-shopping' },
  { title: 'E-Wallets & Payments', icon: '💳', slug: 'e-wallets-payments' },
  { title: 'Student Accommodation', icon: '🏠', slug: 'student-accommodation' },
  { title: 'Driving in Malaysia', icon: '🚗', slug: 'driving-in-malaysia' },
  { title: 'Visa Renewal', icon: '🛂', slug: 'visa-renewal' }
]
</script>

<style scoped>
</style>
