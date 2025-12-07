<template>
  <div class="min-h-screen bg-transparent transition-colors duration-500 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
        Get In Touch
      </h1>
      <p class="text-lg text-zinc-400 mb-12">
        Have a question or want to work together? Feel free to reach out!
      </p>

      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div class="bg-zinc-900/50 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
          <h2 class="text-2xl font-semibold text-zinc-100 mb-6">
            Contact Form
          </h2>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-zinc-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-zinc-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-zinc-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
            >
              Send Message
            </button>
          </form>

          <div v-if="submitted" class="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <p class="text-green-800 dark:text-green-300 text-sm">
              Thank you for your message! I'll get back to you soon.
            </p>
          </div>
        </div>

        <div class="space-y-8">
          <div class="bg-zinc-900/50 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
            <h2 class="text-2xl font-semibold text-zinc-100 mb-6">
              Connect With Me
            </h2>
            <div class="space-y-4">
              <a
                href="https://www.linkedin.com/in/abdullahalnahid0503/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-4 p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <div>
                  <p class="font-medium text-zinc-100">LinkedIn</p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Connect professionally</p>
                </div>
              </a>

              <a
                href="https://github.com/abdullahalnahid0503"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-4 p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <div>
                  <p class="font-medium text-zinc-100">GitHub</p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">View my code</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/abdullahal._.nahid/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-4 p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <div>
                  <p class="font-medium text-zinc-100">Instagram</p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Follow my journey</p>
                </div>
              </a>
            </div>
          </div>

          <div class="bg-gradient-to-br from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <h3 class="text-lg font-semibold text-zinc-100 mb-2">
              Open to Opportunities
            </h3>
            <p class="text-zinc-400 text-sm">
              I'm always interested in hearing about new projects, collaborations, and opportunities
              to create meaningful impact through technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  console.log('Form submitted:', form)
  submitted.value = true

  setTimeout(() => {
    form.name = ''
    form.email = ''
    form.message = ''
    submitted.value = false
  }, 3000)
}
</script>
