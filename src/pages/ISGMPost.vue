<template>
  <div class="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative">
    <div class="max-w-4xl mx-auto">

      <!-- Back Button -->
      <router-link
        to="/guidetomalaysia"
        class="inline-flex items-center text-zinc-400 hover:text-white font-medium mb-8 transition-all duration-300 group"
      >
        <svg
          class="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Essentials
      </router-link>

      <!-- Quick Menu -->
      <div class="grid grid-cols-5 gap-3 mb-8">
        <button
          v-for="item in menuItems"
          :key="item.slug"
          @click="goToTopic(item.slug)"
          class="group relative w-full h-10 flex items-center justify-center rounded-full
                 text-sm font-medium overflow-hidden transition-all duration-300"
          :class="currentTopic === item.slug
            ? 'bg-white text-black border-2 border-blue-500'
            : 'bg-zinc-700 text-white hover:text-white'"
        >
          <span class="relative z-10 px-2 text-center leading-tight">
            {{ item.name }}
          </span>
          <span
            class="absolute inset-0 rounded-full bg-gradient-to-r
                   from-blue-500 via-purple-500 to-pink-500
                   opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          ></span>
        </button>
      </div>

      <!-- Dynamic Content -->
      <component
        :is="currentComponent()"
        :key="currentTopic"
        class="bg-zinc-800 rounded-2xl shadow-lg p-8 text-justify space-y-4"
      />

      <!-- SHARE BUTTON -->
      <div class="mt-10 pt-6 border-t border-zinc-800 flex justify-center">
        <button
          @click="openShare"
          class="relative px-6 py-3 rounded-xl border border-zinc-800/50
                 bg-zinc-900/40 backdrop-blur-md
                 text-blue-400 font-semibold
                 overflow-hidden transition-all duration-300
                 hover:shadow-xl hover:scale-[1.02]"
        >
          <span class="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-pink-600/10"></span>
          <span class="relative z-10 flex items-center gap-2">
            🔗 Share this post
          </span>
        </button>
      </div>
    </div>

    <!-- SHARE MODAL -->
    <div v-if="showShare" class="fixed inset-0 z-50 flex items-center justify-center">
      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-black/60 backdrop-blur-sm"
        @click="closeShare"
      ></div>

      <!-- Modal -->
      <div
        class="relative z-10 w-80 rounded-2xl border border-zinc-800/50
               bg-zinc-900/40 backdrop-blur-md shadow-2xl p-6 overflow-hidden"
      >
        <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-pink-600/10"></div>

        <h3 class="relative z-10 text-lg font-semibold text-blue-400 mb-4 text-center">
          Share this post
        </h3>

        <div class="relative z-10 grid grid-cols-2 gap-3">

  <!-- COPY (classic clipboard) -->
  <button
    @click="copyLink"
    class="px-3 py-2 rounded-lg text-sm font-medium
           flex items-center justify-center gap-2
           border border-zinc-700
           text-zinc-100
           bg-zinc-900/80
           transition hover:bg-zinc-800"
  >
    <svg
      class="w-5 h-5"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
    >
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M9 5h6a2 2 0 012 2v12a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2z" />
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M7 7H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2" />
    </svg>
    <span>Copy</span>
  </button>

  <!-- FACEBOOK (unchanged, already clear) -->
  <a
    :href="facebookShare"
    target="_blank"
    class="px-3 py-2 rounded-lg text-sm font-medium
           flex items-center justify-center gap-2
           border border-blue-500/40
           text-blue-200
           bg-zinc-900/80
           transition hover:bg-blue-500/10"
  >
    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path
        d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.49v-9.294H9.691V11.01h3.125V8.309c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"
      />
    </svg>
    <span>Facebook</span>
  </a>

  <!-- WHATSAPP (official chat bubble + phone) -->
  <a
    :href="whatsappShare"
    target="_blank"
    class="px-3 py-2 rounded-lg text-sm font-medium
           flex items-center justify-center gap-2
           border border-green-500/40
           text-green-200
           bg-zinc-900/80
           transition hover:bg-green-500/10"
  >
    <svg class="w-5 h-5 fill-current" viewBox="0 0 32 32">
      <path
        d="M16.01 3C9.38 3 4 8.38 4 15.01c0 2.11.55 4.16 1.59 5.97L4 29l8.21-1.55A12 12 0 0016.01 27C22.64 27 28 21.63 28 15.01 28 8.38 22.64 3 16.01 3zm5.91 17.09c-.25.7-1.46 1.35-2.03 1.42-.53.07-1.2.1-1.94-.12-.45-.14-1.02-.33-1.76-.65-3.09-1.34-5.11-4.46-5.27-4.67-.16-.21-1.25-1.67-1.25-3.19 0-1.52.8-2.27 1.08-2.58.28-.31.61-.39.81-.39h.58c.19 0 .45-.07.7.53.25.6.86 2.1.94 2.26.08.16.13.35.02.56-.11.21-.17.35-.33.54-.16.19-.35.43-.5.58-.17.17-.35.35-.15.69.2.35.9 1.49 1.94 2.41 1.33 1.18 2.46 1.55 2.81 1.72.35.17.56.14.77-.08.21-.22.88-1.02 1.11-1.37.23-.35.47-.29.78-.17.31.12 1.97.93 2.31 1.1.34.17.57.26.65.41.08.15.08.87-.17 1.57z"
      />
    </svg>
    <span>WhatsApp</span>
  </a>

  <!-- LINKEDIN (official "in" logo) -->
  <a
    :href="linkedinShare"
    target="_blank"
    class="px-3 py-2 rounded-lg text-sm font-medium
           flex items-center justify-center gap-2
           border border-sky-500/40
           text-sky-200
           bg-zinc-900/80
           transition hover:bg-sky-500/10"
  >
    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path
        d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.06 20.45H3.56V9h3.5v11.45zM5.31 7.43c-1.12 0-2.03-.92-2.03-2.05 0-1.13.91-2.05 2.03-2.05s2.03.92 2.03 2.05c0 1.13-.91 2.05-2.03 2.05zM20.45 20.45h-3.5v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3.5V9h3.36v1.56h.05c.47-.88 1.62-1.8 3.34-1.8 3.57 0 4.23 2.35 4.23 5.4v6.29z"
      />
    </svg>
    <span>LinkedIn</span>
  </a>

  <!-- TWITTER / X (already distinct) -->
  <a
    :href="twitterShare"
    target="_blank"
    class="px-3 py-2 rounded-lg text-sm font-medium
           flex items-center justify-center gap-2
           border border-zinc-500/40
           text-zinc-200
           bg-zinc-900/80
           transition hover:bg-zinc-700/40"
  >
    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M18.9 2H22l-7.19 8.21L23.5 22H16.8l-5.28-6.65L5.5 22H2l7.65-8.75L.5 2h6.85l4.77 6.01L18.9 2z"/>
    </svg>
    <span>Twitter</span>
  </a>

  <!-- EMAIL (envelope with flap – very clear) -->
  <a
    :href="emailShare"
    class="px-3 py-2 rounded-lg text-sm font-medium
           flex items-center justify-center gap-2
           border border-red-500/40
           text-red-200
           bg-zinc-900/80
           transition hover:bg-red-500/10"
  >
    <svg
  class="w-5 h-5 overflow-visible"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  viewBox="0 0 24 24"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M3 8l9 6 9-6"
  />
  <rect
    x="3"
    y="6"
    width="18"
    height="12"
    rx="2"
    ry="2"
  />
</svg>

    <span>Email</span>
  </a>

</div>


        <!-- CLOSE -->
        <button
          @click="closeShare"
          class="relative z-10 mt-5 w-full px-4 py-2 rounded-lg
                 bg-zinc-800 hover:bg-zinc-700
                 text-zinc-300 text-sm transition"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

import SIMCards from '../components/topics/SIMCards.vue'
import Taxis from '../components/topics/Taxis.vue'
import PublicTransportation from '../components/topics/PublicTransportation.vue'
import FoodDelivery from '../components/topics/FoodDelivery.vue'
import OnlineShopping from '../components/topics/OnlineShopping.vue'
import EWallets from '../components/topics/EWallets.vue'
import StudentAccommodation from '../components/topics/StudentAccommodation.vue'
import Driving from '../components/topics/DrivingMalaysia.vue'
import Visa from '../components/topics/VisaRenewal.vue'
import HealthcareInsurance from '../components/topics/HealthcareInsurance.vue'

export default {
  name: 'ISGMPost',
  props: { topic: { type: String, required: true } },
  setup(props) {
    const router = useRouter()
    const currentTopic = ref(props.topic)

    const menuItems = [
      { name: 'SIM Cards', slug: 'sim-cards' },
      { name: 'Taxis', slug: 'taxis' },
      { name: 'Public Transportation', slug: 'public-transportation' },
      { name: 'Food Delivery', slug: 'food-delivery' },
      { name: 'Online Shopping', slug: 'online-shopping' },
      { name: 'E-Wallets & Payments', slug: 'e-wallets-payments' },
      { name: 'Student Accommodation', slug: 'student-accommodation' },
      { name: 'Driving in Malaysia', slug: 'driving-in-malaysia' },
      { name: 'Visa & Passport', slug: 'visa-renewal' },
      { name: 'Healthcare & Insurance', slug: 'healthcare-insurance' }
    ]

    const goToTopic = (slug) => {
      if (slug !== currentTopic.value) {
        router.push({ name: 'ISGMPost', params: { topic: slug } })
        currentTopic.value = slug
      }
    }

    watch(() => props.topic, v => (currentTopic.value = v))

    const currentComponent = () => ({
      'sim-cards': SIMCards,
      taxis: Taxis,
      'public-transportation': PublicTransportation,
      'food-delivery': FoodDelivery,
      'online-shopping': OnlineShopping,
      'e-wallets-payments': EWallets,
      'student-accommodation': StudentAccommodation,
      'driving-in-malaysia': Driving,
      'visa-renewal': Visa,
      'healthcare-insurance': HealthcareInsurance
    }[currentTopic.value] || SIMCards)

    const showShare = ref(false)
    const openShare = () => (showShare.value = true)
    const closeShare = () => (showShare.value = false)

    const handleEsc = e => e.key === 'Escape' && closeShare()
    onMounted(() => window.addEventListener('keydown', handleEsc))
    onBeforeUnmount(() => window.removeEventListener('keydown', handleEsc))

    const currentUrl = computed(() => window.location.href)
    const copyLink = async () => {
      await navigator.clipboard.writeText(currentUrl.value)
      closeShare()
    }

    const facebookShare = computed(() => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl.value)}`)
    const whatsappShare = computed(() => `https://wa.me/?text=${encodeURIComponent(currentUrl.value)}`)
    const linkedinShare = computed(() => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl.value)}`)
    const twitterShare = computed(() => `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl.value)}`)
    const emailShare = computed(() => `mailto:?body=${encodeURIComponent(currentUrl.value)}`)

    return {
      menuItems, goToTopic, currentTopic, currentComponent,
      showShare, openShare, closeShare, copyLink,
      facebookShare, whatsappShare, linkedinShare, twitterShare, emailShare
    }
  }
}
</script>

<style scoped>
button { min-height: 2.5rem; }

@media (max-width: 640px) {
  .grid-cols-5 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>