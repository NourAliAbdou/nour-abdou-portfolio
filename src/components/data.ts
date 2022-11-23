import React from "react";

export const sliderSettings = {
  dots: true,
  infinite: false,

  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  autoplaySpeed: 1500,
  arrows: true,

  responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export const techSliderSettings = {
  dots: true,
  infinite: false,
  // centerMode: true,
  slidesToShow: 8,
  slidesToScroll: 8,
  autoplay: false,
  autoplaySpeed: 1500,
  arrows: true,
  rows: 5,
  // slidesPerRow: 4,
  responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
      },
    },
  ],
};
export const mainSocials = [
  {
    icon: "linkedin-alt",
    link: "https://www.linkedin.com/in/nour_abdou/",
  },
  {
    icon: "whatsapp",
    link: "https://wa.me/message/P4Z4QEQSEZIDD1",
  },
  {
    icon: "github-alt",
    link: "https://github.com/NourAliAbdou/",
  },

  {
    icon: "fab fa-dev",
    link: "https://dev.to/nour_abdou",
  },
  {
    icon: "facebook-f",
    link: "http://facebook.com/nour.a.3bdou",
  },
  {
    icon: "cloud",
    link: "https://soundcloud.com/nour_abdou",
  },
  {
    icon: "youtube",
    link: "https://www.youtube.com/channel/UCLD3USwyn4VfhYt2KQ4IXLQ",
  },
];
export const socials = [
  {
    icon: "linkedin-alt",
    link: "https://www.linkedin.com/in/nour_abdou/",
  },
  {
    icon: "whatsapp",
    link: "https://wa.me/message/P4Z4QEQSEZIDD1",
  },
  {
    icon: "github-alt",
    link: "https://github.com/NourAliAbdou/",
  },
  {
    icon: "gitlab",
    link: "https://gitlab.com/nour.ali.abdou",
  },
  {
    icon: "envelope-info",
    link: "mailto:nour.ali.abdou@gmail.com",
  },
  {
    icon: "fab fa-dev",
    link: "https://dev.to/nour_abdou",
  },
  {
    icon: "facebook-f",
    link: "http://facebook.com/nour.a.3bdou",
  },
  {
    icon: "cloud",
    link: "https://soundcloud.com/nour_abdou",
  },
  {
    icon: "youtube",
    link: "https://www.youtube.com/channel/UCLD3USwyn4VfhYt2KQ4IXLQ",
  },
];

export const works = [
  {
    id: 1,
    title: "React Native Developer",
    period: "Jan 2020 - Present",
    company: "Freelance",
    jobType: ["Part time", "Project-based"],
    location: "remotely",
    description: [
      "Maintaining existing apps.",
      "Push notifications.",
      "Multi-languages (LTR & RTL).",
      "Light/Dark mode.",
      "Animation | Pagination.",
      "Publishing on Google Play & App Store.",
      "GraphQl client",
    ],
  },
  {
    id: 2,
    title: "React Native Developer",
    period: "Jan 2019 - Present",
    company: "SourceCodeAi",
    companyWebsite: "http://sourcecode-ai.com",
    jobType: ["Full time", "Part time"],
    location: "remotely",
    description: [
      // "My first application ever is Emmatel.",
      "Push notifications | Chat.",
      "Multi-languages (LTR & RTL).",
      "Analyze requirement",
      "Offline app (Realm db)",
      "Light/Dark mode",
      "Convert html to pdf.",
      "View PDF file inside the App.",
      "Collaborate dwith designers on UI/UX design decisions.",
      "Animation | Pagination",
      "Map features(tracking)",
      "Maintaining & developing existing apps.",
      "Publishing on Google Play & App Store.",
    ],
  },
  {
    id: 3,
    title: "React Native Developer",
    period: "Feb - Oct 2022",
    company: "Jedo",
    companyWebsite: "http://jedo.app",
    jobType: ["Part time"],
    location: "remotely",
    description: [
      "Integrate online payment gateway",
      "Assists in mentoring junior Developer ",
      "Push notifications | Chat",
      "Animation | Pagination",
      "Map features (clustering)",
      "Publishing on Google Play & App Store.",
    ],
  },
];

export const volunteering = [
  {
    title: "Lead Organizer- Ada Lovelace 2021 Hackathon",
    period: "Sep 2021 - Oct 2021 · 2 mos",
    company: "Teens in AI ",
    companyWebsite: "https://www.teensinai.com",
    location: "Salamiyah, Syria",
    jobType: "Seasonal",
    description: [
      "Planed and run the hackathon which lasting 7 days was in hybrid.",
      "Gathered a team of 5 organisers to support me running the event.",
      "Recruited teens who could benefit from the program from government or community schools.",
      "Recruited mentors and speakers to inspire the cohort of teens.",
      "Create hackathon agenda to teach teens about design thinking, tech, business development and ethical AI.",
      "Found Sponsers to support running the event financially.",
    ],
  },
  {
    title: "Mentor- Teens in AI Accelerator",
    period: "Jul - Aug 2021 · 2 mos",
    company: "Teens in AI ",
    companyWebsite: "https://www.teensinai.com",

    location: "Remotely",
    jobType: "Seasonal",
    description: [
      "This Accelerator focused on empowering young people aged 12-18 to tackle UN Sustainable Development Goals using tech and AI.",
      "Mentored teenagers with programming skills (Research, AI Ethics, Python, ML, Mobile Development and Software development",
      "Inspired and motivated teenagers.",
      "The team I mentored earned the second place prize; there project was focusing on helping hearing impaired and deaf people understand onversations and deciphersounds around them.",

      // "the team I mentored "
    ],
  },
  {
    title: "Member",
    period: "Jun 2018 - 2021 · 2 yrs 8 mos",
    company: "Syrian Researchers",
    companyWebsite: "https://www.syr-res.com/user/1413.html",
    location: "Remotely",
    description: [
      "Collaborating with 7 teams.",
      "+250 published Content.",
      "+4 times being on the top active members board.",
      "Content Creator, Create scientific and academic contents in Arabic.",
      "Translator; Translate local and international scientific researches into Arabic",
      "Intreviews for local technical events.",
      "Scientific reviewer",
      "Proofreader",
      "Editor on the website & Facebook page.",
    ],
  },
  {
    title: "Memeber and Coordinator",
    period: "May 2018 - 2021 · 2 yrs 9 mos",
    company: "The Aliens - الفضائيون",
    companyWebsite: "https://www.aliens-sci.com/author/nour-a-abdo/",
    location: "Remotely",
    description: [
      "Collaborating with all teams.",
      "Increased the quality and quantity of the contents of the computer science section.",
      "Content Creator",
      "Create scientific and academic contents, and articles as 'educational chains', in Arabic.",
      "Translator; Translate international scientific researches and articles into Arabic.",
      "Scientific reviewer",
      "Proofreader",
      "Editor on the website & Facebook page.",
      "Coordinator",
      "Self-motivated member",
    ],
  },

  {
    title: "Mentor- GirlsinAI 2021 Hackathon",
    period: "Mar 2021 · 1 mos",
    company: "Teens in AI ",
    companyWebsite: "https://www.teensinai.com",
    location: "Remotely",
    jobType: "Seasonal",
    description: [
      "This Hackathon focused on empowering young people aged 12-18 to tackle UN Sustainable Development Goals using tech and AI.",
      "Mentored teenagers with programming skills (AI Ethics, Python, ML and Software development",
      "Inspired and motivated teenagers.",
      "The team I mentored qualified for the finals of the hackathon; They focuced with their project on elping childern with Asperger's identify and develope their creative talents in a safe environment.",
      // "the team I mentored "
    ],
  },
];

const fullTech = [
  {
    id: 2,
    title: "Typescript",
    // icon: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",

    icon: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=FFFFFF",
  },
  {
    id: 3,
    title: "Javascript",
    icon: "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
  },
];
const mobileTec = [
  {
    id: 0,
    title: "React Native",
    icon: "https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  },
  {
    id: 11,
    title: "GraphQl",
    icon: "https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white",
  },
  {
    id: 12,
    title: "Firebase",
    icon: "https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black",
  },
  {
    id: 6,
    title: "Android",
    icon: "https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white",
  },
  {
    id: 7,
    title: "iOS",
    icon: "https://img.shields.io/badge/ios-323330?style=for-the-badge&logo=ios&logoColor=ffffff",
  },
  {
    id: 7,
    title: "Stripe",
    icon: "https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=stripe&logoColor=ffffff",
  },
  // {
  //   id: 7,
  //   title: "iOS",
  //   icon: "apple",
  // },
];
const frontTec = [
  {
    id: 1,
    title: "ReactJS",
    icon: "https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  },
  {
    id: 10,
    title: "Tailwind CSS",
    icon: "https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
  },
  {
    id: 5,
    title: "Redux Toolkit",
    icon: "https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white",
  },
  // {
  //   id: 7,
  //   title: "Mac",
  //   icon: "https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=apple&logoColor=white",
  // },
];
const backTec = [
  {
    id: 8,
    title: "NodeJS",
    icon: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
  },
  {
    id: 9,
    title: "Express",
    icon: "https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white",
  },
  {
    id: 7,
    title: "Mongo",
    icon: "https://img.shields.io/badge/MongoDb-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
  },
];
export const technologes = [...fullTech, ...mobileTec, ...frontTec, ...backTec];

export const tools = [
  {
    id: 7,
    title: "Postman",
    icon: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white",
  },
  {
    id: 12,
    title: "Git",
    icon: "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white",
  },
  {
    id: 7,
    title: "Trello",
    icon: "https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white",
  },
  {
    id: 7,
    title: "Slack",
    icon: "https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white",
  },
  {
    id: 7,
    title: "Discorde",
    icon: "https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white",
  },
  {
    id: 7,
    title: "Google Meet",
    icon: "https://img.shields.io/badge/Google%20Meet-00897B?style=for-the-badge&logo=google-meet&logoColor=white",
  },
  {
    id: 7,
    title: "Android studio",
    icon: "https://img.shields.io/badge/Android_Studio-3DDC84?style=for-the-badge&logo=android-studio&logoColor=white",
  },
  {
    id: 7,
    title: "xCode",
    icon: "https://img.shields.io/badge/Xcode-007ACC?style=for-the-badge&logo=Xcode&logoColor=white",
  },
  {
    id: 7,
    title: "svcode",
    icon: "https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white",
  },
  {
    id: 7,
    title: "",
    icon: "",
  },
];

export const availablePositions = [
  {
    type: ["Full Time", "Part Time", "Freelance"],
    position: "Senior React Native Developer",
    desc: "Cross-Platform Mobile Applications",
  },
  {
    type: ["Part Time "],
    position: "Junior React Developer",
    desc: "Web Frontend Applications",
  },
  {
    type: ["Part Time "],
    position: "Junior NodeJS Developer",
    desc: "Backend Applications",
  },
];
export const availableServices = [
  {
    name: "Build mobile applications from scratch",
    icon: "tool",
    desc: "React Native",
  },
  {
    name: "Maintenance",
    icon: "tool",
    desc: "React Native & React & NodeJS",
  },
  {
    name: "Publich on Google Play & App Store",
    icon: "tool",
    desc: "React Native & Flutter",
  },
];
