"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";

function About() {
    return (
        <section className="px-18 py-28">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 p-6 lg:p-16 bg-gray-100">
                {/* Left column */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    {/* Profile Image */}
                    <Image
                        src="/image/avatar-fadli1.jpg"
                        alt="Fadli Nurhidayat"
                        width={128}
                        height={128}
                        className="w-32 h-32 rounded-full object-cover mb-6"
                    />

                    {/* About */}
                    <div className="mb-8">
                        <h3 className="uppercase text-gray-400 font-semibold tracking-widest mb-2">
                            About
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            I&apos;m Fadli, a software engineering graduate passionate about building efficient,
                            scalable, and user-friendly web applications. With experience in
                            developing web-based application and desktop application, I enjoy solving problems
                            and continuously learning new technologies.
                        </p>
                    </div>

                    {/* Education */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase text-gray-500">Education</h3>
                        <div className="mt-1 text-gray-700">
                            <p className="font-medium">
                                Bachelor of Applied Computer Science (S.Tr.Kom)
                            </p>
                            <p className="text-sm text-gray-500">
                                Politeknik Enjindring Indorama · 2021 – 2025 · GPA: 3.58/4.00
                            </p>
                            <p className="mt-1 text-sm">
                                <span className="font-semibold">Relevant Coursework:</span> Data Structures & Algorithms, Database Systems,
                                Software Engineering, Data Mining, Machine Learning, Web Programming, Mobile Programming, Desktop Programming
                            </p>
                            <p className="mt-1 text-sm">
                                <span className="font-semibold">Final Project:</span> OptiGrade
                            </p>
                        </div>
                    </div>

                </div>

                {/* Right column */}
                <div className="space-y-10">
                    {/* Skills */}
                    <div>
                        <h3 className="uppercase text-gray-400 font-semibold tracking-widest mb-2">
                            Skills
                        </h3>
                        <p className="text-gray-700">
                            PHP, JavaScript, React.js, Vue.js, Next.js, Visual Basic, Node.js, Python, Git, HTML5,
                            Tailwind, Bootstrap, Java, SQL, Express.js, Laravel, MySQL, PostgreSQL, Git & Github.
                        </p>
                    </div>

                    {/* Experience */}
                    <div>
                        <h3 className="uppercase text-gray-400 font-semibold tracking-widest mb-2">
                            Experience
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <h4 className="font-semibold text-lg text-gray-700">Full-stack Developer Intern |
                                    <span className="text-sm text-gray-700"> PT. Sava Jaya Anugerah (Sept 2024 – Des 2025)</span>
                                </h4>
                                <p className="text-gray-700 text-sm mt-1">
                                    Contributed to 3 web-based applications using Laravel and jQuery
                                    AJAX to streamline internal operations.
                                </p>
                            </li>

                            <li>
                                <h4 className="font-semibold text-lg text-gray-700">Cloud Computing Cohort |
                                    <span className="text-sm text-gray-700"> Bangkit Academy (Feb 2024 – Jun 2024)</span>
                                </h4>
                                <p className="text-gray-700 text-sm mt-1">
                                    Completed a comprehensive cloud computing curriculum from basic
                                    to advanced using Google Cloud Platform.
                                </p>
                            </li>

                            <li>
                                <h4 className="font-semibold text-lg text-gray-700">Compunova |
                                    <span className="text-sm text-gray-700"> Part Time/Freelance (2022 – Present)</span>
                                </h4>
                                <p className="text-gray-700 text-sm mt-1">
                                    Developed custom app solutions for small businesses, contributed
                                    as backend developer.
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* CV Download */}
                    <div className="mt-6">
                        <div className="flex gap-3">
                            {/* Open in new tab */}
                            <Button
                                color="black"
                                size="lg"
                                className="flex items-center gap-2"
                                onClick={() => window.open("/Fadli_CV.pdf", "_blank", "noopener")}
                            >
                                Open CV
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
