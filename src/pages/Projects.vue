<template>
  <div class="min-h-screen bg-transparent transition-colors duration-500 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
        Projects
      </h1>
      <p class="text-lg text-zinc-400 mb-12">
        Here are some of the projects I've worked on, showcasing my passion for building impactful solutions.
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in projects"
          :key="project.title"
          class="group relative bg-zinc-900/30 backdrop-blur-md border border-zinc-800/50 rounded-xl hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/5 group-hover:to-pink-600/10 transition-all duration-500"></div>

          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>

          <div class="relative p-6">
            <h3 class="text-2xl font-semibold text-zinc-100 group-hover:text-white mb-3 transition-colors duration-300">
              {{ project.title }}
            </h3>
            <p class="text-zinc-400 group-hover:text-zinc-300 mb-4 leading-relaxed transition-colors duration-300">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-3 py-1 bg-blue-600/10 text-blue-400 border border-blue-600/20 rounded-full text-sm font-medium hover:bg-blue-600/20 hover:border-blue-600/40 transition-all duration-300 cursor-default"
              >
                {{ tag }}
              </span>
            </div>
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center text-zinc-400 hover:text-white font-medium transition-all duration-300 group/link"
            >
              <span class="group-hover/link:translate-x-1 transition-transform duration-300">View Project</span>
              <svg class="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl group-hover:bg-blue-600/40 transition-all duration-500"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Project {
  title: string
  description: string
  tags: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: 'EduTrack',
    description: 'A comprehensive educational management system designed to streamline student tracking, attendance, and performance monitoring for educational institutions.',
    tags: ['Vue.js', 'PHP', 'MySQL', 'Education'],
    link: '#'
  },
  {
    title: 'The Lab Thirteen',
    description: 'A youth-driven innovation hub fostering technological solutions and social entrepreneurship among young Bangladeshi innovators.',
    tags: ['Social Impact', 'Innovation', 'Community'],
    link: 'https://thelabthirteen.com'
  },
  {
    title: 'ISS UTMKL Website',
    description: 'Official website for the International Student Society at UTM Kuala Lumpur, connecting students and promoting cultural exchange.',
    tags: ['Vue.js', 'Web Development', 'Community'],
    link: '#'
  },
  {
    title: 'Narsingdi Global Network',
    description: 'A digital platform connecting diaspora members from Narsingdi district worldwide, fostering collaboration and cultural preservation.',
    tags: ['Networking', 'Community', 'Web Platform'],
    link: '#'
  },
  {
    title: 'Portfolio Management System',
    description: 'A dynamic portfolio management tool helping professionals showcase their work with customizable templates and analytics.',
    tags: ['Vue.js', 'Tailwind', 'TypeScript'],
    link: '#'
  },
  {
    title: 'Event Organizer Pro',
    description: 'An all-in-one event management solution with features for registration, ticketing, and real-time attendee tracking.',
    tags: ['PHP', 'MySQL', 'Events'],
    link: '#'
  }
]
</script>
