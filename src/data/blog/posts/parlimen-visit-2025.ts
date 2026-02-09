import type { BlogPost } from "../types"

const post: BlogPost = {
  slug: "parlimen-visit-2025",
  title: "Exploring Malaysian Politics: A Visit to Parliament",
  date: "14 October 2025",
  image: new URL(
    "../../../assets/parliament.jpg",
    import.meta.url
  ).href,
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
}

export default post