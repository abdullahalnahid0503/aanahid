<template>
  <div class="min-h-screen bg-transparent transition-colors duration-500 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold text-zinc-100 mb-8">
        About Me
      </h1>

      <div class="prose prose-lg dark:prose-invert max-w-none">

        <!-- BIOGRAPHY -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-zinc-100 mb-4 mt-12">
            Biography
          </h2>

          <p class="text-zinc-400 leading-relaxed mb-4 text-justify">
            I am Abdullah Al Nahid, a Bangladeshi software engineering student, youth leader, and community-driven innovator currently based in Kuala Lumpur, Malaysia. My work sits at the intersection of technology, student leadership, and social impact, with a focus on ethical innovation, cross-cultural engagement, and youth representation.
          </p>

          <p class="text-zinc-400 leading-relaxed mb-4 text-justify">
            I currently serve as Vice President of the International Student Society at Universiti Teknologi Malaysia, Kuala Lumpur (ISS UTMKL), where I represent international students and lead initiatives that strengthen institutional dialogue, student welfare, and intercultural collaboration. Alongside this role, I am Vice Chairman of the Institution of Engineers Malaysia (IEM) UTMKL Student Chapter, contributing to engineering leadership, professional development, and student-industry engagement.
          </p>

          <p class="text-zinc-400 leading-relaxed mb-4 text-justify">
            Beyond campus leadership, I am actively involved in human rights advocacy with Amnesty International, supporting efforts that promote justice, equality, and the protection of fundamental freedoms. Over the years, I have contributed to organizations such as UNICEF, UNESCO, AIESEC Malaysia, ISSBD, and ISS UTM Johor Bahru, particularly in public affairs, media strategy, internationalisation, and community development.
          </p>

          <p class="text-zinc-400 leading-relaxed mb-4 text-justify">
            My work in student leadership and civic engagement has been featured across more than 20 national and international media outlets, reflecting a commitment to principled, student-centered leadership and constructive public discourse.
          </p>

          <p class="text-zinc-400 leading-relaxed mb-4 text-justify">
            I am also the Founder of The Lab Thirteen, an innovation-driven initiative focused on building ethical, human-centered technology solutions. Through this platform, I combine software engineering, strategic thinking, and social responsibility to design solutions that empower youth, strengthen communities, and align innovation with long-term societal value.
          </p>

          <p class="text-zinc-400 leading-relaxed mb-4 text-justify">
            Driven by a belief in fairness, accountability, and purposeful progress, I continue to work toward building systems, both technical and institutional, that put people first and create lasting impact.
          </p>
        </section>

        <!-- What I Care About -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-zinc-100 mb-4 mt-12">
            What I Care About
          </h2>
          <p class="text-zinc-400 leading-relaxed mb-4 text-justify">
            Having explored much of the Malaysian peninsula through long road trips, I have developed a strong interest in driving and travel, valuing scenic routes and moments of quiet reflection. These experiences have allowed me to engage deeply with my surroundings while appreciating independence and exploration.
            <br><br>
            Alongside this, I am an avid coin collector with an extensive collection spanning multiple decades and countries, including rare commemorative coins that capture significant historical events. This hobby reflects my long-standing interest in history and global narratives.
            <br><br>
            I also engage closely with political and historical documentaries, which have broadened my understanding of international affairs, governance, and the social forces shaping societies. These interests have strengthened my awareness of global issues and policy-related challenges.
            <br><br>
            Beyond these personal interests, I enjoy experimenting with technology through small personal projects and creative problem-solving. This allows me to combine hands-on innovation with curiosity-driven learning, particularly in areas that intersect with software engineering.
            <br><br>
            Outside of technical work, I am deeply interested in community building, human rights advocacy, and global development initiatives. I am especially passionate about youth-focused platforms, empowering new developers, and creating technology aligned with ethical, social, and cultural values.
            <br><br>
            Looking ahead, I aim to pursue a master’s degree abroad and build a career grounded in strategic leadership, innovation, and public service, with the long-term goal of contributing to international development and meaningful community impact.
          </p>
        </section>

        <!-- FLASHCARDS -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-zinc-100 mb-4 mt-12">
            What AI says about me
          </h2>

          <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div
              v-for="(card, index) in flashcards"
              :key="index"
              class="flip-card"
            >
              <div
                class="flip-card-inner group"
                :class="{ flipped: card.flipped }"
                @click="card.flipped = !card.flipped"
              >
                <!-- FRONT -->
                <div
                  class="flip-card-front relative rounded-xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-md overflow-hidden transition-all duration-500 group-hover:border-blue-500/50 group-hover:shadow-xl"
                >
                  <!-- Logo background blur + glow on hover -->
                  <div
                    v-if="card.logo"
                    class="absolute inset-0 bg-center bg-no-repeat bg-contain filter blur-[2.5px] opacity-20 transition-all duration-500 group-hover:opacity-40 group-hover:scale-105"
                    :style="{ backgroundImage: `url(${card.logo})` }"
                  ></div>

                  <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 gap-2">
                    <h3 v-if="card.title" class="text-zinc-100 font-semibold text-lg transition-all duration-300 group-hover:text-blue-400">
                      {{ card.title }}
                    </h3>
                    <p class="text-zinc-400 font-medium whitespace-pre-line max-w-[220px]">
                      {{ card.question }}
                    </p>
                  </div>
                </div>

                <!-- BACK -->
                <div
                  class="flip-card-back relative rounded-xl border border-zinc-800/50 bg-zinc-900/40 backdrop-blur-md overflow-hidden transition-all duration-500 group-hover:shadow-xl"
                >
                  <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-pink-600/10"></div>

                  <div class="relative z-10 flex items-center justify-center h-full text-center px-4">
                    <p class="text-blue-400 font-semibold whitespace-pre-wrap">
                      {{ card.answer }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Nahidified -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-zinc-100 mb-4 mt-12">
            Nahidified
          </h2>
          <p class="text-zinc-400 leading-relaxed mb-4 text-justify">
            The certificates, projects, and achievements tell only part of my story. Nahidified is who I am beyond the CV. It began with a simple problem: I wanted to study abroad, but I had no idea where to start. I searched the internet, asked countless questions, and often felt that the right information was always just out of reach. Over time, I found my way through research, experience, mistakes, and continuous learning. Nahidified was born from that journey.
            <br><br>
            This isn't a place for perfect guides or unrealistic success stories. It's where I share what actually worked, what didn't, and the lessons I learned along the way. From studying abroad, visas, scholarships, and career opportunities to travel, personal insights and thoughts, and the experiences that continue shaping my life, everything here comes from real experiences rather than theory. If your dreams are still taking shape and you're wondering where to begin, I hope my journey helps make your path a little clearer. Welcome to Nahidified.
          </p>
        </section>

        <!-- Connect (Pendulum) -->
        <section class="mb-12">

          <div class="pendulum-container">
            <div class="pendulum-bar"></div>
            <div class="pendulum-balls">
<a 
              href="https://www.youtube.com/@nahidified"
  target="_blank"
  rel="noopener noreferrer"
  class="pendulum-ball pendulum-ball--start"
>
  <svg class="w-6 h-6" viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.4 3.1C27.1 1.9 26.2 1 25 0.7 22.7 0 14 0 14 0S5.3 0 3 0.7C1.8 1 0.9 1.9 0.6 3.1 0 5.4 0 10 0 10s0 4.6 0.6 6.9c0.3 1.2 1.2 2.1 2.4 2.4C5.3 20 14 20 14 20s8.7 0 11-0.7c1.2-0.3 2.1-1.2 2.4-2.4C28 14.6 28 10 28 10s0-4.6-0.6-6.9z" fill="#FF0000"/>
    <path d="M11 14.3 18.5 10 11 5.7z" fill="#FFFFFF"/>
  </svg>
</a>

<a
  href="https://www.facebook.com/nahidified"
  target="_blank"
  rel="noopener noreferrer"
  class="pendulum-ball"
>
  <svg class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#1877F2"/>
    <path d="M15.5 12.5h-2.2V20h-3.1v-7.5H8.5V9.9h1.7V8.4c0-1.7 0.9-3.2 3.4-3.2h2.1v2.6h-1.5c-0.7 0-0.8 0.3-0.8 0.8v1.3h2.4l-0.3 2.6z" fill="#FFFFFF"/>
  </svg>
</a>

<a
  href="https://www.instagram.com/nahidified/"
  target="_blank"
  rel="noopener noreferrer"
  class="pendulum-ball pendulum-ball--end"
>
  <svg class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="igGradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#FFDD55"/>
        <stop offset="25%" stop-color="#FF543E"/>
        <stop offset="50%" stop-color="#C837AB"/>
        <stop offset="75%" stop-color="#8134AF"/>
        <stop offset="100%" stop-color="#515BD4"/>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="24" height="24" rx="6" fill="url(#igGradient)"/>
    <rect x="6.5" y="6.5" width="11" height="11" rx="3.5" fill="none" stroke="#FFFFFF" stroke-width="1.6"/>
    <circle cx="12" cy="12" r="3.2" fill="none" stroke="#FFFFFF" stroke-width="1.6"/>
    <circle cx="16.3" cy="7.7" r="0.9" fill="#FFFFFF"/>
  </svg>
</a>

            </div>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

interface Flashcard {
  title?: string;
  question: string;
  answer: string;
  flipped: boolean;
  logo?: string;
}

const flashcards = reactive<Flashcard[]>([
  {
    title: "ChatGPT",
    question: "What does Nahid naturally try to build or improve?",
    answer: "Naturally builds meaningful projects and solutions that impact communities.",
    flipped: false,
    logo: "/logos/chatgpt.png"
  },
  {
    title: "GrokAI",
    question: "How does Nahid think when decisions matter?",
    answer: "Thinks strategically, weighing long-term consequences before acting.",
    flipped: false,
    logo: "/logos/grokai.png"
  },
  {
    title: "Google Gemini",
    question: "Which values seem non-negotiable for Nahid?",
    answer: "Upholds truth, fairness, respect, and accountability in all actions.",
    flipped: false,
    logo: "/logos/gemini.png"
  },
  {
    title: "DeepseekAI",
    question: "What direction does Nahid appear to be moving toward?",
    answer: "Moving toward global influence and serving communities effectively.",
    flipped: false,
    logo: "/logos/deepseek.png"
  },
  {
    title: "PerplexityAI",
    question: "What strength might Nahid underestimate, and what risk should he watch?",
    answer: "Strength: Leadership\nRisk: Overcommitting to too many causes.",
    flipped: false,
    logo: "/logos/perplexity.png"
  },
  {
    title: "ClaudeAI",
    question: "What is commonly assumed about Nahid that may not be true?",
    answer: "Often assumed intense or unapproachable, but actually welcoming and empathetic.",
    flipped: false,
    logo: "/logos/claude.png"
  }
]);
</script>

<style>
/* ===== Flashcards ===== */
.flip-card {
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 10rem;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  cursor: pointer;
}

.flip-card-inner.flipped {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}

/* ===== Pendulum — exact same structure/timing as reference ===== */
.pendulum-container {
  width: 250px;
  margin: 0 auto;
}

.pendulum-bar {
  width: 150px;
  margin: 0 auto;
  height: 10px;
  background-color: #bdc3c7;
  border-radius: 8px;
}

.pendulum-balls {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  gap: 0px;
}

.pendulum-ball {
  width: 50px;
  height: 50px;
  background-color: #18181b;
  border: 1px solid rgba(161, 161, 170, 0.3);
  border-radius: 50%;
  position: relative;
  transform-origin: 50% -100px; /* x axis y axis */
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.pendulum-ball::before {
  content: '';
  position: absolute;
  width: 1px;
  height: 100px;
  background-color: #bdc3c7;
  top: -100px;
  left: 50%;
}

.pendulum-ball--start {
  animation: pendulum-start 0.8s infinite alternate;
}

.pendulum-ball--end {
  animation: pendulum-end 0.8s infinite 0.8s alternate;
}

@keyframes pendulum-start {
  0%, 50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(30deg);
  }
}

@keyframes pendulum-end {
  0%, 50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-30deg);
  }
}
</style>