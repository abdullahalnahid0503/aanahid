import type { BlogPost } from "../types"

const post: BlogPost = {
  slug: "ifuture-summit-2025",
  title: "iFuture Summit 2025: Empowering Young Leaders",
  date: "11–13 October 2025",
  image: new URL(
    "../../../assets/ifuture.jpg",
    import.meta.url
  ).href,
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
}

export default post