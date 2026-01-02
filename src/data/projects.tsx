import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [

  { // 01. python project
    id: "nokisnakegesturesgame",
    category: "AI / Computer Vision Project",
    title: "Nokia Snake Gesture Game",
    src: "/assets/projects-screenshots/aidockerfileoptimizer/2.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "https://github.com/zyvrix",
    github:"https://github.com/zyvrix",
    skills: {
      frontend: [PROJECT_SKILLS.python, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.vite],
      backend: [PROJECT_SKILLS.python,PROJECT_SKILLS.netlify],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A classic Nokia Snake game controlled by hand gestures via webcam using MediaPipe and OpenCV. Experience the nostalgia of Nokia Snake with modern AI-powered gesture recognition!
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/aidockerfileoptimizer/1.png`,
              `${BASE_PATH}/aidockerfileoptimizer/2.png`,
              `${BASE_PATH}/aidockerfileoptimizer/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 02. huaren project
    id: "huarenconsultancy",
    category: "Web Development Project",
    title: "Huaren Consultancy",
    src: "/assets/projects-screenshots/financeme/1.png",
    screenshots: ["/assets/projects-screenshots/financeme/1.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.vite,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
      ],
    },
    live: "",
    github: "https://github.com/zyvrix",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A professional consultancy platform I built that focuses on finance, strategy, and IT solutions. It helps businesses streamline operations, ensure compliance, and drive growth through smart digital transformation.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <SlideShow
            images={[
              `${BASE_PATH}/financeme/1.png`,
              `${BASE_PATH}/financeme/2.png`,
              `${BASE_PATH}/financeme/3.png`,
            ]}
          />
          
        </div>
      );
    },
  },
  { // 03. Portfolio project
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/myportfolio/landing.png",
    screenshots: ["assets/projects-screenshots/myportfolio/landing.png"],
    live: "https://dineshydv.vercel.app/",
    github:"https://github.com/zyvrix/3D-interactive-portfolio-main",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/myportfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/myportfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/myportfolio/projects.png`,
              `${BASE_PATH}/myportfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
  { // 04. Spotify Clone
    id: "spotifycloneapp",
    category: "Web Development",
    title: "Spotify Clone App",
    src: "/assets/projects-screenshots/spotifycloneapp/01.jpeg",
    screenshots: ["01.jpeg", "02.png", "03.png", "04.png"],
    live: "https://zyvrix.github.io/Spotify-Clone/",
    github:"https://github.com/Zyvrix/Spotify-Clone",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.bootstrap, PROJECT_SKILLS.js],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            It is a web application that mimics the core functionalities of the popular music streaming service, Spotify. Built with a focus on user experience and responsive design, this clone allows users to browse through a vast library of songs, create playlists, and enjoy seamless music playback. The application features a sleek interface, intuitive navigation, and essential features such as search, play, pause, and skip. Whether you're a music enthusiast or just looking to explore new tunes, this Spotify clone offers an engaging platform to satisfy your musical cravings.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/spotifycloneapp/01.jpeg`,
              `${BASE_PATH}/spotifycloneapp/04.png`,
              `${BASE_PATH}/spotifycloneapp/03.png`,
              `${BASE_PATH}/spotifycloneapp/02.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 05. Upcoming project
    id: "upcoming",
    category: "Full stack",
    title: "Live Chat Application",
    src: "/assets/projects-screenshots/livechatapp/01.png",
    screenshots: ["01.png", "02.png", "03.png","04.png","05.png","06.png","07.png"],
    live: "https://",
    github:"https://github.com/",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.vite],
      backend: [PROJECT_SKILLS.node,PROJECT_SKILLS.express, PROJECT_SKILLS.mongo],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A real-time live chat application built with Node.js, Express, and Socket.io. It allows users to join chat rooms and communicate instantly with others.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/livechatapp/01.png`,
              // `${BASE_PATH}/livechatapp/02.png`,
              // `${BASE_PATH}/livechatapp/03.png`,
              // `${BASE_PATH}/livechatapp/04.png`,
              // `${BASE_PATH}/livechatapp/05.png`,
              // `${BASE_PATH}/livechatapp/06.png`,
              // `${BASE_PATH}/livechatapp/07.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 06.  project
    id: "upcoming1",
    category: "Web Development",
    title: "Veggie Delight Restaurant",
    src: "/assets/projects-screenshots/veggie_delight/01.png",
    screenshots: ["01.png", "02.png", "03.png","04.png"],
    live: "https://zyvrix.github.io/Restaurant-website/index.html",
    github:"https://github.com/Zyvrix/Restaurant-website",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.html, PROJECT_SKILLS.css,],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Veggie Delight is a vibrant restaurant website designed to showcase a variety of delicious vegetarian dishes. With a user-friendly interface, visitors can easily explore the menu, learn about the restaurant's philosophy, and make reservations. The site features mouth-watering images, customer testimonials, and a blog section for sharing recipes and health tips. Built with modern web technologies, Veggie Delight offers a seamless browsing experience across all devices, inviting food lovers to indulge in wholesome vegetarian cuisine.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/veggie_delight/01.png`,
              `${BASE_PATH}/veggie_delight/02.png`,
              `${BASE_PATH}/veggie_delight/03.png`,
              `${BASE_PATH}/veggie_delight/04.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
