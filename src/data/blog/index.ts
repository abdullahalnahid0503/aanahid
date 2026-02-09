import issCamp from "./posts/iss-utmkl-management-camp-2025-26"
import mjiitservicelearning from "./posts/mjiit-service-learning-showcase-2026"
import utmklinternationalculturalday from "./posts/utmkl-international-cultural-day-2025"
import iemawcsVisit from "./posts/utmkl-iem-awcs-visit"
import abdullahalnahidissutmklvp from "./posts/abdullahalnahid-issutmkl-vp"
import miul2025 from "./posts/miul-2025"
import parlimenVisit from "./posts/parlimen-visit-2025"
import ifuturesummit2025 from "./posts/ifuture-summit-2025"
import bowlersbonanza2025 from "./posts/bowlers-bonanza-2025"
import artAsean2025 from "./posts/art-asean-2025"

export const blogPosts = [
  issCamp,
  mjiitservicelearning,
  utmklinternationalculturalday,
  iemawcsVisit,
  abdullahalnahidissutmklvp,
  miul2025,
  parlimenVisit,
  ifuturesummit2025,
  bowlersbonanza2025,
  artAsean2025
]

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find(post => post.slug === slug)