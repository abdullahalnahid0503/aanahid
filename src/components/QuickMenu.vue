<template>
  <div class="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">

      <!-- Back Button -->
      <router-link
        to="/guidetomalaysia"
        class="inline-flex items-center text-zinc-400 hover:text-white font-medium mb-8 transition-all duration-300 group"
      >
        <svg class="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Essentials
      </router-link>

      <!-- Quick Menu -->
      <div class="grid grid-cols-4 gap-4 mb-8">
        <button
          v-for="item in menuItems"
          :key="item.slug"
          @click="goToTopic(item.slug)"
          class="group relative w-full h-12 flex items-center justify-center rounded-full font-medium overflow-hidden transition-all duration-300"
          :class="currentTopic === item.slug 
            ? 'bg-white text-black border-2 border-blue-500' 
            : 'bg-zinc-700 text-white hover:text-white'"
        >
          <span class="relative z-10">{{ item.name }}</span>

          <!-- Gradient Glow -->
          <span
            class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          ></span>

          <!-- Scale + Rotate -->
          <span
            class="absolute inset-0 rounded-full scale-95 group-hover:scale-105 group-hover:rotate-1 transition-transform duration-300"
          ></span>

          <!-- Shadow Glow -->
          <span
            class="absolute inset-0 rounded-full shadow-xl shadow-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></span>
        </button>
      </div>

      <!-- Dynamic Content -->
      <component
        :is="currentComponent()"
        :key="currentTopic"
        class="bg-zinc-800 rounded-2xl shadow-lg p-8 text-justify space-y-4"
      />
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

import SIMCards from '../components/topics/SIMCards.vue'
import Taxis from '../components/topics/Taxis.vue'
import FoodDelivery from '../components/topics/FoodDelivery.vue'
import OnlineShopping from '../components/topics/OnlineShopping.vue'
import EWallets from '../components/topics/EWallets.vue'
import StudentAccommodation from '../components/topics/StudentAccommodation.vue'
import Driving from '../components/topics/DrivingMalaysia.vue'
import Visa from '../components/topics/VisaRenewal.vue'

export default {
  name: "ISGMPost",
  props: {
    topic: { type: String, required: true }
  },
  setup(props) {
    const router = useRouter()
    const currentTopic = ref(props.topic)

    const menuItems = [
      { name: 'SIM Cards', slug: 'sim-cards' },
      { name: 'Taxis', slug: 'taxis' },
      { name: 'Food Delivery', slug: 'food-delivery' },
      { name: 'Online Shopping', slug: 'online-shopping' },
      { name: 'E-Wallets & Payments', slug: 'e-wallets-payments' },
      { name: 'Student Accommodation', slug: 'student-accommodation' },
      { name: 'Driving in Malaysia', slug: 'driving-in-malaysia' },
      { name: 'Visa & Passport', slug: 'visa-renewal' }
    ]

    const goToTopic = (slug) => {
      if (slug !== currentTopic.value) {
        router.push({ name: 'ISGMPost', params: { slug } })
        currentTopic.value = slug
      }
    }

    watch(() => props.topic, (newTopic) => {
      currentTopic.value = newTopic
    })

    const currentComponent = () => {
      switch (currentTopic.value.toLowerCase()) {
        case 'sim-cards': return SIMCards
        case 'taxis': return Taxis
        case 'food-delivery': return FoodDelivery
        case 'online-shopping': return OnlineShopping
        case 'e-wallets-payments': return EWallets
        case 'student-accommodation': return StudentAccommodation
        case 'driving-in-malaysia': return Driving
        case 'visa-renewal': return Visa
        default: return SIMCards
      }
    }

    return { menuItems, goToTopic, currentTopic, currentComponent }
  }
}
</script>

<style scoped>
/* Ensure all buttons same height */
button {
  min-height: 3rem; /* 48px */
}

/* Responsive 2-per-row on mobile */
@media (max-width: 640px) {
  .grid-cols-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
