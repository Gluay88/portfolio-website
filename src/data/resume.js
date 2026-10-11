// Resume content used to generate the downloadable PDF (see src/lib/resumePdf.js).
// Edit this file to update the resume; the PDF is rebuilt on every download.
// TODO: the source resume (2023 .docx) had unfinished placeholders, left out here:
//   - the summary's years of experience ("XX years")
//   - the blanks in the Mobomo role description
export const resume = {
  name: "Gluay S. Wang",
  title: "React-TypeScript UI/UX Developer",
  contact: [
    "gluaysmedley@gmail.com",
    "linkedin.com/in/gluay-s-wang",
    "github.com/Gluay88",
    "gluay88.github.io/portfolio-website",
  ],
  summary:
    "Highly skilled and motivated Software Engineer/Developer with experience in software development, User Interface/User Experience, and Graphic Design. Successful track record building intuitive and visually appealing user interfaces. Adaptive team contributor focused on innovation, excellence, and creativity.",
  skills: [
    {
      label: "Languages",
      items: "Ruby, JavaScript, TypeScript, SQL, HTML5, CSS3, SASS/SCSS, JSON",
    },
    {
      label: "Frameworks & Libraries",
      items:
        "Ruby on Rails, React, MongoDB, Storybook, Node, Jest, JQuery, Bootstrap, Express, Redux, Next.js, MUI, TailwindCSS",
    },
    {
      label: "Databases & Testing",
      items: "PostgreSQL, Rspec, TDD, BDD, Django, MongoDB, MySQL",
    },
    {
      label: "Software",
      items:
        "Git, GitHub, pgAdmin, JIRA, yarn, npm, Postman, Wordpress, Shopify, Adobe Illustrator, Adobe After Effects, Adobe PhotoShop, AutoCAD, SketchUP",
    },
  ],
  experience: [
    {
      company: "Mobomo, LLC",
      role: "Software Engineer",
      dates: "6/2023 – Present",
      description:
        "Sourced and onboarded to drive digital transformation initiatives in federal sector contracts, including work for the Department of Homeland Security.",
      bullets: [],
    },
    {
      company: "EAGL Technology, Inc.",
      role: "Software Engineer",
      dates: "6/2022 – 6/2023",
      description:
        "Developed and maintained gunshot and weapon detection software (developed by the Department of Energy) using React, TypeScript, JavaScript, MapboxGL, MUI, WebSockets, SocketIO, Django, Python, GraphQL, MySQL and Middleware. Collaborate with cross-functional teams to design and implement new features and enhancements.",
      bullets: [
        "Conduct code reviews to ensure code quality, maintainability, and scalability",
        "Participate in Agile development methodologies, including daily stand-up meetings, sprint planning, and retrospective meetings",
      ],
    },
    {
      company: "EnCiv",
      role: "Software Engineer Intern",
      dates: "3/2022 – 6/2022",
      description:
        "Develop online tools that enable constructive cross-partisan democratic processes at scale (Ballotpedia partner) using MongoDB, Storybook, and React.",
      bullets: [
        "Created visually appealing and intuitive user interfaces by collaborating effectively with product and design teams",
        "Wrote clean, maintainable, and scalable code while adhering to coding standards and best practices",
      ],
    },
    {
      company: "LEARN Academy",
      role: "Full Stack Web Developer",
      dates: "11/2021 – 4/2022",
      description:
        "Completed an intensive full-stack web development bootcamp, gaining working proficiency in Ruby on Rails, Ruby, React, JavaScript, and TDD (Test Driven Development).",
      bullets: [
        "Assisted in teaching groups of prospective LEARN students focused on JavaScript, HTML, and CSS during Jumpstart Weekend",
      ],
    },
    {
      company: "Multimedia Graphic Network, Inc.",
      role: "Web and Graphic Designer and Animator",
      dates: "3/2018 – 10/2021",
      description:
        "Designed UX/UI for a graphic builder website using JavaScript, HTML, CSS, WordPress, Figma, Adobe Suites and ensuring a seamless user experience.",
      bullets: [
        "Created compelling news imagery for TV Broadcast, Web, and Mobile App platforms worldwide, researching current news trend stories deeply",
      ],
    },
    {
      company: "Bermuda Landscape Architects Co. Ltd.",
      role: "Web and Graphic Designer and Animator",
      dates: "4/2013 – 12/2015",
      description:
        "Designed and constructed hotels, plazas, and residential housing.",
      bullets: [
        "Participated in setting the appropriate laws for architecture and landscape requirements",
      ],
    },
  ],
  education: [
    "Bachelor of Science in Landscape Architecture – Chulalongkorn University, Bangkok, Thailand, 2013",
  ],
  certifications: [
    "Full Stack Development Certification – LEARN Academy, San Diego, CA, 2022",
    "Interaction Design Certification – Santa Monica College, Santa Monica, CA, 2017",
  ],
};
