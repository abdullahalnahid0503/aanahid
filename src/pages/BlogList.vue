<template>
  <div class="min-h-screen bg-transparent transition-colors duration-500 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
        Blog
      </h1>
      <p class="text-lg text-zinc-400 mb-12">
        Thoughts on technology, innovation, and social impact.
      </p>

      <div class="space-y-8">
        <article
          v-for="post in blogPosts"
          :key="post.slug"
          class="group relative bg-zinc-900/30 backdrop-blur-md border border-zinc-800/50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 hover:border-blue-500/50 overflow-hidden"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/5 group-hover:via-purple-600/3 group-hover:to-pink-600/5 transition-all duration-500"></div>

          <div class="relative z-10">
            <div class="mb-4">
              <h2 class="text-2xl md:text-3xl font-bold text-zinc-100 mb-2 group-hover:text-white transition-colors duration-300">
                <router-link :to="`/blog/${post.slug}`">
                  {{ post.title }}
                </router-link>
              </h2>
              <p class="text-sm text-zinc-500">
                {{ post.date }}
              </p>
            </div>
            <p class="text-zinc-400 group-hover:text-zinc-300 mb-4 leading-relaxed transition-colors duration-300">
              {{ post.excerpt }}
            </p>
            <router-link
              :to="`/blog/${post.slug}`"
              class="inline-flex items-center text-zinc-400 hover:text-white font-medium transition-all duration-300 group/link"
            >
              <span class="group-hover/link:translate-x-1 transition-transform duration-300">Read More</span>
              <svg class="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>

          <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl group-hover:bg-blue-600/40 transition-all duration-500"></div>
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
}

const blogPosts: BlogPost[] = [
  {
    slug: 'building-ethical-technology',
    title: 'Building Ethical Technology for Tomorrow',
    date: 'January 15, 2025',
    excerpt: 'Exploring the principles and practices of creating technology that serves humanity while respecting privacy, equity, and sustainability.'
  },
  {
    slug: 'youth-driven-innovation',
    title: 'The Power of Youth-Driven Innovation',
    date: 'December 28, 2024',
    excerpt: 'How young innovators are reshaping the tech landscape and creating solutions that address real-world challenges in their communities.'
  },
  {
    slug: 'learning-vue-journey',
    title: 'My Journey Learning Vue.js',
    date: 'December 10, 2024',
    excerpt: 'Reflections on learning Vue.js as a framework and how it transformed my approach to building modern, reactive web applications.'
  },
  {
    slug: 'social-impact-tech',
    title: 'Technology as a Tool for Social Impact',
    date: 'November 22, 2024',
    excerpt: 'Understanding how technology can be leveraged to create positive social change and empower underserved communities worldwide.'
  }
]
</script>
