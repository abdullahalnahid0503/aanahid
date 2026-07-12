import type { BlogPost } from "../types"

const post: BlogPost = {
  slug: "improving-campus-transportation-2026",
  title: "Working Towards Better Transportation at UTM Kuala Lumpur",
  date: "2 May 2026",
  image: new URL(
    "../../../assets/isstransportation.jpg",
    import.meta.url
  ).href,
  content: `
    <p>
      International Labour Day is a reminder that meaningful progress often begins with
      people who are willing to work together for a better future. It felt like the
      right moment to reflect on one of the biggest everyday challenges faced by
      students at <strong>UTM Kuala Lumpur</strong>, which is transportation.
    </p>

    <p>
      For nearly <strong>three years</strong>, I have been working with different
      stakeholders to explore ways of improving mobility for students. While progress
      has sometimes been slower than expected, every discussion, meeting, and small step
      has contributed to moving this initiative forward.
    </p>

    <p>
      Together with a dedicated team of international students, we recently explored
      practical solutions to strengthen connectivity between the campus, nearby
      <strong>LRT and MRT stations</strong>, and surrounding residential areas. As part
      of this effort, we conducted a survey involving more than
      <strong>200 students</strong>, coordinated with the
      <strong>UTM International Office</strong> and <strong>UTM Fleet</strong>, and
      began working on route planning, budgeting, and proposal development.
    </p>

    <p>
      Although there is still a long journey ahead, this marks an encouraging milestone.
      I sincerely hope that, with continued collaboration and support, this initiative
      will create a more convenient and accessible campus experience for both
      international and local students in the years to come.
    </p>

    <p>
      #UTMKL #InternationalStudents #Transportation #StudentLeadership
      #CampusLife #ISSUTMKL #CommunityImpact
    </p>
  `
}

export default post