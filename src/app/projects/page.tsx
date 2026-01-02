"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Nokia Snake Gesture Game",
    description: `A classic Nokia Snake game controlled by hand gestures via webcam using MediaPipe and OpenCV. Experience the nostalgia of Nokia Snake with modern AI-powered gesture recognition!`,
    link: "https://github.com/zyvrix",
    images: [
      "/assets/projects-screenshots/aidockerfileoptimizer/1.png",
      "/assets/projects-screenshots/aidockerfileoptimizer/2.png",
      "/assets/projects-screenshots/aidockerfileoptimizer/3.png",
    ],
  },
  {
    id: 2,
    name: "Huaren Consultancy",
    description: `A professional consultancy platform I built that focuses on finance, strategy, and IT solutions. It helps businesses streamline operations, ensure compliance, and drive growth through smart digital transformation.`,
    link: "https://huarenconsultancy.in/",
    images: [
      "/assets/projects-screenshots/financeme/1.png",
      "/assets/projects-screenshots/financeme/2.png",
      "/assets/projects-screenshots/financeme/3.png",
    ],
  },
  {
    id: 3,
    name: "Portfolio",
    description: `Welcome to my digital playground, where creativity meets code in the
            dopest way possible.`,
    link: "https://www.dineshydv.vercel.app/",
    images: [
      "/assets/projects-screenshots/myportfolio/landing.png",
      "/assets/projects-screenshots/myportfolio/navbar.png",
      "/assets/projects-screenshots/myportfolio/projects.png",
      "/assets/projects-screenshots/myportfolio/project.png",
    ],
  },
  {
    id: 4,
    name: "Spotify Clone app",
    description: `A Spotify clone app built with Next.js, Tailwind CSS, and the Spotify API. It features user authentication, music playback, and a sleek UI for an immersive music experience.`,
    link: "https://github.com/zyvrix/Spotify-Clone",
    images: [
      "/assets/projects-screenshots/spotifycloneapp/01.jpeg",
      "/assets/projects-screenshots/spotifycloneapp/02.png",
      "/assets/projects-screenshots/spotifycloneapp/03.png",
      "/assets/projects-screenshots/spotifycloneapp/04.png",

    ],
  },

  {
    id: 5,
    name: "Veggie Delight",
    description: `Veggie Delight is a vibrant and user-friendly website dedicated to promoting healthy eating through delicious vegetarian recipes. Built with HTML, CSS, and JavaScript, the site offers a seamless browsing experience across devices.`,
    link: "",
    images: [
      "/assets/projects-screenshots/veggie_delight/01.png",
      "/assets/projects-screenshots/veggie_delight/02.png",
      "/assets/projects-screenshots/veggie_delight/03.png",
      "/assets/projects-screenshots/veggie_delight/04.png",
    ],
  },
  {
    id: 6,
    name: "Live Chat Application",
    description: `A real-time live chat application built with Node.js, Express, and Socket.io. It allows users to join chat rooms and communicate instantly with others.`,
    link: "",
    images: [
      "/assets/projects-screenshots/livechatapp/01.png",
      "/assets/projects-screenshots/livechatapp/02.png",
      "/assets/projects-screenshots/livechatapp/03.png",
      "/assets/projects-screenshots/livechatapp/04.png",
    ],
  }
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
