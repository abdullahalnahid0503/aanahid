import type { BlogPost } from "../types"

const post: BlogPost = {
  slug: "fyp1",
  title: "Completing FYP1: A Journey of System Development, Learning, and Growth",
  date: "9 July 2026",
  image: new URL(
    "../../../assets/fyp1-completion.jpg",
    import.meta.url
  ).href,
  content: `
    <p>
      After almost <strong>three months</strong> of continuous effort, dedication, and
      countless hours of development, I have successfully completed and submitted my
      <strong>Final Year Project 1 (FYP1)</strong>. With the final presentation completed,
      I officially concluded this important milestone in my undergraduate journey.
    </p>

    <p>
      While many students refer to this stage as <strong>"Thesis Defense"</strong>, my
      project follows a <strong>system development</strong> approach rather than a
      research-based thesis. Therefore, technically, the correct term for my project is
      not thesis defense. However, that does not reduce the challenges and learning
      experiences throughout this journey.
    </p>

    <p>
      Developing the system was only one part of the process. Alongside the technical
      implementation, I had to prepare a complete project report based on the university
      thesis format, conduct documentation, refine multiple sections through several
      revisions, complete Turnitin similarity and AI detection checks, and go through
      evaluations and approvals from my supervisor and lecturer.
    </p>

    <p>
      Looking back, I can only say that <strong>Allah knows how the last three months
      passed</strong>, especially the final month when the pressure increased and every
      detail mattered. It was a challenging period filled with learning, problem
      solving, and personal growth.
    </p>

    <p>
      This project also reminded me that meaningful technology is not only about writing
      code. It is about understanding real problems, designing practical solutions, and
      creating systems that can bring value to people. The discussions, feedback, and
      guidance I received throughout this process helped me refine my ideas and improve
      the direction of the project.
    </p>

    <p>
      I am grateful for this milestone and excited for the next chapter of the journey.
      There is still much more to learn, improve, and build, but completing FYP1 is a
      meaningful step forward.
    </p>

    <p>
      #FinalYearProject #FYP1 #SoftwareEngineering #SystemDevelopment
      #Innovation #StudentLife #TechForGood #UTM
    </p>
  `
}

export default post