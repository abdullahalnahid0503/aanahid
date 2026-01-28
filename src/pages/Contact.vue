<template>
  <div class="min-h-screen bg-transparent transition-colors duration-500 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">Get In Touch</h1>
      <p class="text-lg text-zinc-400 mb-12">
        Have a question or want to work together? Feel free to reach out!
      </p>

      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <!-- Left Column -->
        <div class="space-y-8">

          <!-- Contact Form -->
          <div class="bg-zinc-900/50 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <h2 class="text-2xl font-semibold text-zinc-100 mb-4">Contact Form</h2>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-900 text-zinc-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-900 text-zinc-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-900 text-zinc-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
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

            <div v-if="submitted" class="mt-4 p-4 bg-green-900/20 border border-green-800 rounded-lg">
              <p class="text-green-300 text-sm">Thank you for your message! I'll get back to you soon.</p>
            </div>
          </div>

          <!-- Open to Opportunities -->
          <div class="bg-gradient-to-br from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 rounded-xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <h2 class="text-2xl font-semibold text-zinc-100 mb-4">Open to Opportunities</h2>
            <p class="text-zinc-400 text-sm text-justify">
              I'm always excited to connect with people and ideas that make a real difference. I work closely with international students, advocate for human rights, and explore how education, ethics, and meaningful connections can shape a better world.

              <br><br>Whether it’s a new project, a collaboration, or an opportunity to create impact, I’m all ears, and I promise to bring curiosity, energy. If your idea involves connecting people, solving global challenges, or making learning more inclusive and ethical, we’re probably on the same page.

              <br><br>Feel free to reach out, whether through a quick message, filling out the contact form, or even booking a free call. Let’s see how we can make a difference together!
            </p>
          </div>

        </div>

        <!-- Right Column -->
        <div class="space-y-8">

          <!-- Connect With Me -->
<div class="bg-zinc-900/50 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
  <h2 class="text-2xl font-semibold text-zinc-100 mb-4">Connect With Me</h2>
  <div class="space-y-4">
    <!-- LinkedIn -->
    <a href="https://www.linkedin.com/in/abdullahalnahid0503/" target="_blank"
       class="flex items-center gap-4 p-4 bg-gray-900/60 rounded-lg hover:bg-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM7 19H4V8h3v11zm-1.5-12.2c-1 0-1.75-.8-1.75-1.8s.75-1.8 1.75-1.8 1.75.8 1.75 1.8-.75 1.8-1.75 1.8zM20 19h-3v-5.6c0-3.4-4-3.1-4 0V19h-3V8h3v1.8c1.4-2.6 7-2.8 7 2.5V19z"/>
      </svg>
      <div>
        <p class="font-medium text-zinc-100">LinkedIn</p>
        <p class="text-sm text-gray-400">Connect professionally</p>
      </div>
    </a>

    <!-- GitHub -->
    <a href="https://github.com/abdullahalnahid0503" target="_blank"
       class="flex items-center gap-4 p-4 bg-gray-900/60 rounded-lg hover:bg-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.3-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1 .9-.3 2-.4 3-.4s2.1.1 3 .4c2.3-1.5 3.3-1 3.3-1 .6 1.7.2 2.9.1 3.2.8.9 1.3 2 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2V22c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/>
      </svg>
      <div>
        <p class="font-medium text-zinc-100">GitHub</p>
        <p class="text-sm text-gray-400">View my code</p>
      </div>
    </a>

    <!-- Instagram -->
    <a href="https://www.instagram.com/abdullahal._.nahid/" target="_blank"
       class="flex items-center gap-4 p-4 bg-gray-900/60 rounded-lg hover:bg-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <svg class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.2c3.2 0 3.6.01 4.9.07 3.2.15 4.8 1.7 5 4.9.06 1.3.07 1.7.07 4.9 0 3.2-.01 3.6-.07 4.9-.15 3.2-1.7 4.8-5 4.9-1.3.06-1.7.07-4.9.07s-3.6-.01-4.9-.07c-3.3-.15-4.8-1.7-5-4.9C2.01 15.6 2 15.2 2 12s.01-3.6.07-4.9C2.22 3.9 3.8 2.3 7 2.2c1.3-.06 1.7-.07 4.9-.07m0-2.2C8.7 0 8.3.01 7 .07 2.6.26.2 2.7.01 7c-.06 1.3-.07 1.7-.07 5s.01 3.7.07 5c.19 4.3 2.6 6.7 7 6.9 1.3.06 1.7.07 5 .07s3.7-.01 5-.07c4.3-.19 6.7-2.6 6.9-7 .06-1.3.07-1.7.07-5s-.01-3.7-.07-5c-.19-4.3-2.6-6.7-6.9-6.9C15.7.01 15.3 0 12 0zm0 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2S15.4 5.8 12 5.8zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-11.8c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4-.6-1.4-1.4-1.4z"/>
      </svg>
      <div>
        <p class="font-medium text-zinc-100">Instagram</p>
        <p class="text-sm text-gray-400">Follow my journey</p>
      </div>
    </a>

  </div>
</div>


          <!-- Request a Call -->
          <div class="bg-zinc-900/50 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <h2 class="text-2xl font-semibold text-zinc-100 mb-4">Request a Call</h2>
            <p class="text-zinc-400 text-sm mb-6">
              Want to schedule a Zoom, Google Meet, or Webex call?<br />
              Submit the form below and I’ll confirm shortly.
            </p>

            <form @submit.prevent="handleCallSubmit" class="space-y-4">
              <input v-model="callForm.name" type="text" required placeholder="Your Name"
                     class="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-900 text-zinc-100" />
              <input v-model="callForm.email" type="email" required placeholder="Your Email"
                     class="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-900 text-zinc-100" />
              <input v-model="callForm.date" type="date" required
                     class="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-900 text-zinc-100" />
              <input v-model="callForm.time" type="time" required
                     class="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-900 text-zinc-100" />
              <textarea v-model="callForm.purpose" rows="3" required placeholder="Purpose of the call..."
                        class="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-900 text-zinc-100 resize-none"></textarea>
              <button type="submit"
                      class="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1">
                Submit Request
              </button>
              <div v-if="callSubmitted" class="mt-2 p-3 bg-green-900/20 border border-green-800 rounded-lg">
                <p class="text-green-300 text-sm">Your call request has been submitted!</p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const form = reactive({ name: "", email: "", message: "" });
const submitted = ref(false);
const handleSubmit = async () => {
  try {
    const res = await fetch("https://formspree.io/f/mldqwdlp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      submitted.value = true;
      setTimeout(() => { form.name = ""; form.email = ""; form.message = ""; submitted.value = false; }, 3000);
    } else alert("Failed to send message.");
  } catch { alert("Error sending message."); }
};

const callForm = reactive({ name: "", email: "", date: "", time: "", purpose: "" });
const callSubmitted = ref(false);
const handleCallSubmit = async () => {
  try {
    const res = await fetch("https://formspree.io/f/mldqwdlp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "CALL_REQUEST", ...callForm }),
    });
    if (res.ok) {
      callSubmitted.value = true;
      setTimeout(() => { callForm.name = ""; callForm.email = ""; callForm.date = ""; callForm.time = ""; callForm.purpose = ""; callSubmitted.value = false; }, 3000);
    } else alert("Failed to submit call request.");
  } catch { alert("Error submitting call request."); }
};
</script>
