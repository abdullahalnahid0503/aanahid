<template>
  <div class="min-h-screen bg-transparent transition-colors duration-500 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <router-link
        to="/blog"
        class="inline-flex items-center text-zinc-400 hover:text-white font-medium mb-8 transition-all duration-300 group"
      >
        <svg class="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Blog
      </router-link>

      <article v-if="post" class="bg-zinc-900/30 backdrop-blur-md border border-zinc-800/50 rounded-xl shadow-lg p-8 md:p-12 hover:border-blue-500/50 hover:shadow-2xl transition-all duration-500">
        <h1 class="text-3xl md:text-5xl font-bold text-zinc-100 mb-4">
          {{ post.title }}
        </h1>
        <p class="text-zinc-500 mb-8">
          {{ post.date }}
        </p>
        <div
          v-html="post.content"
          class="prose prose-lg dark:prose-invert max-w-none"
        ></div>
      </article>

      <div v-else class="text-center py-20">
        <p class="text-xl text-zinc-400">
          Blog post not found.
        </p>
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
  content: string
}

const route = useRoute()
const post = ref<BlogPost | null>(null)

const blogPosts: { [key: string]: BlogPost } = {
  'building-ethical-technology': {
    slug: 'building-ethical-technology',
    title: 'Building Ethical Technology for Tomorrow',
    date: 'January 15, 2025',
    content: `
      <p>In an era where technology shapes every aspect of our lives, the question of ethics in tech development has never been more critical. As developers, we hold immense power to influence society, and with that power comes great responsibility.</p>

      <h2>The Foundation of Ethical Technology</h2>
      <p>Ethical technology begins with three core principles: privacy, equity, and sustainability. Every line of code we write, every system we design, should be evaluated through these lenses.</p>

      <h3>Privacy First</h3>
      <p>User privacy isn't a feature—it's a fundamental right. We must design systems that collect only necessary data, store it securely, and give users complete control over their information.</p>

      <h3>Equity and Accessibility</h3>
      <p>Technology should be accessible to everyone, regardless of their background, abilities, or economic status. This means designing inclusive interfaces, considering diverse user needs, and ensuring our solutions don't perpetuate existing inequalities.</p>

      <h3>Environmental Sustainability</h3>
      <p>The environmental impact of technology is real. From energy-intensive data centers to e-waste, we must consider the ecological footprint of our solutions and work toward more sustainable practices.</p>

      <h2>Practical Steps Forward</h2>
      <p>Building ethical technology isn't just about grand principles—it's about everyday decisions. Ask yourself: Who benefits from this feature? Who might be harmed? What are the long-term consequences?</p>

      <p>As we build the future, let's ensure it's one we can all be proud of.</p>
    `
  },
  'youth-driven-innovation': {
    slug: 'youth-driven-innovation',
    title: 'The Power of Youth-Driven Innovation',
    date: 'December 28, 2024',
    content: `
      <p>Young people today are not just consumers of technology—they're creators, innovators, and changemakers. Through initiatives like The Lab Thirteen, we're witnessing firsthand how youth-driven innovation can transform communities.</p>

      <h2>Why Youth Innovation Matters</h2>
      <p>Young innovators bring fresh perspectives, unburdened by traditional constraints. They see problems differently and aren't afraid to challenge the status quo.</p>

      <h2>Creating Supportive Ecosystems</h2>
      <p>For youth innovation to thrive, we need supportive ecosystems—mentorship programs, access to resources, and safe spaces to experiment and fail.</p>

      <h2>Real Impact</h2>
      <p>From addressing local challenges to building global solutions, young innovators are proving that age is not a barrier to creating meaningful impact.</p>
    `
  },
  'learning-vue-journey': {
    slug: 'learning-vue-journey',
    title: 'My Journey Learning Vue.js',
    date: 'December 10, 2024',
    content: `
      <p>Learning a new framework can be daunting, but my journey with Vue.js has been incredibly rewarding. Here's what I've learned along the way.</p>

      <h2>Why Vue.js?</h2>
      <p>Vue's approachable learning curve and elegant syntax made it an ideal choice for building modern web applications. The framework's progressive nature allowed me to start simple and gradually adopt more advanced features.</p>

      <h2>Key Takeaways</h2>
      <p>Composition API revolutionized how I think about component logic. Reactivity in Vue feels intuitive and powerful. The ecosystem, including tools like Vite and Pinia, makes development a joy.</p>

      <h2>Advice for Beginners</h2>
      <p>Start with the fundamentals, build real projects, and don't be afraid to explore the source code. The Vue community is incredibly supportive—leverage that!</p>
    `
  },
  'social-impact-tech': {
    slug: 'social-impact-tech',
    title: 'Technology as a Tool for Social Impact',
    date: 'November 22, 2024',
    content: `
      <p>Technology has the potential to be one of the most powerful tools for creating positive social change. But realizing that potential requires intentionality and commitment.</p>

      <h2>Defining Social Impact Tech</h2>
      <p>Social impact technology addresses pressing social challenges—from education and healthcare to environmental conservation and economic opportunity.</p>

      <h2>Challenges and Opportunities</h2>
      <p>Building impactful technology requires understanding context, engaging communities, and measuring real outcomes. It's not enough to build something cool—it has to truly help people.</p>

      <h2>The Path Forward</h2>
      <p>As technologists, we must ask ourselves: Are we building for impact or just for innovation's sake? Let's choose impact.</p>
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

.prose :deep(p) {
  margin-bottom: 1rem;
  line-height: 1.75;
  color: #a1a1aa;
}
</style>
