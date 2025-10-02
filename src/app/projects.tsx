"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

const PROJECTS = [
    {
        img: `${getImagePrefix()}image/optigrade.png`,
        title: "OptiGrade",
        desc: "OptiGrade is a web-based decision support system for fair and transparent employee evaluation using the Analytic Hierarchy Process (AHP). It helps organizations define criteria, rank employees objectively, and automate rewards through structured grading and promotion rules.",
        link: "https://github.com/vrhidayat/spk-app-1.git"
    },
    {
        img: `${getImagePrefix()}image/ASING.jpg`,
        title: "ASING! (Awas Stunting)!",
        desc: "a member of the development of ASING!, a mobile application that leverages machine learning to classify food suitability for pregnant women, providing nutrition analysis and education to help reduce stunting in Indonesia.",
        link: "https://github.com/ASING-Awas-Stunting"
    },
    {
        img: `${getImagePrefix()}image/blog3.svg`,
        title: "e-Investigasi",
        desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
        link: "",
        showlink: false
    },
    {
        img: `${getImagePrefix()}image/blog4.svg`,
        title: "Intelligent HRIS",
        desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
        link: "",
        showlink: false
    },
    {
        img: `${getImagePrefix()}image/blog4.svg`,
        title: "Inventory",
        desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
        link: "",
        showlink: false
    },
    {
        img: `${getImagePrefix()}image/blog4.svg`,
        title: "SiPe-YPK",
        desc: "Developed SiPe-YPK, a desktop-based payment management system for a vocational school, designed with UML to streamline and monitor SPP payment processes developed with Visual Basic.",
        link: "https://github.com/vrhidayat/SiPe-YPK-Rx.git",
    },
    {
        img: `${getImagePrefix()}image/bingocode.jpg`,
        title: "BingoCode",
        desc: "Designed BingoCode, a gamified learning platform for programming languages, designed with UML and IEEE-standard SRS to ensure structured and user-focused development.",
        link: "",
    },
    {
        img: `${getImagePrefix()}image/e-problempei.jpg`,
        title: "E-Problem PEI",
        desc: "Developed E-Problem PEI, an Android application for reporting campus issues at Politeknik Enjinering Indorama, built with an SRS approach to ensure user needs were fully met.",
        link: "",
    },
    {
        img: `${getImagePrefix()}image/workout-tracker.png`,
        title: "Workout Tracker",
        desc: "A simple workout tracker project built with Go (Golang) for the backend and Next.js + Mantine for the frontend. It allows users to pick a date from a calendar, view their workouts for that day, add new workouts (with sets & reps), and delete workouts.",
        link: "https://github.com/vrhidayat/workout-tracker.git",
    },
];

export function Projects() {
    return (
        <section className="py-28 px-8">
            <div className="container mx-auto mb-20 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-4">
                    My Projects
                </Typography>
                {/* <Typography
                    variant="lead"
                    className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
                >
                    Whether you have a mobile app idea that needs to come to life or a
                    website that requires a facelift, I&apos;m here to turn your digital
                    dreams into reality.
                </Typography> */}
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
                {PROJECTS.map((props, idx) => (
                    <ProjectCard key={idx} {...props} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
