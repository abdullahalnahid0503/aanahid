<template>
  <div class="min-h-screen bg-transparent py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto">
      <router-link
        to="/blog"
        class="inline-flex items-center text-zinc-400 hover:text-white font-medium mb-8 transition-all duration-300 group"
      >
        <svg class="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Blog
      </router-link>

      <article v-if="post" class="bg-zinc-900/40 backdrop-blur-lg border border-zinc-800/60 rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-all duration-500">
        <!-- IMAGE -->
        <div class="w-full h-64 mb-6 overflow-hidden rounded-xl">
          <img
            :src="post.image"
            class="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
          />
        </div>

        <!-- TITLE & DATE -->
        <h1 class="text-3xl md:text-5xl font-bold text-zinc-100 mb-4">
          {{ post.title }}
        </h1>
        <p class="text-zinc-500 mb-8">{{ post.date }}</p>

        <!-- FULL CONTENT -->
        <div v-html="post.content" class="prose prose-lg dark:prose-invert max-w-none"></div>
      </article>

      <div v-else class="text-center py-20">
        <p class="text-xl text-zinc-400">Blog post not found.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

interface BlogPost {
  slug: string
  title: string
  date: string
  image: string
  content: string
}

const route = useRoute()
const post = ref<BlogPost | null>(null)

// Full detailed content posts with images
const blogPosts: { [key: string]: BlogPost } = {
  'art-asean-2025': {
    slug: 'art-asean-2025',
    title: 'ART@ASEAN’25: A Milestone for Educational Diplomacy',
    date: '3 July 2025',
    image: new URL('../assets/asean.jpg', import.meta.url).href,
    content: `
      <p>On 3 July 2025, a pivotal moment unfolded in the world of educational diplomacy with the Ambassadors' Roundtable for ASEAN 2025 (ART@ASEAN’25). With 30 ambassadors, the Malaysian Minister of Higher Education, and global education leaders in attendance, the event showcased the deepening partnership between ASEAN and the EU in higher education.</p>
      <ul>
        <li><strong>Launch of the Erasmus+ Malaysia Hub</strong>, hosted by <strong>UTM</strong></li>
        <li>Keynote on <strong>“Bridging Nations, Connecting Regions”</strong></li>
        <li>Renewed commitment to <strong>mind mobility</strong></li>
      </ul>
      <p>A proud moment for ISS UTMKL and UTM at the heart of global initiatives.</p>
    `
  },
  'bowlers-bonanza-2025': {
    slug: 'bowlers-bonanza-2025',
    title: 'Dare Devils Strike Victory at Bowlers Bonanza 2025',
    date: '11 August 2025',
    image: new URL('../assets/bowling.jpg', import.meta.url).href,
    content: `
      <p>Team Dare Devils, led by Sadaquat Ruk, clinched 1st place in the group category at Bowlers Bonanza 2025! Opening speech by YBrs. Dr. Mohamed Azlan Suhot set the tone for a day full of energy and friendly competition.</p>
      <p>It wasn’t just about strikes and spares—it was about teamwork, trust, and pushing each other to excel.</p>
    `
  },
  'parlimen-visit-2025': {
    slug: 'parlimen-visit-2025',
    title: 'Exploring Malaysian Politics: A Visit to Parliament',
    date: '15 October 2025',
    image: new URL('../assets/parliament.jpg', import.meta.url).href,
    content: `
      <p>Visited the Parliament of Malaysia with Monash Political Awareness Club. Witnessed debates and engaged in insightful conversations.</p>
      <p>Highlight: closed-door session providing insights on politics, leadership, and purpose.</p>
    `
  },
  'ifuture-summit-2025': {
    slug: 'ifuture-summit-2025',
    title: 'iFuture Summit 2025: Empowering Young Leaders',
    date: '11–13 October 2025',
    image: new URL('../assets/ifuture.jpg', import.meta.url).href,
    content: `
      <p>Attended iFuture Summit 2025 with hundreds of young leaders. Theme: “Empowering Young Leaders for a Digital Future.”</p>
      <ul>
        <li>Ministerial Forum featuring YB Datuk Fahmi Fadzil and Gobind Singh Deo</li>
        <li>Youth roundtables, exhibitions, iFuture Talk Series</li>
      </ul>
      <p>Unity among future changemakers committed to lead with values, courage, and digital readiness.</p>
    `
  },
  'miul-2025': {
    slug: 'miul-2025',
    title: 'MIUL 2025: Driving Internationalisation in Higher Education',
    date: '15–17 October 2025',
    image: new URL('../assets/miul.jpg', import.meta.url).href,
    content: `
      <p>UTM Kuala Lumpur hosted the Management of Internationalisation for University Leaders (MIUL 2025), endorsed by MoHE Malaysia.</p>
      <p>Three-day event: senior university leaders from Malaysia and ASEAN explored leadership, strategic partnerships, and sustainable collaboration.</p>
      <p>Success powered by UTM International Kuala Lumpur and ISS UTMKL.</p>
    `
  }
}

onMounted(() => {
  const slug = route.params.slug as string
  post.value = blogPosts[slug] || null
})
</script>

<style scoped>
.prose :deep(h2) {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #f4f4f5;
}

.prose :deep(h3) {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: #e4e4e7;
}

.prose :deep(p),
.prose :deep(li) {
  margin-bottom: 1rem;
  line-height: 1.75;
  color: #a1a1aa;
}
</style>
