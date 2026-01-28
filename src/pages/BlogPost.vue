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

    'iss-utmkl-management-camp-2025-26': {
    slug: 'iss-utmkl-management-camp-2025-26',
    title: 'ISS UTMKL Management Camp & Yearly Activities 2025/26',
    date: '2-4 January & 17 January 2026',
    image: new URL('../assets/ISS-UTMKL-Management-Camp-2025-26.jpeg', import.meta.url).href,
    content: `
  <p>A meaningful start to the year for ISS UTMKL, beginning with the ISS Management Camp 2025/26 held from 2nd to 4th January at Bayu Balau Beach Resort, followed by the Top 3 Yearly Activities Presentation on 17th January at Hyatt Place Hotel, Paradigm Johor Bahru.</p>
  
  <p>These experiences reminded us why we chose to serve in the first place. We learned, reflected, shared ideas, and built stronger connections with fellow ISS chapters and Global Buddies. Along the way, we made a few mistakes, but every lesson helped us grow and move forward with better understanding.</p>
  
  <p>Alhamdulillah, we returned to Kuala Lumpur with clearer direction and renewed purpose. Going ahead, our focus remains on building stronger connections between international and local students, while giving more attention to wellbeing and awareness initiatives in line with the spirit of Internationalization at Home.</p>
  
  <p>As a collective decision, 2026 will be the Year of Collaboration for ISS UTMKL. We are open to meaningful partnerships that create real impact, where SDG goals and GUCI elements are translated into genuine action, not just words.</p>
  
  <p>Grateful for the journey, the lessons, and the people who made it meaningful. We look forward to what lies ahead.</p>
  
  <p>#studentleadership #globalization #sustainability #wellbeing #utm</p>

    `
  },
    'mjiit-service-learning-showcase-2026': {
    slug: 'mjiit-service-learning-showcase-2026',
    title: 'MJIIT Software Engineering Service Learning Showcase',
    date: '15 January 2026',
    image: new URL('../assets/MJIIT-Service-Learning-Showcase.jpg', import.meta.url).href,
    content: `
  <p>The room went quiet, and for a second, everything felt very real.</p>
  
  <p>We had the chance to present our application in front of senior academic leaders from MJIIT including Ir. Ts. Dr. Mohd Hatta bin Mohammed Ariff, Dr. Zatul Alwani Shaffiei, and Ts. Dr. Liyana Adila bt Burhanuddin, together with lecturers, UTM officials, school teachers, and invited representatives from various schools and MJIIT units. Seeing so many people who genuinely cared about education and impact made the moment feel even more meaningful.</p>
  
  <p>After the showcase, the live demo followed. This was the moment where the system had to speak for itself, just as it would in a real school environment.</p>
  
  <p>As part of the ceremony, we also carried out a symbolic hand over by presenting a framed collage of our developed application to our partner school, Sekolah Kebangsaan Saujana Utama. It was a simple gesture, but it represented months of teamwork, learning, and shared trust.</p>
  
  <p>This entire journey took place under the MJIIT Software Engineering Service Learning Showcase, and today felt like a beautiful full circle moment.</p>
  
  <p>We are truly grateful and proud to receive the Best Team Award for both the overall semester performance and today’s final presentation.</p>
  
  <p>More than the award, this experience reminded us why we build in the first place. To listen, to serve, and to create solutions that actually help people. Thank you Sekolah Kebangsaan Saujana Utama and MJIIT for believing in us and allowing students to turn learning into real impact.</p>
  
  <p>#servicelearning #teamwork #softwareengineering #utm #studentinnovation</p>

    `
  },
  'UTMKL-International-Cultural-Day-2025': {
    slug: 'UTMKL-International-Cultural-Day-2025',
    title: 'International Cultural Day 2025 - UTMKL',
    date: '11 December 2025',
    image: new URL('../assets/UTMKL-International-Cultural-Day-2025.jpg', import.meta.url).href,
    content: `
  <p>Had an unforgettable day at International Cultural Day 2025 here at UTMKL! Our campus auditorium turned into a mini world fair with ten countries sharing stories, food, and traditions in one buzzing space.</p>
  
  <p>A proud moment was seeing the Bangladeshi team earn second place, and their booth truly delivered with nokshi katha, biryani, borhani and all the familiar aromas. But honestly, every country brought something special. Chinese dumplings, Sudanese falafel, Algerian shakshuka, Palestinian maqluba, Malaysian laksa and so much more filled the day with color and flavor.</p>
  
  <p>This was also my first international event as ISS UTMKL Vice President, which made the experience even more meaningful. Watching students connect, laugh, cook, dance, and learn from each other reminded me why culture matters. It brings people closer even when we come from very different worlds.</p>
  
  <p>Having the First Secretary of the Bangladesh High Commission, Pranab Kumar Ghosh, with us added to the honor of the day.</p>
  
  <p>A beautiful celebration of diversity, friendship and shared heritage. Feeling grateful.</p>
  
  <p>#UTMKL #InternationalCulturalDay #StudentLife #CulturalDiversity #GlobalCommunity #Bangladesh #Malaysia #CampusLife #ISSUTMKL #LeadershipJourney</p>

    `
  },

  'UTMKL-IEM-AWCS-Visit': {
    slug: 'UTMKL-IEM-AWCS-Visit',
    title: 'UTMKL Visit to IEM - AWCS Session',
    date: '6 December 2025',
    image: new URL('../assets/UTMKL-IEM-AWCS-Visit.jpg', import.meta.url).href,
    content: `
  <p>Spent 6 December 2025 with a group of enthusiastic UTMKL students at The Institution of Engineers Malaysia, and it turned out to be a very rewarding visit. We attended a session on the importance of Automated Waste Collection Systems led by UTM alumnus Ir. Chea Thean Teik, and we also had the chance to meet several accomplished UTM alumni from the '90s who are now holding significant positions.</p>
  
  <p>After the session, we visited one of the projects developed by STREAN and observed how the Automated Waste Collection System operates in both industrial and residential environments. It was an eye opening experience that gave us a much clearer understanding of how modern waste management is evolving.</p>
  
  <p>A meaningful day, valuable insights, and a visit truly worth remembering.</p>
  
  <p>#UTMKL #IEM #AWCS #EngineeringEducation #SustainableTech #FutureEngineers #STREAN #WasteManagement #InnovationInMalaysia #UTMAlumni</p>

    `
  },

  'abdullahalnahid-ISSUTMKL-VP': {
    slug: 'abdullahalnahid-ISSUTMKL-VP',
    title: 'Media Recognition - ISS UTMKL VP Election',
    date: '30 November 2025',
    image: new URL('../assets/abdullahalnahid-ISSUTMKL-VP.png', import.meta.url).href,
    content: `
  <p>Following my election as VP of the International Student Society (ISS UTMKL), the response from the media has been overwhelming. I am profoundly grateful for the thoughtful coverage provided by over 15 national and international outlets, including leading voices such as NTV, Somoy News, and Jugantor.</p>
  <p>Journalism plays a vital role in amplifying student voices and giving visibility to international leadership. The attention generated by this coverage has significantly reinforced my platform, empowering me to advocate even more confidently for the needs of our diverse student body.</p>
  <p>Thank you to every reporter and editor who dedicated time and professionalism to share this story. Your work is a testament to the importance of promoting positive youth leadership and cross-cultural dialogue.</p>
  <p>I will continue to bring the policy-driven focus of the ISAP panel, backed by this incredible visibility, into action.</p>
  <h3>Reference:</h3>
  <ol>
    <li><a href="https://ntvbd.com/education/news-1653801" target="_blank">ntvbd.com/education/news-1653801</a></li>
    <li><a href="https://www.somoynews.tv/news/2025-11-24/Lu027AZW" target="_blank">https://www.somoynews.tv/news/2025-11-24/Lu027AZW</a></li>
    <li><a href="https://www.jagonews24.com/m/probash/article/1070765?fbclid=IwZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPNDM3NjI2MzE2OTczNzg4AAEeCHk7bSW4MC86iWkaVP2AWoFD4Nz3ztcd3iFD5l9Udnws3DUaUHrThxeH92o_aem_DEBknVO2TmL8xt__dGkbwQ" target="_blank">https://www.jagonews24.com/m/probash/article/1070765</a></li>
    <li><a href="https://www.jugantor.com/campus/1033165?fbclid=IwZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPNDM3NjI2MzE2OTczNzg4AAEe0HHIlNsSoVBeI7Ql6kVsjQB4L7wRz0C9N5tNffffGtkr8TNWYWVcH9vuWQQ_aem_vcDFVapG_IpdUJIuuJc6MA" target="_blank">https://www.jugantor.com/campus/1033165</a></li>
    <li><a href="https://barta24.com/details/immigrant/301858" target="_blank">https://barta24.com/details/immigrant/301858</a></li>
    <li><a href="https://www.bahannonews.com/details/article/10182181/ইউটিএমকেএলের-ইন্টারন্যাশনাল-ষ্টুডেন্ট-সোসাইটির-ভিপি-নির্বাচিত-বাংলাদেশি-নাহিদ/" target="_blank">https://www.bahannonews.com/details/article/10182181</a></li>
    <li><a href="https://www.probashirkotha.com/2025/11/25/%e0%a6%ae%e0%a6%be%e0%a6%b2%e0%a6%af%e0%a6%bc%e0%a7%87%e0%a6%b6%e0%a6%bf%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%b0-%e0%a6%b6%e0%a7%80%e0%a6%b0%e0%a7%8d%e0%a6%b7-%e0%a6%ac%e0%a6%bf%e0%a6%b6%e0%a7%8d%e0%a6%ac/" target="_blank">https://www.probashirkotha.com/2025/11/25/মালয়েশিয়ার-শীর্ষ-বিশ্ব/</a></li>
    <li><a href="https://www.dailybhoreralo.com/Education-news/4058" target="_blank">https://www.dailybhoreralo.com/Education-news/4058</a></li>
    <li><a href="https://probashtime.net/asia/malaysia/135284/" target="_blank">https://probashtime.net/asia/malaysia/135284/</a></li>
  </ol>
  <p>#ThankYou #Journalism #MediaRecognition #UTMKL #StudentLeadership #Bangladesh #InternationalAffairs</p>

    `
  },

  'miul-2025': {
    slug: 'miul-2025',
    title: 'MIUL 2025: Driving Internationalisation in Higher Education',
    date: '15–17 October 2025',
    image: new URL('../assets/miul.jpg', import.meta.url).href,
    content: `
      <p>
  From <strong>15th to 17th October</strong>, <strong>UTM Kuala Lumpur</strong> proudly
  hosted the <strong>Management of Internationalisation for University Leaders
  (MIUL 2025)</strong>, a premier programme endorsed by the
  <strong>Ministry of Higher Education Malaysia (MoHE)</strong>.
</p>

<p>
  Jointly organised by <strong>UTM International</strong> and <strong>JPT</strong>, the
  three-day event brought together <strong>senior university leaders</strong> from
  Malaysia and across <strong>ASEAN</strong> to explore leadership, strategic
  partnerships, and sustainable collaboration in higher education.
</p>

<p>
  Behind the scenes, the success of <strong>MIUL 2025</strong> was powered by the
  dedication and teamwork of <strong>UTM International Kuala Lumpur</strong> and
  <strong>ISS UTMKL</strong>. Their professionalism and unity truly embodied the
  <strong>UTM spirit of Integrity, Synergy, Excellence, and Sustainability (ISES)</strong>.
</p>

<p>
  Sincere gratitude to everyone whose hard work, commitment, and collaboration made
  this important milestone a reality.
</p>

<p>
  #MIUL2025 #UTMInternational #UTMKL #MoHEMalaysia #GlobalUTM #TeamUTM<br>
  #Internationalisation #HigherEducationLeadership #ISES
</p>

    `
  },

  'parlimen-visit-2025': {
    slug: 'parlimen-visit-2025',
    title: 'Exploring Malaysian Politics: A Visit to Parliament',
    date: '14 October 2025',
    image: new URL('../assets/parliament.jpg', import.meta.url).href,
    content: `
      <p>
  Had an incredible experience visiting the <strong>Parliament of Malaysia</strong>
  with the <strong>Monash Political Awareness Club</strong>. From witnessing live
  parliamentary debates to engaging in thoughtful conversations and even enjoying
  a pleasant lunch inside the Parliament building every moment felt meaningful and
  inspiring.
</p>

<p>
  The highlight was a <strong>closed-door session</strong> that offered genuine insights
  into <strong>politics, leadership, and purpose</strong> a powerful reminder of why
  staying curious and grounded truly matters.
</p>

<p>
  Truly grateful to everyone who made the visit smooth, insightful, and memorable.
</p>

<p>
  #ParlimenMalaysia #DewanRakyat #Parlimen #Peace
</p>

    `
  },

  'ifuture-summit-2025': {
    slug: 'ifuture-summit-2025',
    title: 'iFuture Summit 2025: Empowering Young Leaders',
    date: '11–13 October 2025',
    image: new URL('../assets/ifuture.jpg', import.meta.url).href,
    content: `
     <p>
  From <strong>11th to 13th October</strong>, I joined hundreds of young leaders from
  public universities across Malaysia and abroad at the
  <strong>iFuture Summit 2025</strong>, themed
  <strong>“Empowering Young Leaders for a Digital Future.”</strong>
</p>

<p>
  It was an inspiring three-day journey filled with ideas, vision, and purpose. From
  the <strong>Ministerial Forum</strong> featuring
  <strong>YB Datuk Fahmi Fadzil</strong> and
  <strong>Gobind Singh Deo</strong>, moderated by
  <strong>Tan Sri Azman Mokhtar</strong>, to the
  <strong>Youth Roundtable</strong>, exhibitions, and
  <strong>iFuture Talk Series</strong>, every session was a step toward shaping a better
  tomorrow.
</p>

<p>
  Beyond the discussions, the real highlight was the <strong>unity among future
  changemakers</strong> committed to leading with values, courage, and digital
  readiness.
</p>

<p>
  Grateful to represent <strong>UTM Kuala Lumpur</strong> and connect with brilliant
  minds who are shaping the future.
</p>

<p>
  #iFuture2025 #FutureLeaders #UTMKL #KPT #YouthEmpowerment<br>
  #DigitalFuture #Leadership #Malaysia
</p>

    `
  },

  'bowlers-bonanza-2025': {
    slug: 'bowlers-bonanza-2025',
    title: 'Dare Devils Strike Victory at Bowlers Bonanza 2025',
    date: '11 August 2025',
    image: new URL('../assets/bowling.jpg', import.meta.url).href,
    content: `
      <p>
  <strong>🏆 Dare Devils Take the Win at Bowlers Bonanza 2025 🎳</strong>
</p>

<p>
  Today, our team, <strong>Dare Devils</strong>, led by the incredible
  <strong>Sadaquat Ruk</strong>, proudly brought home <strong>1st place</strong> in the
  group category at <strong>Bowlers Bonanza 2025</strong>.
</p>

<p>
  We were honoured to have <strong>YBrs. Dr. Mohamed Azlan Suhot</strong>, Principal of
  <strong>Kolej Siswa Jaya, UTM Kuala Lumpur</strong>, with us at the event to deliver the
  opening speech, setting the tone for an inspiring day of competition.
</p>

<p>
  This wasn’t just about strikes and spares. It was about <strong>teamwork, trust, and
  pushing each other to be our best</strong>. Every frame reminded us that when
  leadership inspires and every member gives their all, success is inevitable.
</p>

<p>
  Proud of the spirit, sportsmanship, and unity we showed on the lanes. Here’s to more
  wins, more challenges, and more moments where we grow together as a team.
</p>

<p>
  #DareDevils #LeadershipInAction #TeamworkMakesTheDreamWork #BowlersBonanza2025<br>
  #StrikingSuccess #JKMPLK #HEPAUTMKL #UTMKL
</p>

    `
  },


  'art-asean-2025': {
    slug: 'art-asean-2025',
    title: 'ART@ASEAN’25: A Milestone for Educational Diplomacy',
    date: '03 July 2025',
    image: new URL('../assets/asean.jpg', import.meta.url).href,
    content: `
      <p>
  <strong>A milestone for ASEAN and a proud moment for Universiti Teknologi Malaysia (UTM) 🌏📚</strong>
</p>

<p>
  On <strong>3 July 2025</strong>, Universiti Teknologi Malaysia proudly hosted the
  <strong>Ambassadors' Roundtable for ASEAN 2025 (ART@ASEAN’25)</strong>, a meaningful
  gathering that brought together <strong>30 ambassadors, global leaders, and the
  Minister of Higher Education Malaysia</strong>, united by a shared vision of
  strengthening <strong>ASEAN-EU cooperation through education</strong>.
</p>

<p>
  ✨ <strong>Key highlights of the event included:</strong>
</p>

<p>
  • The official launch of the <strong>Erasmus+ Malaysia Hub</strong>, proudly based at
  <strong>Universiti Teknologi Malaysia (UTM)</strong><br>
  • An inspiring keynote titled <strong>“Bridging Nations, Connecting Regions”</strong><br>
  • A bold and timely call for <strong>mind mobility</strong> encouraging ideas,
  empathy, and knowledge to cross borders through collaboration
</p>

<p>
  We are especially proud that <strong>ISS UTMKL</strong> played a key role in the
  organisation and engagement of this landmark event, contributing to
  <strong>planning, coordination, and the welcoming of international delegates</strong>.
</p>

<p>
  A heartfelt thank you to everyone involved from the dedicated team behind the
  scenes to the leaders shaping tomorrow’s global partnerships. May this gathering
  spark many more meaningful collaborations in the years ahead.
</p>

<p>
  #ASEAN2025 #EducationalDiplomacy #ARTatASEAN25 #UTM #ErasmusPlus #ErasmusScholarship<br>
  #UnityThroughEducation #ISSUTMKL #RancakkanMADANI #MADANIbekerja #MalaysiaMADANI
</p>

      <ul>
        <li><strong>Launch of the Erasmus+ Malaysia Hub</strong>, hosted by <strong>UTM</strong></li>
        <li>Keynote on <strong>“Bridging Nations, Connecting Regions”</strong></li>
        <li>Renewed commitment to <strong>mind mobility</strong></li>
      </ul>
      <p>A proud moment for ISS UTMKL and UTM at the heart of global initiatives.</p>
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
