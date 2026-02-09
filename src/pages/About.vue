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
</style>
