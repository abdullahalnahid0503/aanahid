<template>
  <section class="relative z-10 min-h-screen
                flex flex-col items-center
                pt-20 sm:pt-24
                px-4 sm:px-0
                text-white">
    <div class="max-w-4xl mx-auto space-y-8 pb-20 sm:pb-24">

<!-- Floating Download CV Button -->
<div class="flex justify-center sm:justify-end mb-10">
  <button @click="confirmDownload" class="group relative w-44 h-11 flex items-center justify-center rounded-full font-medium overflow-hidden bg-white text-black text-sm transition-all duration-300" > <span class="relative z-10">Download CV</span> <!-- Glow --> <span class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" ></span> <!-- Hover Scale --> <span class="absolute inset-0 rounded-full scale-95 group-hover:scale-105 transition-transform duration-300" ></span> </button>
</div>



      <!-- Header -->
      <div class="text-center">
        <h1 class="text-4xl font-bold">Abdullah Al Nahid</h1>
        <p class="inline-flex flex-wrap justify-center items-center gap-2
           text-zinc-400 text-xs mt-2 mx-auto">
  <span>
  <strong>Email:</strong>
  <a href="mailto:al20@graduate.utm.my" class="no-underline hover:text-white">
    al20@graduate.utm.my
  </a>
</span>

<span class="hidden sm:inline">|</span>

<span>
  <strong>Portfolio:</strong>
  <a href="https://www.abdullahalnahid.com" target="_blank" class="no-underline hover:text-white">
    www.abdullahalnahid.com
  </a>
</span>

<span class="hidden sm:inline">|</span>

<span>
  <strong>LinkedIn:</strong>
  <a href="https://www.linkedin.com/in/abdullahalnahid0503/" target="_blank" class="no-underline hover:text-white">
    Abdullah Al Nahid
  </a>
</span>

</p>

      </div>

      <hr class="border-zinc-800" />

      <!-- Education -->
      <section class="space-y-3">
        <h2 class="text-xl font-semibold mb-4">Education</h2>

        <div class="space-y-6 text-zinc-300">
          <div>
            <p class="font-medium text-zinc-400 text-sm text-left sm:text-right">
              March 2023 - Expected March 2027
            </p>
            <p class="font-medium">
              <b>Bachelor of Computer Science (Software Engineering), with Honours</b>
            </p>
            <p class="text-zinc-400 text-sm">
              Universiti Teknologi Malaysia, Kuala Lumpur (UTMKL)
            </p>
            <ul class="list-disc list-inside text-sm mt-2 space-y-1">
              <li>Built and deployed full-stack web applications using Vue.js, PHP Slim, and MySQL</li>
              <li>Completed coursework in Software Architecture, Web Technologies, DBMS, Cybersecurity, etc.</li>
            </ul>
          </div>

          <div>
            <p class="font-medium">
              <b>HSC - Narsingdi Model College, Narsingdi, Bangladesh</b>
            </p>
            <p class="text-zinc-400 text-sm">
              <ul class="list-disc list-inside text-sm mt-2 space-y-1">
              <li>Led the Rover Scout Unit of the college and held the second position in the district</li>
            </ul>
            </p>
          </div>

          <div>
            <p class="font-medium">
              <b>SSC - Brahmandi KKM Government High School, Narsingdi, Bangladesh</b>
            </p>
            <p class="text-zinc-400 text-sm">
              <ul class="list-disc list-inside text-sm mt-2 space-y-1">
                <li>Attended the national science fest and won 2 times</li>
              </ul>
            </p>
          </div>
        </div>
      </section>

      <!-- Professional Experience -->
      <section class="space-y-3">
        <h2 class="text-xl font-semibold mb-4">Professional Experience</h2>

        <div class="space-y-6 text-zinc-300">
          <div>
            <p class="font-medium text-zinc-400 text-sm text-left sm:text-right">
              May 2025 - Present
            </p>
            <p class="font-medium">
              <b>The Lab Thirteen</b> - Founder & Full-Stack Developer
            </p>
            <ul class="list-disc list-inside text-sm mt-2 space-y-1">
              <li>Developed ‘EduTrack’, a JWT-secured educational platform used by students and staff</li>
              <li>Built backend APIs with Slim 4 PHP, frontend using Vue.js Vite, and integrated MySQL</li>
              <li>Designed database schema and implemented authentication, CORS policies, and routing</li>
              <li>Delivered full project independently under extreme time constraints with proper documentation</li>
            </ul>
          </div>

          <div>
            <p class="font-medium text-zinc-400 text-sm text-left sm:text-right">
              Dec 2023 - Present
            </p>
            <p class="font-medium">
              <b>ISS UTMKL</b> - Vice President, International Student Society
            </p>
            <ul class="list-disc list-inside text-sm mt-2 space-y-1">
              <li>Represented 1,200+ international students from 83 nationalities; built key university partnerships</li>
              <li>Led student engagement for ASEAN 2025 roundtable attended by 30+ ambassadors</li>
              <li>
                Initiated cultural unity efforts by forming Bangladeshi, Pakistani, Indian, Indonesian,
                Sudanese, Iraqi, Arab, and Chinese chapters within ISS
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Skills -->
      <section class="space-y-3">
  <h2 class="text-xl font-semibold mb-4">Skills</h2>

  <ul class="list-disc list-inside space-y-4 text-zinc-300 text-sm leading-relaxed">
    <li>
      <strong>Software Engineering & Backend Development:</strong>
      RESTful API Design, MVC Architecture, Secure Authentication (JWT),
      Database Design, CRUD Operations, System Integration, Debugging & Troubleshooting
    </li>

    <li>
      <strong>Frontend & Full-Stack Development:</strong>
      Vue.js, PHP (Slim Framework), MySQL, HTML5, CSS3, JavaScript, Vite
    </li>

    <li>
      <strong>Development Tools & Workflow:</strong>
      Git (Version Control), Postman (API Testing), Browser DevTools,
      XAMPP, Figma (Dev-Design Collaboration)
    </li>

    <li>
      <strong>Engineering Design & Problem Solving:</strong>
      Requirements Analysis, Feature Prioritization, User-Centric Design,
      Rapid Prototyping, Logical & Analytical Thinking
    </li>

    <li>
      <strong>Professional & Team Skills:</strong>
      Technical Documentation, Clear Communication, Cross-Functional Collaboration,
      Deadline-Driven Execution, Learning Agility
    </li>
  </ul>
</section>

<!-- Leadership and Volunteering -->
<section class="space-y-3">
  <h2 class="text-xl font-semibold mb-4">Leadership and Volunteering</h2>

  <div class="space-y-6 text-zinc-300">

    <div>
        <p class="font-medium text-zinc-400 text-sm text-left sm:text-right">
              Nov 2025 - Present
            </p>
      <p class="font-medium">
        The Institution of Engineers Malaysia, UTMKL Chapter (IEM UTMKL) - Vice Chairman
      </p>
      <ul class="list-disc list-inside text-sm mt-2 space-y-1">
        <li>Organized and facilitated a field visit to study the Automated Waste Collection System (AWCS)</li>
        <li>Developed plans for a prospective one-day WordPress campus connect collaboration</li>
      </ul>
    </div>

    <div>
        <p class="font-medium text-zinc-400 text-sm text-left sm:text-right">
              Dec 2025 - Present
            </p>
      <p class="font-medium">
        Connecting Bangladesh Abroad-CBA - Secretary of Public Safety and Awareness
      </p>
      <ul class="list-disc list-inside text-sm mt-2 space-y-1">
        <li>Promote immigrant awareness and civic engagement within the Bangladeshi diaspora in Canada</li>
        <li>Conduct webinars to strengthen political literacy in rural Bangladesh</li>
      </ul>
    </div>

    <div>
        <p class="font-medium text-zinc-400 text-sm text-left sm:text-right">
              Jan 2022 - Dec 2022
            </p>
      <p class="font-medium">
        AIESEC Malaysia - Social Media Secretary
      </p>
      
      <ul class="list-disc list-inside text-sm mt-2 space-y-1">
        <li>Managed digital branding and content strategy across AIESEC's platforms</li>
        <li>Collaborated with international teams to promote global volunteer programs</li>
      </ul>
    </div>

    <div>
        <p class="font-medium text-zinc-400 text-sm text-left sm:text-right">
              Oct 2019 - Jan 2025
            </p>
      <p class="font-medium">
        Smile - Secret of Your Happiness - Volunteer & Media and Publication Secretary
      </p>
      <ul class="list-disc list-inside text-sm mt-2 space-y-1">
        <li>Participated in student wellness campaigns and academic support circles</li>
        <li>Worked with local government during the COVID-19 pandemic to disinfect public areas</li>
      </ul>
    </div>

    <div>
        <p class="font-medium text-zinc-400 text-sm text-left sm:text-right">
              Nov 2019 - Feb 2023
            </p>
      <p class="font-medium">
        UNICEF & UNESCO - Volunteer
      </p>
    
      <ul class="list-disc list-inside text-sm mt-2 space-y-1">
        <li>Conducted climate change workshops and tree-planting campaigns in Malaysia and Bangladesh</li>
        <li>Advocated for SDGs 13 and 17 through student-led community engagement</li>
      </ul>
    </div>

  </div>
</section>

      <!-- Projects -->
      <section class="space-y-3">
        <h2 class="text-xl font-semibold mb-4">Projects</h2>
        <ul class="list-disc list-inside text-zinc-300 text-sm space-y-1">
          <li>
            <strong>Narsingdi Global Network</strong> - A secure community platform connecting the global
            Narsingdi diaspora through networking, mentorship, and cultural preservation tools.
          </li>
          <li>
            <strong>UTMKL Visa & Student Pass Renewal Portal</strong> - A production-ready web system that
            streamlines international student visa and pass renewal with AI-assisted document validation.
          </li>
          <li>
            <strong>EventPro</strong> - A modern event management system for creating events,
            issuing tickets, and tracking attendees in real time.
          </li>
          <li>
            <strong>Carevia</strong> - A career-focused portfolio platform that lets professionals
            showcase data-backed projects, analytics, and ATS-ready resumes.
          </li>
        </ul>
      </section>

      <!-- Languages -->
<section class="space-y-3">
  <h2 class="text-xl font-semibold mb-4">Languages</h2>

  <div class="relative grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 text-left">

    <!-- Divider (PC only) -->
    <div class="hidden md:block absolute left-1/2 top-0 h-full w-px bg-zinc-800"></div>

    <!-- Left Column -->
    <ul class="space-y-1 md:pr-4">
      <li>• Bengali - Native</li>
      <li>• English - Full Professional Proficiency</li>
      <li>• Hindi - Professional Working Proficiency</li>
      <li>• Urdu - Professional Working Proficiency</li>
    </ul>

    <!-- Right Column -->
    <ul class="space-y-1 md:pl-4">
      <li>• Bahasa Melayu - Intermediate</li>
      <li>• Bahasa Indonesia - Intermediate</li>
      <li>• Nepali - Intermediate</li>
      <li>• German - Basic</li>
    </ul>

  </div>
</section>

      <!-- Certifications -->
<section class="space-y-3">
  <h2 class="text-xl font-semibold mb-4">Certifications</h2>

  <div class="relative grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 text-left">

    <!-- Divider (PC only) -->
    <div class="hidden md:block absolute left-1/2 top-0 h-full w-px bg-zinc-800"></div>

    <!-- Left Column -->
    <ul class="space-y-1 md:pr-4">
      <li>• OCI AI Foundations Associate - Oracle</li>
      <li>• Artificial Intelligence Fundamentals - IBM</li>
      <li>• Generative AI for Business Leaders - LinkedIn</li>
      <li>• Google Admin Console Fundamentals - Google</li>
    </ul>

    <!-- Right Column -->
    <ul class="space-y-1 md:pl-4">
      <li>• Cybersecurity Fundamentals - Cisco</li>
      <li>• Cybersecurity Awareness - Udemy</li>
      <li>• Generative AI for Ethics - LinkedIn</li>
      <li>• ChromeOS Administration for Education - Google</li>
    </ul>

  </div>
</section>

    </div>
  </section>
</template>

<script setup>
const confirmDownload = () => {
  const ok = window.confirm("Do you want to download Abdullah Al Nahid's CV?");
  if (ok) {
    const link = document.createElement("a");
    link.href = "/Abdullah_Al_Nahid_CV.pdf";
    link.download = "Abdullah_Al_Nahid_CV.pdf";
    link.click();
  }
};
</script>