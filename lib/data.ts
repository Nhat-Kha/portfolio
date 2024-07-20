import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaProjectDiagram } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cloudinaryphoto from "@/public/cloudinary-photo.png";
import jobsearch from "@/public/jobsearch.png";
import jobPortal from "@/public/image.png";
import gemini from "@/public/gemini-clone.png";
import { link } from "fs";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated VTC Academy",
    location: "TP. Hồ Chí Minh, Quận 10, Lê Đại Hành",
    description:
      "I graduated after 3 years of studying. I immediately found a job as a FullStack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Developer",
    location: "TP. Hồ Chí Minh, Quận 10, Lê Đại Hành",
    description:
      "I worked on a team project as a front-end developer for 6 months in 1 job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "10/11/2021 - 27/03/2024",
  },
  {
    title: "Full-Stack Developer",
    location: "TP. Hồ Chí Minh, Quận 10, Lê Đại Hành",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "10/10/2023 - present",
  },
  {
    title: "Completed Capstone Project",
    location: "TP. Hồ Chí Minh, Quận 10, Lê Đại Hành",
    description:
      "I completed my project with the idea of a job search website, featuring a user-friendly interface and easy-to-perform actions.",
    icon: React.createElement(FaProjectDiagram),
    date: "10/10/2023 - 27/04/2024",
  },
] as const;

export const projectsData = [
  {
    title: "Cloudinary-Photo",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: cloudinaryphoto,
    link: "https://cloudinary-photos-three.vercel.app/",
  },
  {
    title: "Job search",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: jobsearch,
    link: "https://jobportal-blush.vercel.app/",
  },
  {
    title: "Job Portal",
    description:
      "Job Portal is a web application that connects job seekers with employers, allowing them to search and apply for jobs and manage their job postings.",
    tags: ["React", "NodeJS", "MongoDB", "Tailwind"],
    imageUrl: jobPortal,
    link: "https://jobportal-blush.vercel.app/",
  },
  {
    title: "Gemini Clone",
    description: "A website about AI chat based on Google's Gemini.",
    tags: ["React"],
    imageUrl: gemini,
    link: "https://gemini-clone-hazel.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Framer Motion",
] as const;
