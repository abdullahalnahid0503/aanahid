<template>
  <div class="min-h-screen bg-transparent py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
        Blog
      </h1>
      <p class="text-lg text-zinc-400 mb-12">
        Thoughts, journeys, and experiences documented with visuals.
      </p>

      <div class="space-y-10">
        <article
          v-for="post in blogPosts"
          :key="post.slug"
          class="bg-zinc-900/40 backdrop-blur-lg border border-zinc-800/60 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
        >
          <!-- IMAGE -->
          <div class="w-full h-64 bg-zinc-800 overflow-hidden">
            <img
              :src="post.image"
              class="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
          </div>

          <!-- CONTENT -->
          <div class="p-8">
            <h2 class="text-2xl font-bold text-zinc-100 mb-2">
              <router-link :to="`/blog/${post.slug}`" class="hover:text-white">
                {{ post.title }}
              </router-link>
            </h2>

            <p class="text-sm text-zinc-500 mb-4">{{ post.date }}</p>

            <p class="text-zinc-300 mb-6 leading-relaxed">
              {{ post.excerpt }}
            </p>

            <router-link
              :to="`/blog/${post.slug}`"
              class="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-all duration-300"
            >
              Read More
              <svg
                class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  image: string
}

const blogPosts: BlogPost[] = [

{
  slug: 'dsa-2026',
  title: 'Defence Services Asia (DSA) 2026',
  date: '23 April 2026',
  excerpt:
    'The Defence Services Asia (DSA) 2026 exhibition, held on 23 April 2026, marked the final day of one of Asia’s largest and most significant defence and security events. The exhibition served as a powerful platform showcasing the intersection of strategy, innovation, and global collaboration in the modern defence landscape.',
  image: new URL('../assets/dsa-2026.png', import.meta.url).href
},
{
  slug: 'cybersecurity-warfare-modern-conflict',
  title: 'Cybersecurity and Warfare: The Invisible Battlefield of Modern Conflict',
  date: '02 April 2026',
  excerpt:
    'As global conflicts evolve, cyberspace has emerged as a critical battlefield where nations engage in silent yet powerful attacks. This article explores the rise of cyber warfare, real-world case studies, and the growing importance of cybersecurity in protecting modern societies from digital threats.',
  image: new URL('../assets/cybersecurity-and-warfare.png', import.meta.url).href
},
{
  slug: 'ramadan-outreach-issutmkl-2026',
  title: 'Ramadan Outreach Initiative 2026 at UTMKL',
  date: '14 March 2026',
  excerpt:
    'UTM International Kuala Lumpur Campus, with the support of ISS UTMKL, leads a Ramadan outreach initiative providing essential aid and community engagement activities for Palestinian families in Malaysia, reflecting the values of compassion, solidarity, and social responsibility.',
  image: new URL('../assets/ramadan-outreach-issutmkl-2026.png', import.meta.url).href
},
{
  slug: 'global-iftar-issutmkl-2026',
  title: 'Global Iftar 2026 at UTMKL',
  date: '12 March 2026',
  excerpt:
    'ISS UTMKL, in collaboration with UTM International Kuala Lumpur Campus, hosts Global Iftar 2026, bringing together students from diverse backgrounds to celebrate unity, compassion, and the spirit of Ramadan.',
  image: new URL('../assets/global-iftar-issutmkl-2026.png', import.meta.url).href
},
{
    slug: 'international-mother-language-day-bdhckl-2026',
    title: 'Honoring International Mother Language Day and National Martyrs’ Day',
    date: '21 February 2026',
    excerpt:
      'Malaysia’s Bangladeshi community celebrates International Mother Language Day and National Martyrs’ Day with a meaningful observance at the Bangladesh High Commission in Kuala Lumpur.',
    image: new URL('../assets/international-mother-language-day-bdhckl-2026.png', import.meta.url).href
  },
      {
    slug: 'iss-utmkl-management-camp-2025-26',
    title: 'ISS UTMKL Management Camp & Yearly Activities 2025/26',
    date: '17 January 2026',
    excerpt:
      'ISS UTMKL kicks off 2026 with Management Camp 2025/26 and Yearly Activities Presentation, focusing on collaboration, wellbeing, and meaningful student leadership.',
    image: new URL('../assets/ISS-UTMKL-Management-Camp-2025-26.jpeg', import.meta.url).href
  },
      {
    slug: 'mjiit-service-learning-showcase-2026',
    title: 'MJIIT Software Engineering Service Learning Showcase',
    date: '15 January 2026',
    excerpt:
      'UTM students present their innovative application at MJIIT Service Learning Showcase, delivering live demos, fostering real impact, and earning the Best Team Award.',
    image: new URL('../assets/MJIIT-Service-Learning-Showcase.jpg', import.meta.url).href
  },
      {
    slug: 'UTMKL-International-Cultural-Day-2025',
    title: 'International Cultural Day 2025 - UTMKL',
    date: '11 December 2025',
    excerpt:
      'UTMKL Students Celebrate Global Culture, Food, and Traditions at International Cultural Day 2025, Highlighting Diversity and Connection Across Nations',
    image: new URL('../assets/UTMKL-International-Cultural-Day-2025.jpg', import.meta.url).href
  },
      {
    slug: 'UTMKL-IEM-AWCS-Visit',
    title: 'UTMKL Visit to IEM - AWCS Session',
    date: '6 December 2025',
    excerpt:
      'UTMKL Students Gain Firsthand Insight into Future Waste Management at IEM through Automated Waste Collection System Visit',
    image: new URL('../assets/UTMKL-IEM-AWCS-Visit.jpg', import.meta.url).href
  },
      {
    slug: 'abdullahalnahid-issutmkl-VP',
    title: 'Media Recognition - ISS UTMKL VP Election',
    date: '30 November 2025',
    excerpt:
      'Journalism plays a vital role in amplifying student voices and giving visibility to international leadership.',
    image: new URL('../assets/abdullahalnahid-issutmkl-VP.png', import.meta.url).href
  },
    {
    slug: 'miul-2025',
    title: 'MIUL 2025: Strengthening Internationalisation in Higher Education',
    date: '21 October 2025',
    excerpt:
      'UTM KL hosted a transformative event shaping regional leadership and global partnerships in higher education.',
    image: new URL('../assets/miul.jpg', import.meta.url).href
  },

  {
    slug: 'parlimen-visit-2025',
    title: 'A Day Inside the Parliament of Malaysia',
    date: '14 October 2025',
    excerpt:
      'A meaningful visit with Monash Political Awareness Club debates, insights, and reflections on leadership.',
    image: new URL('../assets/parliament.jpg', import.meta.url).href
  },

  {
    slug: 'ifuture-summit-2025',
    title: 'iFuture Summit 2025: Empowering Young Leaders',
    date: '13 October 2025',
    excerpt:
      'Three inspiring days of ideas, innovation, and digital leadership representing UTM Kuala Lumpur with pride.',
    image: new URL('../assets/ifuture.jpg', import.meta.url).href
  },

  {
    slug: 'bowlers-bonanza-2025',
    title: 'Dare Devils Strike Gold at Bowlers Bonanza 2025',
    date: '11 August 2025',
    excerpt:
      'A championship built on teamwork, discipline, and unity, proving that leadership shows even on the bowling lanes.',
    image: new URL('../assets/bowling.jpg', import.meta.url).href
  },

    {
    slug: 'art-asean-2025',
    title: 'Ambassadors Roundtable for ASEAN 2025: A New Era in Educational Diplomacy',
    date: '03 July 2025',
    excerpt:
      'A powerful moment for ASEAN-EU academic cooperation, with UTM at the centre of global educational diplomacy.',
    image: new URL('../assets/asean.jpg', import.meta.url).href
  }
]
</script>